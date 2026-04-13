// 音声再生関数
function speakZhuyin(pinyin) {
  // ブラウザの音声認識APIを使用
  const utterance = new SpeechSynthesisUtterance(pinyin);
  utterance.lang = 'zh-TW'; // 台湾中文
  utterance.rate = 0.8; // 少しゆっくり
  utterance.pitch = 1;
  utterance.volume = 1;

  // Chrome/Firefoxの場合、より良い結果を得るため
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
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
        s => s.consonant === consonant.zhuyin && s.vowel === vowel.zhuyin && s.tone === '1'
      );

      if (syllable) {
        const cell = document.createElement('td');
        cell.innerHTML = `
          <div class="syllable-zhuyin">${syllable.zhuyin}</div>
          <div class="syllable-romaji">${syllable.pinyin}</div>
          <div class="syllable-japanese">${syllable.japanese}</div>
        `;
        cell.addEventListener('click', function() {
          speakZhuyin(syllable.pinyin);
          cell.style.backgroundColor = '#e7f3ff';
          setTimeout(() => {
            cell.style.backgroundColor = '';
          }, 200);
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
