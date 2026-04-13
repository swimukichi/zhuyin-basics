// クイズの状態管理
const quizState = {
  currentQuestion: 0,
  score: 0,
  totalQuestions: 10,
  questionsData: [],
  answered: false,
  selectedOption: null
};

// クイズ用問題生成関数（声調判定を含む）
function generateQuizQuestions() {
  // すべての音節から問題データを生成
  const readingQuestions = ZHUYIN_DATA.syllables.map(syllable => ({
    type: 'reading',
    zhuyin: syllable.zhuyin,
    correct: syllable.pinyin,
    pinyin: syllable.pinyin,
    japanese: syllable.japanese,
    question: '読み方は？'
  }));

  // 声調判定問題を生成（複数回の音節から）
  const toneQuestions = [];
  const tones = ['1', '2', '3', '4', '5'];
  for (let i = 0; i < 3; i++) {
    const randomSyllable = ZHUYIN_DATA.syllables[Math.floor(Math.random() * ZHUYIN_DATA.syllables.length)];
    const randomTone = tones[Math.random() * 5 | 0];
    const pinyinWithTone = getToneMarkedPinyin(randomSyllable.pinyin, randomTone);
    const hanzi = getToneHanzi(randomSyllable.pinyin, randomTone);
    
    toneQuestions.push({
      type: 'tone',
      zhuyin: randomSyllable.zhuyin,
      pinyin: randomSyllable.pinyin,
      pinyinWithTone: pinyinWithTone,
      hanzi: hanzi,
      correct: TONE_SYMBOLS[randomTone].desc,
      tone: randomTone,
      japanese: randomSyllable.japanese,
      question: `「${hanzi}」は何声？`
    });
  }

  // 7問の読み方 + 3問の声調判定
  quizState.questionsData = [
    ...readingQuestions.sort(() => Math.random() - 0.5).slice(0, 7),
    ...toneQuestions
  ];
  
  // シャッフル
  quizState.questionsData = quizState.questionsData.sort(() => Math.random() - 0.5);
  quizState.totalQuestions = quizState.questionsData.length;
}

// 4択の選択肢を生成
function generateOptions(currentQuestion) {
  const correct = currentQuestion.correct;
  const options = [correct];

  let otherOptions = [];
  
  if (currentQuestion.type === 'reading') {
    // 読み方問題 - 他のピンインを選択肢として使う
    otherOptions = ZHUYIN_DATA.syllables
      .filter(s => s.pinyin !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(s => s.pinyin);
  } else if (currentQuestion.type === 'tone') {
    // 声調判定問題 - 他の声調を選択肢として使う
    const tones = ['1', '2', '3', '4', '5'];
    otherOptions = tones
      .filter(t => TONE_SYMBOLS[t].desc !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(t => TONE_SYMBOLS[t].desc);
  }

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

// 注音符号と問題文を表示
function displayZhuyin() {
  const zhuyinDisplay = document.getElementById('zhuyinDisplay');
  const quizQuestion = document.getElementById('quiz-question');
  const currentQuestion = quizState.questionsData[quizState.currentQuestion];
  
  if (currentQuestion.type === 'reading') {
    zhuyinDisplay.textContent = currentQuestion.zhuyin;
    quizQuestion.textContent = '読み方は？';
  } else if (currentQuestion.type === 'tone') {
    zhuyinDisplay.innerHTML = `<span class="tone-pinyin-display">${currentQuestion.hanzi}</span>`;
    quizQuestion.textContent = currentQuestion.question;
  }
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
  
  let detailText = '';
  if (question.type === 'reading') {
    detailText = `
      <p>ピンイン: ${question.pinyin}</p>
      <p>日本語読み: ${question.japanese}</p>
    `;
  } else if (question.type === 'tone') {
    detailText = `
      <p>ピンイン（声調付き）: ${question.pinyinWithTone}</p>
      <p>声調: ${question.correct}</p>
      <p>日本語読み: ${question.japanese}</p>
    `;
  }

  resultArea.innerHTML = `
    <div class="${resultClass}">
      <p>${resultText}</p>
      ${detailText}
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
