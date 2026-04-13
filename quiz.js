// クイズの状態管理
const quizState = {
  currentQuestion: 0,
  score: 0,
  totalQuestions: 10,
  questionsData: [],
  answered: false,
  selectedOption: null
};

// クイズ用問題生成関数
function generateQuizQuestions() {
  // すべての音節から問題データを生成
  quizState.questionsData = ZHUYIN_DATA.syllables.map(syllable => ({
    zhuyin: syllable.zhuyin,
    correct: syllable.pinyin,
    pinyin: syllable.pinyin,
    japanese: syllable.japanese,
    tone: syllable.tone
  }));

  // シャッフル＆最初の10問を取得
  quizState.questionsData = quizState.questionsData
    .sort(() => Math.random() - 0.5)
    .slice(0, quizState.totalQuestions);
}

// 4択の選択肢を生成
function generateOptions(currentQuestion) {
  const correct = currentQuestion.correct;
  const options = [correct];

  // 他の選択肢をランダムに選ぶ
  const otherOptions = ZHUYIN_DATA.syllables
    .filter(s => s.pinyin !== correct)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(s => s.pinyin);

  options.push(...otherOptions);

  // シャッフル
  return options.sort(() => Math.random() - 0.5);
}

// 進捗表示を更新
function updateProgress() {
  const progressEl = document.getElementById('progress');
  const questionNum = quizState.currentQuestion + 1;
  progressEl.textContent = `問題 ${questionNum}/${quizState.totalQuestions}`;
}

// 注音符号を表示
function displayZhuyin() {
  const zhuyinDisplay = document.getElementById('zhuyinDisplay');
  const currentQuestion = quizState.questionsData[quizState.currentQuestion];
  zhuyinDisplay.textContent = currentQuestion.zhuyin;
}

// 選択肢を表示
function displayOptions() {
  const optionsContainer = document.getElementById('optionsContainer');
  const currentQuestion = quizState.questionsData[quizState.currentQuestion];
  const options = generateOptions(currentQuestion);

  optionsContainer.innerHTML = '';
  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.addEventListener('click', () => selectOption(option, button));
    optionsContainer.appendChild(button);
  });
}

// 選択肢が選ばれた時の処理
function selectOption(selected, button) {
  if (quizState.answered) return;

  quizState.answered = true;
  quizState.selectedOption = selected;

  const currentQuestion = quizState.questionsData[quizState.currentQuestion];
  const isCorrect = selected === currentQuestion.correct;

  if (isCorrect) {
    quizState.score++;
    button.classList.add('correct');
    button.textContent = `${selected} ✓`;
  } else {
    button.classList.add('incorrect');
    button.textContent = `${selected} ✗`;

    // 正解ボタンもハイライト
    document.querySelectorAll('.option-btn').forEach(btn => {
      if (btn.textContent === currentQuestion.correct) {
        btn.classList.add('correct');
        btn.textContent = `${currentQuestion.correct} ✓`;
      }
    });
  }

  // 結果を表示
  showResult(isCorrect, currentQuestion);

  // 次へボタンを表示
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'block';
}

// 結果表示
function showResult(isCorrect, question) {
  const resultArea = document.getElementById('resultArea');
  const resultClass = isCorrect ? 'result correct' : 'result incorrect';
  const resultText = isCorrect ? '正解！' : '不正解';
  const pinyinText = `ピンイン: ${question.pinyin}`;
  const japaneseText = `日本語読み: ${question.japanese}`;

  resultArea.innerHTML = `
    <div class="${resultClass}">
      <p>${resultText}</p>
      <p>${pinyinText}</p>
      <p>${japaneseText}</p>
    </div>
  `;
}

// 次の問題へ
function nextQuestion() {
  quizState.currentQuestion++;
  quizState.answered = false;
  quizState.selectedOption = null;

  if (quizState.currentQuestion >= quizState.totalQuestions) {
    showFinalScore();
  } else {
    updateProgress();
    displayZhuyin();
    displayOptions();
    document.getElementById('resultArea').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';

    // 10問ごとに正解率を表示
    if (quizState.currentQuestion % 10 === 0 && quizState.currentQuestion > 0) {
      showIntermediateScore();
    }
  }
}

// 中間スコア表示（10問ごと）
function showIntermediateScore() {
  const percentage = Math.round((quizState.score / quizState.currentQuestion) * 100);
  const scoreArea = document.getElementById('resultArea');
  scoreArea.innerHTML = `
    <div class="score-display">
      <h3>ここまでのスコア</h3>
      <p>${quizState.score}/${quizState.currentQuestion}</p>
      <p>正解率: ${percentage}%</p>
    </div>
  `;
}

// 最終スコア表示
function showFinalScore() {
  const percentage = Math.round((quizState.score / quizState.totalQuestions) * 100);
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const progressEl = document.getElementById('progress');
  const scoreArea = document.getElementById('finalScoreArea');

  nextBtn.style.display = 'none';
  restartBtn.style.display = 'block';
  progressEl.innerHTML = 'クイズ完了！';

  scoreArea.innerHTML = `
    <div class="score-display">
      <h3>クイズ完了！</h3>
      <p>最終スコア: ${quizState.score}/${quizState.totalQuestions}</p>
      <p>正解率: ${percentage}%</p>
      <p>${getGrade(percentage)}</p>
    </div>
  `;
}

// 成績判定
function getGrade(percentage) {
  if (percentage === 100) return '🎉 完璧です！';
  if (percentage >= 80) return '🌟 素晴らしい！';
  if (percentage >= 60) return '👍 良くできました！';
  if (percentage >= 40) return '📚 もう少しで得意になりますね';
  return '💪 もっと練習しましょう！';
}

// クイズをリスタート
function restartQuiz() {
  quizState.currentQuestion = 0;
  quizState.score = 0;
  quizState.answered = false;
  quizState.selectedOption = null;

  generateQuizQuestions();

  document.getElementById('finalScoreArea').innerHTML = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('restartBtn').style.display = 'none';

  updateProgress();
  displayZhuyin();
  displayOptions();
  document.getElementById('resultArea').innerHTML = '';
}

// ページロード時の処理
document.addEventListener('DOMContentLoaded', function() {
  updateActiveNav();

  // クイズを開始
  generateQuizQuestions();
  updateProgress();
  displayZhuyin();
  displayOptions();

  // イベントリスナーを設定
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
  document.getElementById('restartBtn').addEventListener('click', restartQuiz);
});
