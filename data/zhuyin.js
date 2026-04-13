// 注音符号（BoPoMoFo）学習データ - 声調対応版

// 声調シンボルと説明
const TONE_SYMBOLS = {
  '1': { mark: 'ˉ', desc: '第1声' },
  '2': { mark: 'ˊ', desc: '第2声' },
  '3': { mark: 'ˇ', desc: '第3声' },
  '4': { mark: 'ˋ', desc: '第4声' },
  '5': { mark: '・', desc: '軽声' }
};

// 標準のピンイン（声調記号付き） - 漢字版
const TONE_HANZI = {
  'ma': ['妈', '麻', '马', '骂', '吗'],
  'mo': ['摸', '魔', '磨', '末', '么'],
  'ba': ['爸', '八', '把', '爸', '吧'],
  'pa': ['趴', '爬', '怕', '怕', '啪'],
  'po': ['坡', '泼', '破', '破', '颇'],
  'me': ['么', '没', '么', '么', '么'],
  'bo': ['玻', '拨', '波', '波', '薄'],
  'fo': ['佛', '佛', '佛', '佛', '佛'],
  'fa': ['发', '发', '发', '发', '发'],
  'da': ['搭', '打', '大', '达', '答'],
  'ta': ['他', '她', '它', '它', '它'],
  'na': ['拿', '哪', '那', '那', '那'],
  'la': ['拉', '啦', '拉', '拉', '拉'],
  'ga': ['嘎', '嘎', '嘎', '嘎', '嘎'],
  'ka': ['咖', '卡', '卡', '卡', '卡'],
  'ha': ['哈', '哈', '哈', '哈', '哈'],
  'ji': ['鸡', '鸡', '鸡', '鸡', '鸡'],
  'qi': ['七', '起', '气', '气', '气'],
  'xi': ['西', '西', '西', '西', '西'],
  'zha': ['扎', '扎', '扎', '扎', '扎'],
  'cha': ['叉', '茶', '茶', '茶', '茶'],
  'sha': ['沙', '沙', '沙', '沙', '沙'],
  'ra': ['然', '然', '然', '然', '然'],
  'za': ['杂', '杂', '杂', '杂', '杂'],
  'ca': ['擦', '擦', '擦', '擦', '擦'],
  'sa': ['撒', '撒', '撒', '撒', '撒']
  // 他の音節も追加可能
};

// ピンイン標準化（その他のすべて） - 漢字版
function getToneHanzi(pinyin, tone) {
  // 特定のマッピングがある場合はそれを使用
  if (TONE_HANZI[pinyin]) {
    return TONE_HANZI[pinyin][parseInt(tone) - 1] || pinyin;
  }
  // デフォルト - 代表的な漢字を返す（仮）
  return pinyin; // 漢字がない場合はピンインを返す
}

const ZHUYIN_DATA = {
  // 声母（子音） - 21個
  consonants: [
    { zhuyin: 'ㄅ', pinyin: 'b', japanese: 'バ行' },
    { zhuyin: 'ㄆ', pinyin: 'p', japanese: 'パ行' },
    { zhuyin: 'ㄇ', pinyin: 'm', japanese: 'マ行' },
    { zhuyin: 'ㄈ', pinyin: 'f', japanese: 'ファ行' },
    { zhuyin: 'ㄉ', pinyin: 'd', japanese: 'ダ行' },
    { zhuyin: 'ㄊ', pinyin: 't', japanese: 'タ行' },
    { zhuyin: 'ㄋ', pinyin: 'n', japanese: 'ナ行' },
    { zhuyin: 'ㄌ', pinyin: 'l', japanese: 'ラ行' },
    { zhuyin: 'ㄍ', pinyin: 'g', japanese: 'ガ行' },
    { zhuyin: 'ㄎ', pinyin: 'k', japanese: 'カ行' },
    { zhuyin: 'ㄏ', pinyin: 'h', japanese: 'ハ行' },
    { zhuyin: 'ㄐ', pinyin: 'j', japanese: 'ジャ行' },
    { zhuyin: 'ㄑ', pinyin: 'q', japanese: 'チャ行' },
    { zhuyin: 'ㄒ', pinyin: 'x', japanese: 'シャ行' },
    { zhuyin: 'ㄓ', pinyin: 'zh', japanese: 'ジュ行' },
    { zhuyin: 'ㄔ', pinyin: 'ch', japanese: 'チュ行' },
    { zhuyin: 'ㄕ', pinyin: 'sh', japanese: 'シュ行' },
    { zhuyin: 'ㄖ', pinyin: 'r', japanese: 'ル行' },
    { zhuyin: 'ㄗ', pinyin: 'z', japanese: 'ザ行' },
    { zhuyin: 'ㄘ', pinyin: 'c', japanese: 'ツァ行' },
    { zhuyin: 'ㄙ', pinyin: 's', japanese: 'サ行' }
  ],

  // 韻母（母音・複合母音） - 16個
  vowels: [
    { zhuyin: 'ㄚ', pinyin: 'a', japanese: 'ア' },
    { zhuyin: 'ㄛ', pinyin: 'o', japanese: 'オ' },
    { zhuyin: 'ㄜ', pinyin: 'e', japanese: 'エ' },
    { zhuyin: 'ㄝ', pinyin: 'ê', japanese: 'エ' },
    { zhuyin: 'ㄞ', pinyin: 'ai', japanese: 'アイ' },
    { zhuyin: 'ㄟ', pinyin: 'ei', japanese: 'エイ' },
    { zhuyin: 'ㄠ', pinyin: 'ao', japanese: 'アオ' },
    { zhuyin: 'ㄡ', pinyin: 'ou', japanese: 'オウ' },
    { zhuyin: 'ㄢ', pinyin: 'an', japanese: 'アン' },
    { zhuyin: 'ㄣ', pinyin: 'en', japanese: 'エン' },
    { zhuyin: 'ㄤ', pinyin: 'ang', japanese: 'アン（鼻音）' },
    { zhuyin: 'ㄥ', pinyin: 'eng', japanese: 'エン（鼻音）' },
    { zhuyin: 'ㄦ', pinyin: 'er', japanese: 'アー' },
    { zhuyin: 'ㄧ', pinyin: 'i', japanese: 'イ' },
    { zhuyin: 'ㄨ', pinyin: 'u', japanese: 'ウ' },
    { zhuyin: 'ㄩ', pinyin: 'ü', japanese: 'ユ' }
  ],

  // 声母と韻母の組み合わせ音節（すべての基本的な中国語の音節）
  syllables: [
    // ㄅ (b)
    { zhuyin: 'ㄅㄚ', pinyin: 'ba', japanese: 'バ', tone: '1', consonant: 'ㄅ', vowel: 'ㄚ' },
    { zhuyin: 'ㄅㄚ', pinyin: 'bá', japanese: 'バ（上声）', tone: '2', consonant: 'ㄅ', vowel: 'ㄚ' },
    { zhuyin: 'ㄅㄚ', pinyin: 'bǎ', japanese: 'バ（去声）', tone: '3', consonant: 'ㄅ', vowel: 'ㄚ' },
    { zhuyin: 'ㄅㄚ', pinyin: 'bà', japanese: 'バ（去声）', tone: '4', consonant: 'ㄅ', vowel: 'ㄚ' },
    
    { zhuyin: 'ㄅㄛ', pinyin: 'bo', japanese: 'ボ', tone: '1', consonant: 'ㄅ', vowel: 'ㄛ' },
    { zhuyin: 'ㄅㄞ', pinyin: 'bai', japanese: 'バイ', tone: '1', consonant: 'ㄅ', vowel: 'ㄞ' },
    { zhuyin: 'ㄅㄢ', pinyin: 'ban', japanese: 'バン', tone: '1', consonant: 'ㄅ', vowel: 'ㄢ' },
    { zhuyin: 'ㄅㄤ', pinyin: 'bang', japanese: 'バン', tone: '1', consonant: 'ㄅ', vowel: 'ㄤ' },
    { zhuyin: 'ㄅㄣ', pinyin: 'ben', japanese: 'ベン', tone: '1', consonant: 'ㄅ', vowel: 'ㄣ' },
    { zhuyin: 'ㄅㄥ', pinyin: 'beng', japanese: 'ベン', tone: '1', consonant: 'ㄅ', vowel: 'ㄥ' },

    // ㄆ (p)
    { zhuyin: 'ㄆㄚ', pinyin: 'pa', japanese: 'パ', tone: '1', consonant: 'ㄆ', vowel: 'ㄚ' },
    { zhuyin: 'ㄆㄛ', pinyin: 'po', japanese: 'ポ', tone: '1', consonant: 'ㄆ', vowel: 'ㄛ' },
    { zhuyin: 'ㄆㄞ', pinyin: 'pai', japanese: 'パイ', tone: '1', consonant: 'ㄆ', vowel: 'ㄞ' },
    { zhuyin: 'ㄆㄢ', pinyin: 'pan', japanese: 'パン', tone: '1', consonant: 'ㄆ', vowel: 'ㄢ' },
    { zhuyin: 'ㄆㄤ', pinyin: 'pang', japanese: 'パン', tone: '1', consonant: 'ㄆ', vowel: 'ㄤ' },
    { zhuyin: 'ㄆㄣ', pinyin: 'pen', japanese: 'ペン', tone: '1', consonant: 'ㄆ', vowel: 'ㄣ' },
    { zhuyin: 'ㄆㄥ', pinyin: 'peng', japanese: 'ペン', tone: '1', consonant: 'ㄆ', vowel: 'ㄥ' },

    // ㄇ (m)
    { zhuyin: 'ㄇㄚ', pinyin: 'ma', japanese: 'マ', tone: '1', consonant: 'ㄇ', vowel: 'ㄚ' },
    { zhuyin: 'ㄇㄛ', pinyin: 'mo', japanese: 'モ', tone: '1', consonant: 'ㄇ', vowel: 'ㄛ' },
    { zhuyin: 'ㄇㄜ', pinyin: 'me', japanese: 'メ', tone: '1', consonant: 'ㄇ', vowel: 'ㄜ' },
    { zhuyin: 'ㄇㄞ', pinyin: 'mai', japanese: 'マイ', tone: '1', consonant: 'ㄇ', vowel: 'ㄞ' },
    { zhuyin: 'ㄇㄢ', pinyin: 'man', japanese: 'マン', tone: '1', consonant: 'ㄇ', vowel: 'ㄢ' },
    { zhuyin: 'ㄇㄤ', pinyin: 'mang', japanese: 'マン', tone: '1', consonant: 'ㄇ', vowel: 'ㄤ' },
    { zhuyin: 'ㄇㄣ', pinyin: 'men', japanese: 'メン', tone: '1', consonant: 'ㄇ', vowel: 'ㄣ' },
    { zhuyin: 'ㄇㄥ', pinyin: 'meng', japanese: 'メン', tone: '1', consonant: 'ㄇ', vowel: 'ㄥ' },

    // ㄈ (f)
    { zhuyin: 'ㄈㄚ', pinyin: 'fa', japanese: 'ファ', tone: '1', consonant: 'ㄈ', vowel: 'ㄚ' },
    { zhuyin: 'ㄈㄛ', pinyin: 'fo', japanese: 'フォ', tone: '1', consonant: 'ㄈ', vowel: 'ㄛ' },
    { zhuyin: 'ㄈㄟ', pinyin: 'fei', japanese: 'フェイ', tone: '1', consonant: 'ㄈ', vowel: 'ㄟ' },
    { zhuyin: 'ㄈㄢ', pinyin: 'fan', japanese: 'ファン', tone: '1', consonant: 'ㄈ', vowel: 'ㄢ' },
    { zhuyin: 'ㄈㄤ', pinyin: 'fang', japanese: 'ファン', tone: '1', consonant: 'ㄈ', vowel: 'ㄤ' },
    { zhuyin: 'ㄈㄣ', pinyin: 'fen', japanese: 'フェン', tone: '1', consonant: 'ㄈ', vowel: 'ㄣ' },
    { zhuyin: 'ㄈㄥ', pinyin: 'feng', japanese: 'フェン', tone: '1', consonant: 'ㄈ', vowel: 'ㄥ' },

    // ㄉ (d)
    { zhuyin: 'ㄉㄚ', pinyin: 'da', japanese: 'ダ', tone: '1', consonant: 'ㄉ', vowel: 'ㄚ' },
    { zhuyin: 'ㄉㄛ', pinyin: 'do', japanese: 'ド', tone: '1', consonant: 'ㄉ', vowel: 'ㄛ' },
    { zhuyin: 'ㄉㄞ', pinyin: 'dai', japanese: 'ダイ', tone: '1', consonant: 'ㄉ', vowel: 'ㄞ' },
    { zhuyin: 'ㄉㄢ', pinyin: 'dan', japanese: 'ダン', tone: '1', consonant: 'ㄉ', vowel: 'ㄢ' },
    { zhuyin: 'ㄉㄤ', pinyin: 'dang', japanese: 'ダン', tone: '1', consonant: 'ㄉ', vowel: 'ㄤ' },
    { zhuyin: 'ㄉㄣ', pinyin: 'den', japanese: 'デン', tone: '1', consonant: 'ㄉ', vowel: 'ㄣ' },
    { zhuyin: 'ㄉㄥ', pinyin: 'deng', japanese: 'デン', tone: '1', consonant: 'ㄉ', vowel: 'ㄥ' },

    // ㄊ (t)
    { zhuyin: 'ㄊㄚ', pinyin: 'ta', japanese: 'タ', tone: '1', consonant: 'ㄊ', vowel: 'ㄚ' },
    { zhuyin: 'ㄊㄛ', pinyin: 'to', japanese: 'ト', tone: '1', consonant: 'ㄊ', vowel: 'ㄛ' },
    { zhuyin: 'ㄊㄞ', pinyin: 'tai', japanese: 'タイ', tone: '1', consonant: 'ㄊ', vowel: 'ㄞ' },
    { zhuyin: 'ㄊㄢ', pinyin: 'tan', japanese: 'タン', tone: '1', consonant: 'ㄊ', vowel: 'ㄢ' },
    { zhuyin: 'ㄊㄤ', pinyin: 'tang', japanese: 'タン', tone: '1', consonant: 'ㄊ', vowel: 'ㄤ' },
    { zhuyin: 'ㄊㄣ', pinyin: 'ten', japanese: 'テン', tone: '1', consonant: 'ㄊ', vowel: 'ㄣ' },
    { zhuyin: 'ㄊㄥ', pinyin: 'teng', japanese: 'テン', tone: '1', consonant: 'ㄊ', vowel: 'ㄥ' },

    // ㄋ (n)
    { zhuyin: 'ㄋㄚ', pinyin: 'na', japanese: 'ナ', tone: '1', consonant: 'ㄋ', vowel: 'ㄚ' },
    { zhuyin: 'ㄋㄛ', pinyin: 'no', japanese: 'ノ', tone: '1', consonant: 'ㄋ', vowel: 'ㄛ' },
    { zhuyin: 'ㄋㄞ', pinyin: 'nai', japanese: 'ナイ', tone: '1', consonant: 'ㄋ', vowel: 'ㄞ' },
    { zhuyin: 'ㄋㄢ', pinyin: 'nan', japanese: 'ナン', tone: '1', consonant: 'ㄋ', vowel: 'ㄢ' },
    { zhuyin: 'ㄋㄤ', pinyin: 'nang', japanese: 'ナン', tone: '1', consonant: 'ㄋ', vowel: 'ㄤ' },
    { zhuyin: 'ㄋㄣ', pinyin: 'nen', japanese: 'ネン', tone: '1', consonant: 'ㄋ', vowel: 'ㄣ' },
    { zhuyin: 'ㄋㄥ', pinyin: 'neng', japanese: 'ネン', tone: '1', consonant: 'ㄋ', vowel: 'ㄥ' },

    // ㄌ (l)
    { zhuyin: 'ㄌㄚ', pinyin: 'la', japanese: 'ラ', tone: '1', consonant: 'ㄌ', vowel: 'ㄚ' },
    { zhuyin: 'ㄌㄛ', pinyin: 'lo', japanese: 'ロ', tone: '1', consonant: 'ㄌ', vowel: 'ㄛ' },
    { zhuyin: 'ㄌㄞ', pinyin: 'lai', japanese: 'ライ', tone: '1', consonant: 'ㄌ', vowel: 'ㄞ' },
    { zhuyin: 'ㄌㄢ', pinyin: 'lan', japanese: 'ラン', tone: '1', consonant: 'ㄌ', vowel: 'ㄢ' },
    { zhuyin: 'ㄌㄤ', pinyin: 'lang', japanese: 'ラン', tone: '1', consonant: 'ㄌ', vowel: 'ㄤ' },
    { zhuyin: 'ㄌㄣ', pinyin: 'len', japanese: 'レン', tone: '1', consonant: 'ㄌ', vowel: 'ㄣ' },
    { zhuyin: 'ㄌㄥ', pinyin: 'leng', japanese: 'レン', tone: '1', consonant: 'ㄌ', vowel: 'ㄥ' },

    // ㄍ (g)
    { zhuyin: 'ㄍㄚ', pinyin: 'ga', japanese: 'ガ', tone: '1', consonant: 'ㄍ', vowel: 'ㄚ' },
    { zhuyin: 'ㄍㄛ', pinyin: 'go', japanese: 'ゴ', tone: '1', consonant: 'ㄍ', vowel: 'ㄛ' },
    { zhuyin: 'ㄍㄞ', pinyin: 'gai', japanese: 'ガイ', tone: '1', consonant: 'ㄍ', vowel: 'ㄞ' },
    { zhuyin: 'ㄍㄢ', pinyin: 'gan', japanese: 'ガン', tone: '1', consonant: 'ㄍ', vowel: 'ㄢ' },
    { zhuyin: 'ㄍㄤ', pinyin: 'gang', japanese: 'ガン', tone: '1', consonant: 'ㄍ', vowel: 'ㄤ' },
    { zhuyin: 'ㄍㄣ', pinyin: 'gen', japanese: 'ゲン', tone: '1', consonant: 'ㄍ', vowel: 'ㄣ' },
    { zhuyin: 'ㄍㄥ', pinyin: 'geng', japanese: 'ゲン', tone: '1', consonant: 'ㄍ', vowel: 'ㄥ' },

    // ㄎ (k)
    { zhuyin: 'ㄎㄚ', pinyin: 'ka', japanese: 'カ', tone: '1', consonant: 'ㄎ', vowel: 'ㄚ' },
    { zhuyin: 'ㄎㄛ', pinyin: 'ko', japanese: 'コ', tone: '1', consonant: 'ㄎ', vowel: 'ㄛ' },
    { zhuyin: 'ㄎㄞ', pinyin: 'kai', japanese: 'カイ', tone: '1', consonant: 'ㄎ', vowel: 'ㄞ' },
    { zhuyin: 'ㄎㄢ', pinyin: 'kan', japanese: 'カン', tone: '1', consonant: 'ㄎ', vowel: 'ㄢ' },
    { zhuyin: 'ㄎㄤ', pinyin: 'kang', japanese: 'カン', tone: '1', consonant: 'ㄎ', vowel: 'ㄤ' },
    { zhuyin: 'ㄎㄣ', pinyin: 'ken', japanese: 'ケン', tone: '1', consonant: 'ㄎ', vowel: 'ㄣ' },
    { zhuyin: 'ㄎㄥ', pinyin: 'keng', japanese: 'ケン', tone: '1', consonant: 'ㄎ', vowel: 'ㄥ' },

    // ㄏ (h)
    { zhuyin: 'ㄏㄚ', pinyin: 'ha', japanese: 'ハ', tone: '1', consonant: 'ㄏ', vowel: 'ㄚ' },
    { zhuyin: 'ㄏㄛ', pinyin: 'ho', japanese: 'ホ', tone: '1', consonant: 'ㄏ', vowel: 'ㄛ' },
    { zhuyin: 'ㄏㄞ', pinyin: 'hai', japanese: 'ハイ', tone: '1', consonant: 'ㄏ', vowel: 'ㄞ' },
    { zhuyin: 'ㄏㄢ', pinyin: 'han', japanese: 'ハン', tone: '1', consonant: 'ㄏ', vowel: 'ㄢ' },
    { zhuyin: 'ㄏㄤ', pinyin: 'hang', japanese: 'ハン', tone: '1', consonant: 'ㄏ', vowel: 'ㄤ' },
    { zhuyin: 'ㄏㄣ', pinyin: 'hen', japanese: 'ヘン', tone: '1', consonant: 'ㄏ', vowel: 'ㄣ' },
    { zhuyin: 'ㄏㄥ', pinyin: 'heng', japanese: 'ヘン', tone: '1', consonant: 'ㄏ', vowel: 'ㄥ' },

    // ㄐ (j)
    { zhuyin: 'ㄐㄧ', pinyin: 'ji', japanese: 'ジ', tone: '1', consonant: 'ㄐ', vowel: 'ㄧ' },
    { zhuyin: 'ㄐㄩ', pinyin: 'ju', japanese: 'ジュ', tone: '1', consonant: 'ㄐ', vowel: 'ㄩ' },
    { zhuyin: 'ㄐㄧㄢ', pinyin: 'jian', japanese: 'ジエン', tone: '1', consonant: 'ㄐ', vowel: 'ㄧㄢ' },
    { zhuyin: 'ㄐㄧㄤ', pinyin: 'jiang', japanese: 'ジエン', tone: '1', consonant: 'ㄐ', vowel: 'ㄧㄤ' },
    { zhuyin: 'ㄐㄧㄥ', pinyin: 'jing', japanese: 'ジン', tone: '1', consonant: 'ㄐ', vowel: 'ㄧㄥ' },
    { zhuyin: 'ㄐㄩㄢ', pinyin: 'juan', japanese: 'ジュエン', tone: '1', consonant: 'ㄐ', vowel: 'ㄩㄢ' },
    { zhuyin: 'ㄐㄩㄥ', pinyin: 'jiong', japanese: 'ジョン', tone: '1', consonant: 'ㄐ', vowel: 'ㄩㄥ' },

    // ㄑ (q)
    { zhuyin: 'ㄑㄧ', pinyin: 'qi', japanese: 'チ', tone: '1', consonant: 'ㄑ', vowel: 'ㄧ' },
    { zhuyin: 'ㄑㄩ', pinyin: 'qu', japanese: 'チュ', tone: '1', consonant: 'ㄑ', vowel: 'ㄩ' },
    { zhuyin: 'ㄑㄧㄢ', pinyin: 'qian', japanese: 'チエン', tone: '1', consonant: 'ㄑ', vowel: 'ㄧㄢ' },
    { zhuyin: 'ㄑㄧㄤ', pinyin: 'qiang', japanese: 'チエン', tone: '1', consonant: 'ㄑ', vowel: 'ㄧㄤ' },
    { zhuyin: 'ㄑㄧㄥ', pinyin: 'qing', japanese: 'チン', tone: '1', consonant: 'ㄑ', vowel: 'ㄧㄥ' },
    { zhuyin: 'ㄑㄩㄢ', pinyin: 'quan', japanese: 'チュエン', tone: '1', consonant: 'ㄑ', vowel: 'ㄩㄢ' },
    { zhuyin: 'ㄑㄩㄥ', pinyin: 'qiong', japanese: 'チョン', tone: '1', consonant: 'ㄑ', vowel: 'ㄩㄥ' },

    // ㄒ (x)
    { zhuyin: 'ㄒㄧ', pinyin: 'xi', japanese: 'シ', tone: '1', consonant: 'ㄒ', vowel: 'ㄧ' },
    { zhuyin: 'ㄒㄩ', pinyin: 'xu', japanese: 'シュ', tone: '1', consonant: 'ㄒ', vowel: 'ㄩ' },
    { zhuyin: 'ㄒㄧㄢ', pinyin: 'xian', japanese: 'シエン', tone: '1', consonant: 'ㄒ', vowel: 'ㄧㄢ' },
    { zhuyin: 'ㄒㄧㄤ', pinyin: 'xiang', japanese: 'シエン', tone: '1', consonant: 'ㄒ', vowel: 'ㄧㄤ' },
    { zhuyin: 'ㄒㄧㄥ', pinyin: 'xing', japanese: 'シン', tone: '1', consonant: 'ㄒ', vowel: 'ㄧㄥ' },
    { zhuyin: 'ㄒㄩㄢ', pinyin: 'xuan', japanese: 'シュエン', tone: '1', consonant: 'ㄒ', vowel: 'ㄩㄢ' },
    { zhuyin: 'ㄒㄩㄥ', pinyin: 'xiong', japanese: 'ション', tone: '1', consonant: 'ㄒ', vowel: 'ㄩㄥ' },

    // ㄓ (zh)
    { zhuyin: 'ㄓㄚ', pinyin: 'zha', japanese: 'ジャ', tone: '1', consonant: 'ㄓ', vowel: 'ㄚ' },
    { zhuyin: 'ㄓㄛ', pinyin: 'zho', japanese: 'ジョ', tone: '1', consonant: 'ㄓ', vowel: 'ㄛ' },
    { zhuyin: 'ㄓㄜ', pinyin: 'zhe', japanese: 'ジェ', tone: '1', consonant: 'ㄓ', vowel: 'ㄜ' },
    { zhuyin: 'ㄓㄞ', pinyin: 'zhai', japanese: 'ジャイ', tone: '1', consonant: 'ㄓ', vowel: 'ㄞ' },
    { zhuyin: 'ㄓㄢ', pinyin: 'zhan', japanese: 'ジャン', tone: '1', consonant: 'ㄓ', vowel: 'ㄢ' },
    { zhuyin: 'ㄓㄤ', pinyin: 'zhang', japanese: 'ジャン', tone: '1', consonant: 'ㄓ', vowel: 'ㄤ' },
    { zhuyin: 'ㄓㄣ', pinyin: 'zhen', japanese: 'ジェン', tone: '1', consonant: 'ㄓ', vowel: 'ㄣ' },
    { zhuyin: 'ㄓㄥ', pinyin: 'zheng', japanese: 'ジェン', tone: '1', consonant: 'ㄓ', vowel: 'ㄥ' },

    // ㄔ (ch)
    { zhuyin: 'ㄔㄚ', pinyin: 'cha', japanese: 'チャ', tone: '1', consonant: 'ㄔ', vowel: 'ㄚ' },
    { zhuyin: 'ㄔㄛ', pinyin: 'cho', japanese: 'チョ', tone: '1', consonant: 'ㄔ', vowel: 'ㄛ' },
    { zhuyin: 'ㄔㄜ', pinyin: 'che', japanese: 'チェ', tone: '1', consonant: 'ㄔ', vowel: 'ㄜ' },
    { zhuyin: 'ㄔㄞ', pinyin: 'chai', japanese: 'チャイ', tone: '1', consonant: 'ㄔ', vowel: 'ㄞ' },
    { zhuyin: 'ㄔㄢ', pinyin: 'chan', japanese: 'チャン', tone: '1', consonant: 'ㄔ', vowel: 'ㄢ' },
    { zhuyin: 'ㄔㄤ', pinyin: 'chang', japanese: 'チャン', tone: '1', consonant: 'ㄔ', vowel: 'ㄤ' },
    { zhuyin: 'ㄔㄣ', pinyin: 'chen', japanese: 'チェン', tone: '1', consonant: 'ㄔ', vowel: 'ㄣ' },
    { zhuyin: 'ㄔㄥ', pinyin: 'cheng', japanese: 'チェン', tone: '1', consonant: 'ㄔ', vowel: 'ㄥ' },

    // ㄕ (sh)
    { zhuyin: 'ㄕㄚ', pinyin: 'sha', japanese: 'シャ', tone: '1', consonant: 'ㄕ', vowel: 'ㄚ' },
    { zhuyin: 'ㄕㄛ', pinyin: 'sho', japanese: 'ショ', tone: '1', consonant: 'ㄕ', vowel: 'ㄛ' },
    { zhuyin: 'ㄕㄜ', pinyin: 'she', japanese: 'シェ', tone: '1', consonant: 'ㄕ', vowel: 'ㄜ' },
    { zhuyin: 'ㄕㄞ', pinyin: 'shai', japanese: 'シャイ', tone: '1', consonant: 'ㄕ', vowel: 'ㄞ' },
    { zhuyin: 'ㄕㄢ', pinyin: 'shan', japanese: 'シャン', tone: '1', consonant: 'ㄕ', vowel: 'ㄢ' },
    { zhuyin: 'ㄕㄤ', pinyin: 'shang', japanese: 'シャン', tone: '1', consonant: 'ㄕ', vowel: 'ㄤ' },
    { zhuyin: 'ㄕㄣ', pinyin: 'shen', japanese: 'シェン', tone: '1', consonant: 'ㄕ', vowel: 'ㄣ' },
    { zhuyin: 'ㄕㄥ', pinyin: 'sheng', japanese: 'シェン', tone: '1', consonant: 'ㄕ', vowel: 'ㄥ' },

    // ㄖ (r)
    { zhuyin: 'ㄖㄚ', pinyin: 'ra', japanese: 'ラ', tone: '1', consonant: 'ㄖ', vowel: 'ㄚ' },
    { zhuyin: 'ㄖㄛ', pinyin: 'ro', japanese: 'ロ', tone: '1', consonant: 'ㄖ', vowel: 'ㄛ' },
    { zhuyin: 'ㄖㄜ', pinyin: 're', japanese: 'レ', tone: '1', consonant: 'ㄖ', vowel: 'ㄜ' },
    { zhuyin: 'ㄖㄞ', pinyin: 'rai', japanese: 'ライ', tone: '1', consonant: 'ㄖ', vowel: 'ㄞ' },
    { zhuyin: 'ㄖㄢ', pinyin: 'ran', japanese: 'ラン', tone: '1', consonant: 'ㄖ', vowel: 'ㄢ' },
    { zhuyin: 'ㄖㄤ', pinyin: 'rang', japanese: 'ラン', tone: '1', consonant: 'ㄖ', vowel: 'ㄤ' },
    { zhuyin: 'ㄖㄣ', pinyin: 'ren', japanese: 'レン', tone: '1', consonant: 'ㄖ', vowel: 'ㄣ' },
    { zhuyin: 'ㄖㄥ', pinyin: 'reng', japanese: 'レン', tone: '1', consonant: 'ㄖ', vowel: 'ㄥ' },

    // ㄗ (z)
    { zhuyin: 'ㄗㄚ', pinyin: 'za', japanese: 'ザ', tone: '1', consonant: 'ㄗ', vowel: 'ㄚ' },
    { zhuyin: 'ㄗㄜ', pinyin: 'ze', japanese: 'ゼ', tone: '1', consonant: 'ㄗ', vowel: 'ㄜ' },
    { zhuyin: 'ㄗㄞ', pinyin: 'zai', japanese: 'ザイ', tone: '1', consonant: 'ㄗ', vowel: 'ㄞ' },
    { zhuyin: 'ㄗㄢ', pinyin: 'zan', japanese: 'ザン', tone: '1', consonant: 'ㄗ', vowel: 'ㄢ' },
    { zhuyin: 'ㄗㄤ', pinyin: 'zang', japanese: 'ザン', tone: '1', consonant: 'ㄗ', vowel: 'ㄤ' },
    { zhuyin: 'ㄗㄣ', pinyin: 'zen', japanese: 'ゼン', tone: '1', consonant: 'ㄗ', vowel: 'ㄣ' },
    { zhuyin: 'ㄗㄥ', pinyin: 'zeng', japanese: 'ゼン', tone: '1', consonant: 'ㄗ', vowel: 'ㄥ' },

    // ㄘ (c)
    { zhuyin: 'ㄘㄚ', pinyin: 'ca', japanese: 'ツァ', tone: '1', consonant: 'ㄘ', vowel: 'ㄚ' },
    { zhuyin: 'ㄘㄜ', pinyin: 'ce', japanese: 'ツェ', tone: '1', consonant: 'ㄘ', vowel: 'ㄜ' },
    { zhuyin: 'ㄘㄞ', pinyin: 'cai', japanese: 'ツァイ', tone: '1', consonant: 'ㄘ', vowel: 'ㄞ' },
    { zhuyin: 'ㄘㄢ', pinyin: 'can', japanese: 'ツァン', tone: '1', consonant: 'ㄘ', vowel: 'ㄢ' },
    { zhuyin: 'ㄘㄤ', pinyin: 'cang', japanese: 'ツァン', tone: '1', consonant: 'ㄘ', vowel: 'ㄤ' },
    { zhuyin: 'ㄘㄣ', pinyin: 'cen', japanese: 'ツェン', tone: '1', consonant: 'ㄘ', vowel: 'ㄣ' },
    { zhuyin: 'ㄘㄥ', pinyin: 'ceng', japanese: 'ツェン', tone: '1', consonant: 'ㄘ', vowel: 'ㄥ' },

    // ㄙ (s)
    { zhuyin: 'ㄙㄚ', pinyin: 'sa', japanese: 'サ', tone: '1', consonant: 'ㄙ', vowel: 'ㄚ' },
    { zhuyin: 'ㄙㄜ', pinyin: 'se', japanese: 'セ', tone: '1', consonant: 'ㄙ', vowel: 'ㄜ' },
    { zhuyin: 'ㄙㄞ', pinyin: 'sai', japanese: 'サイ', tone: '1', consonant: 'ㄙ', vowel: 'ㄞ' },
    { zhuyin: 'ㄙㄢ', pinyin: 'san', japanese: 'サン', tone: '1', consonant: 'ㄙ', vowel: 'ㄢ' },
    { zhuyin: 'ㄙㄤ', pinyin: 'sang', japanese: 'サン', tone: '1', consonant: 'ㄙ', vowel: 'ㄤ' },
    { zhuyin: 'ㄙㄣ', pinyin: 'sen', japanese: 'セン', tone: '1', consonant: 'ㄙ', vowel: 'ㄣ' },
    { zhuyin: 'ㄙㄥ', pinyin: 'seng', japanese: 'セン', tone: '1', consonant: 'ㄙ', vowel: 'ㄥ' },

    // 韻母のみ（零声母音节）
    { zhuyin: 'ㄚ', pinyin: 'a', japanese: 'ア', tone: '1', consonant: '', vowel: 'ㄚ' },
    { zhuyin: 'ㄛ', pinyin: 'o', japanese: 'オ', tone: '1', consonant: '', vowel: 'ㄛ' },
    { zhuyin: 'ㄜ', pinyin: 'e', japanese: 'エ', tone: '1', consonant: '', vowel: 'ㄜ' },
    { zhuyin: 'ㄝ', pinyin: 'ê', japanese: 'エ', tone: '1', consonant: '', vowel: 'ㄝ' },
    { zhuyin: 'ㄞ', pinyin: 'ai', japanese: 'アイ', tone: '1', consonant: '', vowel: 'ㄞ' },
    { zhuyin: 'ㄟ', pinyin: 'ei', japanese: 'エイ', tone: '1', consonant: '', vowel: 'ㄟ' },
    { zhuyin: 'ㄠ', pinyin: 'ao', japanese: 'アオ', tone: '1', consonant: '', vowel: 'ㄠ' },
    { zhuyin: 'ㄡ', pinyin: 'ou', japanese: 'オウ', tone: '1', consonant: '', vowel: 'ㄡ' },
    { zhuyin: 'ㄢ', pinyin: 'an', japanese: 'アン', tone: '1', consonant: '', vowel: 'ㄢ' },
    { zhuyin: 'ㄣ', pinyin: 'en', japanese: 'エン', tone: '1', consonant: '', vowel: 'ㄣ' },
    { zhuyin: 'ㄤ', pinyin: 'ang', japanese: 'アン', tone: '1', consonant: '', vowel: 'ㄤ' },
    { zhuyin: 'ㄥ', pinyin: 'eng', japanese: 'エン', tone: '1', consonant: '', vowel: 'ㄥ' },
    { zhuyin: 'ㄦ', pinyin: 'er', japanese: 'アー', tone: '1', consonant: '', vowel: 'ㄦ' },
    { zhuyin: 'ㄧ', pinyin: 'i', japanese: 'イ', tone: '1', consonant: '', vowel: 'ㄧ' },
    { zhuyin: 'ㄨ', pinyin: 'u', japanese: 'ウ', tone: '1', consonant: '', vowel: 'ㄨ' },
    { zhuyin: 'ㄩ', pinyin: 'ü', japanese: 'ユ', tone: '1', consonant: '', vowel: 'ㄩ' }
  ]
};
