// 音声再生関数（ピンイン付き声調対応版）
function speakZhuyin(pinyin, tone = '1') {
  // 声調マーク付きピンインを取得
  const pinyinWithTone = getToneMarkedPinyin(pinyin, tone);
  
  // ブラウザの音声認識APIを使用
  const utterance = new SpeechSynthesisUtterance(pinyinWithTone);
  utterance.lang = 'zh-TW'; // 台湾中文
  utterance.rate = 0.8; // 少しゆっくり
  utterance.pitch = 1;
  utterance.volume = 1;

  // Chrome/Firefoxの場合、より良い結果を得るため
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// 声調ボタンUIを表示する関数
function showToneButtons(cell, pinyin, syllable) {
  // 既存のボタンがあれば削除
  const existingPanel = document.getElementById('tone-panel');
  if (existingPanel) existingPanel.remove();
  
  // 声調パネルを作成
  const panel = document.createElement('div');
  panel.id = 'tone-panel';
  panel.className = 'tone-panel';
  
  const title = document.createElement('div');
  title.className = 'tone-title';
  title.textContent = `${syllable.zhuyin} (${pinyin})`;
  panel.appendChild(title);
  
  // 声調ボタンを作成
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'tone-buttons';
  
  for (let tone = 1; tone <= 5; tone++) {
    const btn = document.createElement('button');
    btn.className = 'tone-btn';
    const toneInfo = TONE_SYMBOLS[tone.toString()];
    const toneMarkedPinyin = getToneMarkedPinyin(pinyin, tone.toString());
    btn.innerHTML = `<span class="tone-mark">${toneInfo.mark}</span><br><span class="tone-pinyin">${toneMarkedPinyin}</span><br><span class="tone-desc">${toneInfo.desc}</span>`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakZhuyin(pinyin, tone.toString());
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 200);
    });
    buttonContainer.appendChild(btn);
  }
  
  panel.appendChild(buttonContainer);
  
  // パネルを配置（セルの下）
  const rect = cell.getBoundingClientRect();
  panel.style.top = (rect.bottom + 10) + 'px';
  panel.style.left = (rect.left) + 'px';
  
  document.body.appendChild(panel);
  
  // 外側クリックで閉じる
  document.addEventListener('click', function closePanel() {
    if (panel.parentNode) panel.remove();
    document.removeEventListener('click', closePanel);
  });
}

// 音節表を生成する関数
function generateSyllableTable() {
  const table = document.getElementById('syllableTable');
  if (!table) return;

  table.innerHTML = '';

  // ヘッダー行（韻母）を追加
  const headerRow = document.createElement('tr');
  const emptyCell = document.createElement('td');
  emptyCell.textContent = '';
  headerRow.appendChild(emptyCell);

  ZHUYIN_DATA.vowels.forEach(vowel => {
    const cell = document.createElement('td');
    cell.innerHTML = `
      <div class="syllable-zhuyin">${vowel.zhuyin}</div>
      <div class="syllable-romaji">${vowel.pinyin}</div>
      <div class="syllable-japanese">${vowel.japanese}</div>
    `;
    cell.style.fontWeight = 'bold';
    cell.style.backgroundColor = '#f0f0f0';
    headerRow.appendChild(cell);
  });

  table.appendChild(headerRow);

  // 各声母の行を追加
  ZHUYIN_DATA.consonants.forEach(consonant => {
    const row = document.createElement('tr');

    // 声母セル（ヘッダー）
    const consonantCell = document.createElement('td');
    consonantCell.innerHTML = `
      <div class="syllable-zhuyin">${consonant.zhuyin}</div>
      <div class="syllable-romaji">${consonant.pinyin}</div>
      <div class="syllable-japanese">${consonant.japanese}</div>
    `;
    consonantCell.style.fontWeight = 'bold';
    consonantCell.style.backgroundColor = '#f0f0f0';
    row.appendChild(consonantCell);

    // 各韻母との組み合わせをセルに追加
    ZHUYIN_DATA.vowels.forEach(vowel => {
      const syllable = ZHUYIN_DATA.syllables.find(
        s => s.consonant === consonant.zhuyin && s.vowel === vowel.zhuyin
      );

      if (syllable) {
        const cell = document.createElement('td');
        cell.innerHTML = `
          <div class="syllable-zhuyin">${syllable.zhuyin}</div>
          <div class="syllable-romaji">${syllable.pinyin}</div>
          <div class="tone-buttons">
            ${Object.keys(TONE_SYMBOLS).map(tone => `
              <button class="tone-btn" data-tone="${tone}" title="${TONE_SYMBOLS[tone].desc}">
                ${TONE_SYMBOLS[tone].mark}
              </button>
            `).join('')}
          </div>
          <div class="syllable-japanese">${syllable.japanese}</div>
        `;
        // ボタンにイベントリスナーを追加
        cell.querySelectorAll('.tone-btn').forEach(btn => {
          btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const tone = this.getAttribute('data-tone');
            speakZhuyin(syllable.pinyin, tone);
            this.classList.add('active');
            setTimeout(() => this.classList.remove('active'), 200);
          });
        });
        row.appendChild(cell);
      }
    });

    table.appendChild(row);
  });
}

// ページロード時に処理を実行
document.addEventListener('DOMContentLoaded', function() {
  generateSyllableTable();

  // ナビゲーションのアクティブ状態を管理
  updateActiveNav();
});

// 現在のページのナビゲーションをアクティブにする
function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href.includes(currentPage) || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
