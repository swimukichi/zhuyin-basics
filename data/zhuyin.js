// 注音符号（BoPoMoFo）学習データ - 声調対応版

// 声調シンボルと説明
const TONE_SYMBOLS = {
  '1': { mark: 'ˉ', desc: '第1声' },
  '2': { mark: 'ˊ', desc: '第2声' },
  '3': { mark: 'ˇ', desc: '第3声' },
  '4': { mark: 'ˋ', desc: '第4声' },
  '5': { mark: '・', desc: '軽声' }
};

// 各音節の代表漢字 [1声, 2声, 3声, 4声, 軽声]
// null = その声調では一般的な漢字がない
const TONE_HANZI = {
  // ㄅ (b)
  'ba':    ['八', '拔', '把', '爸', '吧'],
  'bo':    ['波', '伯', '跛', '薄', null],
  'bai':   ['掰', '白', '百', '拜', null],
  'ban':   ['搬', null,  '板', '半', null],
  'bang':  ['帮', null,  '棒', '磅', null],
  'ben':   ['奔', null,  '本', '笨', null],
  'beng':  ['崩', '绷', '泵', null,  null],
  // ㄆ (p)
  'pa':    ['趴', '爬', '帕', '怕', '啪'],
  'po':    ['坡', '婆', '叵', '破', null],
  'pai':   ['拍', '排', null,  '派', null],
  'pan':   ['攀', '盘', '盼', '判', null],
  'pang':  ['乓', '旁', '耪', '胖', null],
  'pen':   ['喷', '盆', null,  '喷', null],
  'peng':  ['烹', '朋', '捧', '碰', null],
  // ㄇ (m)
  'ma':    ['妈', '麻', '马', '骂', '吗'],
  'mo':    ['摸', '魔', '抹', '末', '么'],
  'me':    [null,  null,  null,  null,  '么'],
  'mai':   [null,  '埋', '买', '卖', null],
  'man':   [null,  '蛮', '满', '慢', null],
  'mang':  [null,  '忙', '蟒', null,  null],
  'men':   ['闷', '门', null,  '闷', '们'],
  'meng':  [null,  '蒙', '猛', '梦', null],
  // ㄈ (f)
  'fa':    ['发', '罚', '法', '发', null],
  'fo':    [null,  '佛', null,  null,  null],
  'fei':   ['飞', '肥', '匪', '费', null],
  'fan':   ['翻', '凡', '反', '饭', null],
  'fang':  ['方', '房', '访', '放', null],
  'fen':   ['分', '坟', '粉', '奋', null],
  'feng':  ['风', '冯', '讽', '凤', null],
  // ㄉ (d)
  'da':    ['搭', '达', '打', '大', null],
  'do':    [null,  null,  null,  null,  null],
  'dai':   ['呆', null,  '歹', '代', null],
  'dan':   ['单', null,  '胆', '蛋', null],
  'dang':  ['当', null,  '党', '荡', null],
  'den':   [null,  null,  null,  null,  null],
  'deng':  ['灯', null,  '等', '邓', null],
  // ㄊ (t)
  'ta':    ['他', null,  '塔', null,  null],
  'to':    [null,  null,  null,  null,  null],
  'tai':   ['胎', '台', null,  '太', null],
  'tan':   ['摊', '谈', '坦', '叹', null],
  'tang':  ['汤', '堂', '躺', '烫', null],
  'ten':   [null,  null,  null,  null,  null],
  'teng':  [null,  '疼', null,  null,  null],
  // ㄋ (n)
  'na':    [null,  '拿', '哪', '那', null],
  'no':    [null,  null,  null,  null,  null],
  'nai':   [null,  null,  '奶', '耐', null],
  'nan':   [null,  '南', '赧', '难', null],
  'nang':  ['囔', null,  null,  null,  null],
  'nen':   [null,  null,  null,  '嫩', null],
  'neng':  [null,  '能', null,  null,  null],
  // ㄌ (l)
  'la':    ['拉', null,  null,  '辣', '啦'],
  'lo':    [null,  null,  null,  null,  null],
  'lai':   [null,  '来', null,  '赖', null],
  'lan':   ['拦', '蓝', '懒', '滥', null],
  'lang':  ['郎', '狼', '朗', '浪', null],
  'len':   [null,  null,  null,  null,  null],
  'leng':  [null,  null,  '冷', null,  null],
  // ㄍ (g)
  'ga':    ['嘎', null,  null,  null,  null],
  'go':    [null,  null,  null,  null,  null],
  'gai':   ['该', null,  '改', '盖', null],
  'gan':   ['干', null,  '敢', '干', null],
  'gang':  ['缸', null,  '港', '杠', null],
  'gen':   ['根', null,  null,  '跟', null],
  'geng':  ['更', null,  null,  '更', null],
  // ㄎ (k)
  'ka':    ['咖', null,  '卡', '卡', null],
  'ko':    [null,  null,  null,  null,  null],
  'kai':   ['开', null,  null,  '凯', null],
  'kan':   ['刊', null,  '砍', '看', null],
  'kang':  ['康', null,  '慷', '抗', null],
  'ken':   [null,  null,  '肯', null,  null],
  'keng':  ['坑', null,  null,  null,  null],
  // ㄏ (h)
  'ha':    ['哈', null,  null,  '哈', null],
  'ho':    [null,  null,  null,  null,  null],
  'hai':   ['嗨', null,  '海', '害', null],
  'han':   ['酣', '寒', '罕', '汉', null],
  'hang':  [null,  '杭', null,  '行', null],
  'hen':   [null,  null,  '很', '恨', null],
  'heng':  ['哼', '横', null,  null,  null],
  // ㄐ (j)
  'ji':    ['机', '及', '己', '计', null],
  'ju':    ['居', '局', '举', '句', null],
  'jian':  ['肩', null,  '检', '见', null],
  'jiang': ['江', null,  '讲', '将', null],
  'jing':  ['经', null,  '景', '竟', null],
  'juan':  ['捐', null,  '卷', '倦', null],
  'jiong': [null,  null,  '窘', null,  null],
  // ㄑ (q)
  'qi':    ['期', '奇', '起', '气', null],
  'qu':    ['区', '渠', '取', '趣', null],
  'qian':  ['千', '钱', '浅', '欠', null],
  'qiang': ['枪', '强', '抢', null,  null],
  'qing':  ['清', '情', '请', '庆', null],
  'quan':  ['圈', '权', '犬', '劝', null],
  'qiong': [null,  '穷', null,  null,  null],
  // ㄒ (x)
  'xi':    ['西', '席', '洗', '细', null],
  'xu':    ['需', null,  '许', '蓄', null],
  'xian':  ['先', '闲', '险', '现', null],
  'xiang': ['香', '详', '想', '向', null],
  'xing':  ['星', '行', '醒', '性', null],
  'xuan':  ['轩', '旋', '选', '炫', null],
  'xiong': ['凶', '雄', null,  null,  null],
  // ㄓ (zh)
  'zha':   ['扎', null,  '眨', '炸', null],
  'zho':   [null,  null,  null,  null,  null],
  'zhe':   ['遮', '折', '者', '这', '着'],
  'zhai':  ['摘', '宅', '窄', '债', null],
  'zhan':  ['沾', null,  '展', '战', null],
  'zhang': ['张', null,  '长', '障', null],
  'zhen':  ['针', null,  '诊', '阵', null],
  'zheng': ['争', null,  '整', '正', null],
  // ㄔ (ch)
  'cha':   ['叉', '查', null,  '差', null],
  'cho':   [null,  null,  null,  null,  null],
  'che':   ['车', null,  null,  '撤', null],
  'chai':  ['拆', '柴', null,  null,  null],
  'chan':  ['搀', '缠', '产', '颤', null],
  'chang': ['昌', '常', '厂', '唱', null],
  'chen':  ['嗔', '陈', null,  '衬', null],
  'cheng': ['撑', '城', null,  '秤', null],
  // ㄕ (sh)
  'sha':   ['沙', '啥', '傻', '厦', null],
  'sho':   [null,  null,  null,  null,  null],
  'she':   ['奢', '舌', '舍', '射', null],
  'shai':  ['筛', null,  null,  '晒', null],
  'shan':  ['山', null,  '闪', '扇', null],
  'shang': ['商', null,  '赏', '上', null],
  'shen':  ['身', '神', '审', '甚', null],
  'sheng': ['升', null,  '省', '胜', null],
  // ㄖ (r)
  'ra':    [null,  null,  null,  null,  null],
  'ro':    [null,  null,  null,  null,  null],
  're':    [null,  null,  '惹', '热', null],
  'rai':   [null,  null,  null,  null,  null],
  'ran':   [null,  '然', '染', null,  null],
  'rang':  ['嚷', '瓤', null,  '让', null],
  'ren':   [null,  '人', '忍', '任', null],
  'reng':  ['扔', '仍', null,  null,  null],
  // ㄗ (z)
  'za':    [null,  '杂', '咋', '砸', null],
  'ze':    [null,  '泽', null,  '仄', null],
  'zai':   ['灾', null,  '宰', '在', null],
  'zan':   [null,  '咱', '攒', '赞', null],
  'zang':  ['脏', null,  null,  '葬', null],
  'zen':   [null,  null,  '怎', null,  null],
  'zeng':  ['增', null,  null,  '赠', null],
  // ㄘ (c)
  'ca':    ['擦', null,  null,  null,  null],
  'ce':    [null,  null,  null,  '测', null],
  'cai':   ['猜', '才', '采', '菜', null],
  'can':   ['参', '残', '惨', '灿', null],
  'cang':  ['仓', '藏', null,  null,  null],
  'cen':   [null,  '岑', null,  null,  null],
  'ceng':  [null,  '层', null,  null,  null],
  // ㄙ (s)
  'sa':    ['撒', null,  '洒', null,  null],
  'se':    [null,  null,  null,  '色', null],
  'sai':   ['腮', null,  null,  '赛', null],
  'san':   ['三', null,  '伞', '散', null],
  'sang':  ['桑', null,  null,  '丧', null],
  'sen':   ['森', null,  null,  null,  null],
  'seng':  ['僧', null,  null,  null,  null],
  // 零声母
  'a':     ['啊', '啊', '啊', '啊', '啊'],
  'o':     ['哦', '哦', '哦', '哦', '哦'],
  'e':     ['鹅', '额', '恶', '饿', '呃'],
  'ê':     [null,  null,  null,  null,  null],
  'ai':    ['哀', '挨', '矮', '爱', null],
  'ei':    ['诶', null,  null,  '诶', null],
  'ao':    ['熬', '螯', '袄', '傲', null],
  'ou':    ['欧', null,  '呕', '藕', null],
  'an':    ['安', null,  '俺', '案', null],
  'en':    ['恩', null,  null,  '摁', null],
  'ang':   ['肮', '昂', null,  null,  null],
  'eng':   [null,  null,  null,  null,  null],
  'er':    [null,  '儿', '耳', '二', null],
  'i':     ['衣', '宜', '已', '意', null],
  'u':     ['乌', '无', '五', '误', null],
  'ü':     ['迂', '鱼', '雨', '玉', null]
};

// 声調付き漢字を取得（nullの場合は最初に見つかった漢字にフォールバック）
function getToneHanzi(pinyin, tone) {
  const data = TONE_HANZI[pinyin];
  if (data) {
    const specific = data[parseInt(tone) - 1];
    if (specific) return specific;
    // 指定声調の漢字がない場合は最初に使える漢字を返す
    const fallback = data.find(h => h);
    if (fallback) return fallback;
  }
  return pinyin;
}

// 声調マーク付きピンイン表示用（例: ba + 3声 → baˇ）
function getToneMarkedPinyin(pinyin, tone) {
  const key = tone.toString();
  const mark = TONE_SYMBOLS[key] ? TONE_SYMBOLS[key].mark : '';
  return pinyin + mark;
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

  // 声母と韻母の組み合わせ音節（1音節につき1エントリ）
  // tones: [1声漢字, 2声漢字, 3声漢字, 4声漢字, 軽声漢字]
  syllables: [
    // ㄅ (b)
    { zhuyin: 'ㄅㄚ',  pinyin: 'ba',    japanese: 'バ',     consonant: 'ㄅ', vowel: 'ㄚ',   tones: TONE_HANZI['ba']    },
    { zhuyin: 'ㄅㄛ',  pinyin: 'bo',    japanese: 'ボ',     consonant: 'ㄅ', vowel: 'ㄛ',   tones: TONE_HANZI['bo']    },
    { zhuyin: 'ㄅㄞ',  pinyin: 'bai',   japanese: 'バイ',   consonant: 'ㄅ', vowel: 'ㄞ',   tones: TONE_HANZI['bai']   },
    { zhuyin: 'ㄅㄢ',  pinyin: 'ban',   japanese: 'バン',   consonant: 'ㄅ', vowel: 'ㄢ',   tones: TONE_HANZI['ban']   },
    { zhuyin: 'ㄅㄤ',  pinyin: 'bang',  japanese: 'バン',   consonant: 'ㄅ', vowel: 'ㄤ',   tones: TONE_HANZI['bang']  },
    { zhuyin: 'ㄅㄣ',  pinyin: 'ben',   japanese: 'ベン',   consonant: 'ㄅ', vowel: 'ㄣ',   tones: TONE_HANZI['ben']   },
    { zhuyin: 'ㄅㄥ',  pinyin: 'beng',  japanese: 'ベン',   consonant: 'ㄅ', vowel: 'ㄥ',   tones: TONE_HANZI['beng']  },

    // ㄆ (p)
    { zhuyin: 'ㄆㄚ',  pinyin: 'pa',    japanese: 'パ',     consonant: 'ㄆ', vowel: 'ㄚ',   tones: TONE_HANZI['pa']    },
    { zhuyin: 'ㄆㄛ',  pinyin: 'po',    japanese: 'ポ',     consonant: 'ㄆ', vowel: 'ㄛ',   tones: TONE_HANZI['po']    },
    { zhuyin: 'ㄆㄞ',  pinyin: 'pai',   japanese: 'パイ',   consonant: 'ㄆ', vowel: 'ㄞ',   tones: TONE_HANZI['pai']   },
    { zhuyin: 'ㄆㄢ',  pinyin: 'pan',   japanese: 'パン',   consonant: 'ㄆ', vowel: 'ㄢ',   tones: TONE_HANZI['pan']   },
    { zhuyin: 'ㄆㄤ',  pinyin: 'pang',  japanese: 'パン',   consonant: 'ㄆ', vowel: 'ㄤ',   tones: TONE_HANZI['pang']  },
    { zhuyin: 'ㄆㄣ',  pinyin: 'pen',   japanese: 'ペン',   consonant: 'ㄆ', vowel: 'ㄣ',   tones: TONE_HANZI['pen']   },
    { zhuyin: 'ㄆㄥ',  pinyin: 'peng',  japanese: 'ペン',   consonant: 'ㄆ', vowel: 'ㄥ',   tones: TONE_HANZI['peng']  },

    // ㄇ (m)
    { zhuyin: 'ㄇㄚ',  pinyin: 'ma',    japanese: 'マ',     consonant: 'ㄇ', vowel: 'ㄚ',   tones: TONE_HANZI['ma']    },
    { zhuyin: 'ㄇㄛ',  pinyin: 'mo',    japanese: 'モ',     consonant: 'ㄇ', vowel: 'ㄛ',   tones: TONE_HANZI['mo']    },
    { zhuyin: 'ㄇㄜ',  pinyin: 'me',    japanese: 'メ',     consonant: 'ㄇ', vowel: 'ㄜ',   tones: TONE_HANZI['me']    },
    { zhuyin: 'ㄇㄞ',  pinyin: 'mai',   japanese: 'マイ',   consonant: 'ㄇ', vowel: 'ㄞ',   tones: TONE_HANZI['mai']   },
    { zhuyin: 'ㄇㄢ',  pinyin: 'man',   japanese: 'マン',   consonant: 'ㄇ', vowel: 'ㄢ',   tones: TONE_HANZI['man']   },
    { zhuyin: 'ㄇㄤ',  pinyin: 'mang',  japanese: 'マン',   consonant: 'ㄇ', vowel: 'ㄤ',   tones: TONE_HANZI['mang']  },
    { zhuyin: 'ㄇㄣ',  pinyin: 'men',   japanese: 'メン',   consonant: 'ㄇ', vowel: 'ㄣ',   tones: TONE_HANZI['men']   },
    { zhuyin: 'ㄇㄥ',  pinyin: 'meng',  japanese: 'メン',   consonant: 'ㄇ', vowel: 'ㄥ',   tones: TONE_HANZI['meng']  },

    // ㄈ (f)
    { zhuyin: 'ㄈㄚ',  pinyin: 'fa',    japanese: 'ファ',   consonant: 'ㄈ', vowel: 'ㄚ',   tones: TONE_HANZI['fa']    },
    { zhuyin: 'ㄈㄛ',  pinyin: 'fo',    japanese: 'フォ',   consonant: 'ㄈ', vowel: 'ㄛ',   tones: TONE_HANZI['fo']    },
    { zhuyin: 'ㄈㄟ',  pinyin: 'fei',   japanese: 'フェイ', consonant: 'ㄈ', vowel: 'ㄟ',   tones: TONE_HANZI['fei']   },
    { zhuyin: 'ㄈㄢ',  pinyin: 'fan',   japanese: 'ファン', consonant: 'ㄈ', vowel: 'ㄢ',   tones: TONE_HANZI['fan']   },
    { zhuyin: 'ㄈㄤ',  pinyin: 'fang',  japanese: 'ファン', consonant: 'ㄈ', vowel: 'ㄤ',   tones: TONE_HANZI['fang']  },
    { zhuyin: 'ㄈㄣ',  pinyin: 'fen',   japanese: 'フェン', consonant: 'ㄈ', vowel: 'ㄣ',   tones: TONE_HANZI['fen']   },
    { zhuyin: 'ㄈㄥ',  pinyin: 'feng',  japanese: 'フェン', consonant: 'ㄈ', vowel: 'ㄥ',   tones: TONE_HANZI['feng']  },

    // ㄉ (d)
    { zhuyin: 'ㄉㄚ',  pinyin: 'da',    japanese: 'ダ',     consonant: 'ㄉ', vowel: 'ㄚ',   tones: TONE_HANZI['da']    },
    { zhuyin: 'ㄉㄛ',  pinyin: 'do',    japanese: 'ド',     consonant: 'ㄉ', vowel: 'ㄛ',   tones: TONE_HANZI['do']    },
    { zhuyin: 'ㄉㄞ',  pinyin: 'dai',   japanese: 'ダイ',   consonant: 'ㄉ', vowel: 'ㄞ',   tones: TONE_HANZI['dai']   },
    { zhuyin: 'ㄉㄢ',  pinyin: 'dan',   japanese: 'ダン',   consonant: 'ㄉ', vowel: 'ㄢ',   tones: TONE_HANZI['dan']   },
    { zhuyin: 'ㄉㄤ',  pinyin: 'dang',  japanese: 'ダン',   consonant: 'ㄉ', vowel: 'ㄤ',   tones: TONE_HANZI['dang']  },
    { zhuyin: 'ㄉㄣ',  pinyin: 'den',   japanese: 'デン',   consonant: 'ㄉ', vowel: 'ㄣ',   tones: TONE_HANZI['den']   },
    { zhuyin: 'ㄉㄥ',  pinyin: 'deng',  japanese: 'デン',   consonant: 'ㄉ', vowel: 'ㄥ',   tones: TONE_HANZI['deng']  },

    // ㄊ (t)
    { zhuyin: 'ㄊㄚ',  pinyin: 'ta',    japanese: 'タ',     consonant: 'ㄊ', vowel: 'ㄚ',   tones: TONE_HANZI['ta']    },
    { zhuyin: 'ㄊㄛ',  pinyin: 'to',    japanese: 'ト',     consonant: 'ㄊ', vowel: 'ㄛ',   tones: TONE_HANZI['to']    },
    { zhuyin: 'ㄊㄞ',  pinyin: 'tai',   japanese: 'タイ',   consonant: 'ㄊ', vowel: 'ㄞ',   tones: TONE_HANZI['tai']   },
    { zhuyin: 'ㄊㄢ',  pinyin: 'tan',   japanese: 'タン',   consonant: 'ㄊ', vowel: 'ㄢ',   tones: TONE_HANZI['tan']   },
    { zhuyin: 'ㄊㄤ',  pinyin: 'tang',  japanese: 'タン',   consonant: 'ㄊ', vowel: 'ㄤ',   tones: TONE_HANZI['tang']  },
    { zhuyin: 'ㄊㄣ',  pinyin: 'ten',   japanese: 'テン',   consonant: 'ㄊ', vowel: 'ㄣ',   tones: TONE_HANZI['ten']   },
    { zhuyin: 'ㄊㄥ',  pinyin: 'teng',  japanese: 'テン',   consonant: 'ㄊ', vowel: 'ㄥ',   tones: TONE_HANZI['teng']  },

    // ㄋ (n)
    { zhuyin: 'ㄋㄚ',  pinyin: 'na',    japanese: 'ナ',     consonant: 'ㄋ', vowel: 'ㄚ',   tones: TONE_HANZI['na']    },
    { zhuyin: 'ㄋㄛ',  pinyin: 'no',    japanese: 'ノ',     consonant: 'ㄋ', vowel: 'ㄛ',   tones: TONE_HANZI['no']    },
    { zhuyin: 'ㄋㄞ',  pinyin: 'nai',   japanese: 'ナイ',   consonant: 'ㄋ', vowel: 'ㄞ',   tones: TONE_HANZI['nai']   },
    { zhuyin: 'ㄋㄢ',  pinyin: 'nan',   japanese: 'ナン',   consonant: 'ㄋ', vowel: 'ㄢ',   tones: TONE_HANZI['nan']   },
    { zhuyin: 'ㄋㄤ',  pinyin: 'nang',  japanese: 'ナン',   consonant: 'ㄋ', vowel: 'ㄤ',   tones: TONE_HANZI['nang']  },
    { zhuyin: 'ㄋㄣ',  pinyin: 'nen',   japanese: 'ネン',   consonant: 'ㄋ', vowel: 'ㄣ',   tones: TONE_HANZI['nen']   },
    { zhuyin: 'ㄋㄥ',  pinyin: 'neng',  japanese: 'ネン',   consonant: 'ㄋ', vowel: 'ㄥ',   tones: TONE_HANZI['neng']  },

    // ㄌ (l)
    { zhuyin: 'ㄌㄚ',  pinyin: 'la',    japanese: 'ラ',     consonant: 'ㄌ', vowel: 'ㄚ',   tones: TONE_HANZI['la']    },
    { zhuyin: 'ㄌㄛ',  pinyin: 'lo',    japanese: 'ロ',     consonant: 'ㄌ', vowel: 'ㄛ',   tones: TONE_HANZI['lo']    },
    { zhuyin: 'ㄌㄞ',  pinyin: 'lai',   japanese: 'ライ',   consonant: 'ㄌ', vowel: 'ㄞ',   tones: TONE_HANZI['lai']   },
    { zhuyin: 'ㄌㄢ',  pinyin: 'lan',   japanese: 'ラン',   consonant: 'ㄌ', vowel: 'ㄢ',   tones: TONE_HANZI['lan']   },
    { zhuyin: 'ㄌㄤ',  pinyin: 'lang',  japanese: 'ラン',   consonant: 'ㄌ', vowel: 'ㄤ',   tones: TONE_HANZI['lang']  },
    { zhuyin: 'ㄌㄣ',  pinyin: 'len',   japanese: 'レン',   consonant: 'ㄌ', vowel: 'ㄣ',   tones: TONE_HANZI['len']   },
    { zhuyin: 'ㄌㄥ',  pinyin: 'leng',  japanese: 'レン',   consonant: 'ㄌ', vowel: 'ㄥ',   tones: TONE_HANZI['leng']  },

    // ㄍ (g)
    { zhuyin: 'ㄍㄚ',  pinyin: 'ga',    japanese: 'ガ',     consonant: 'ㄍ', vowel: 'ㄚ',   tones: TONE_HANZI['ga']    },
    { zhuyin: 'ㄍㄛ',  pinyin: 'go',    japanese: 'ゴ',     consonant: 'ㄍ', vowel: 'ㄛ',   tones: TONE_HANZI['go']    },
    { zhuyin: 'ㄍㄞ',  pinyin: 'gai',   japanese: 'ガイ',   consonant: 'ㄍ', vowel: 'ㄞ',   tones: TONE_HANZI['gai']   },
    { zhuyin: 'ㄍㄢ',  pinyin: 'gan',   japanese: 'ガン',   consonant: 'ㄍ', vowel: 'ㄢ',   tones: TONE_HANZI['gan']   },
    { zhuyin: 'ㄍㄤ',  pinyin: 'gang',  japanese: 'ガン',   consonant: 'ㄍ', vowel: 'ㄤ',   tones: TONE_HANZI['gang']  },
    { zhuyin: 'ㄍㄣ',  pinyin: 'gen',   japanese: 'ゲン',   consonant: 'ㄍ', vowel: 'ㄣ',   tones: TONE_HANZI['gen']   },
    { zhuyin: 'ㄍㄥ',  pinyin: 'geng',  japanese: 'ゲン',   consonant: 'ㄍ', vowel: 'ㄥ',   tones: TONE_HANZI['geng']  },

    // ㄎ (k)
    { zhuyin: 'ㄎㄚ',  pinyin: 'ka',    japanese: 'カ',     consonant: 'ㄎ', vowel: 'ㄚ',   tones: TONE_HANZI['ka']    },
    { zhuyin: 'ㄎㄛ',  pinyin: 'ko',    japanese: 'コ',     consonant: 'ㄎ', vowel: 'ㄛ',   tones: TONE_HANZI['ko']    },
    { zhuyin: 'ㄎㄞ',  pinyin: 'kai',   japanese: 'カイ',   consonant: 'ㄎ', vowel: 'ㄞ',   tones: TONE_HANZI['kai']   },
    { zhuyin: 'ㄎㄢ',  pinyin: 'kan',   japanese: 'カン',   consonant: 'ㄎ', vowel: 'ㄢ',   tones: TONE_HANZI['kan']   },
    { zhuyin: 'ㄎㄤ',  pinyin: 'kang',  japanese: 'カン',   consonant: 'ㄎ', vowel: 'ㄤ',   tones: TONE_HANZI['kang']  },
    { zhuyin: 'ㄎㄣ',  pinyin: 'ken',   japanese: 'ケン',   consonant: 'ㄎ', vowel: 'ㄣ',   tones: TONE_HANZI['ken']   },
    { zhuyin: 'ㄎㄥ',  pinyin: 'keng',  japanese: 'ケン',   consonant: 'ㄎ', vowel: 'ㄥ',   tones: TONE_HANZI['keng']  },

    // ㄏ (h)
    { zhuyin: 'ㄏㄚ',  pinyin: 'ha',    japanese: 'ハ',     consonant: 'ㄏ', vowel: 'ㄚ',   tones: TONE_HANZI['ha']    },
    { zhuyin: 'ㄏㄛ',  pinyin: 'ho',    japanese: 'ホ',     consonant: 'ㄏ', vowel: 'ㄛ',   tones: TONE_HANZI['ho']    },
    { zhuyin: 'ㄏㄞ',  pinyin: 'hai',   japanese: 'ハイ',   consonant: 'ㄏ', vowel: 'ㄞ',   tones: TONE_HANZI['hai']   },
    { zhuyin: 'ㄏㄢ',  pinyin: 'han',   japanese: 'ハン',   consonant: 'ㄏ', vowel: 'ㄢ',   tones: TONE_HANZI['han']   },
    { zhuyin: 'ㄏㄤ',  pinyin: 'hang',  japanese: 'ハン',   consonant: 'ㄏ', vowel: 'ㄤ',   tones: TONE_HANZI['hang']  },
    { zhuyin: 'ㄏㄣ',  pinyin: 'hen',   japanese: 'ヘン',   consonant: 'ㄏ', vowel: 'ㄣ',   tones: TONE_HANZI['hen']   },
    { zhuyin: 'ㄏㄥ',  pinyin: 'heng',  japanese: 'ヘン',   consonant: 'ㄏ', vowel: 'ㄥ',   tones: TONE_HANZI['heng']  },

    // ㄐ (j)
    { zhuyin: 'ㄐㄧ',   pinyin: 'ji',    japanese: 'ジ',     consonant: 'ㄐ', vowel: 'ㄧ',   tones: TONE_HANZI['ji']    },
    { zhuyin: 'ㄐㄩ',   pinyin: 'ju',    japanese: 'ジュ',   consonant: 'ㄐ', vowel: 'ㄩ',   tones: TONE_HANZI['ju']    },
    { zhuyin: 'ㄐㄧㄢ', pinyin: 'jian',  japanese: 'ジエン', consonant: 'ㄐ', vowel: 'ㄧㄢ', tones: TONE_HANZI['jian']  },
    { zhuyin: 'ㄐㄧㄤ', pinyin: 'jiang', japanese: 'ジアン', consonant: 'ㄐ', vowel: 'ㄧㄤ', tones: TONE_HANZI['jiang'] },
    { zhuyin: 'ㄐㄧㄥ', pinyin: 'jing',  japanese: 'ジン',   consonant: 'ㄐ', vowel: 'ㄧㄥ', tones: TONE_HANZI['jing']  },
    { zhuyin: 'ㄐㄩㄢ', pinyin: 'juan',  japanese: 'ジュエン',consonant: 'ㄐ', vowel: 'ㄩㄢ', tones: TONE_HANZI['juan']  },
    { zhuyin: 'ㄐㄩㄥ', pinyin: 'jiong', japanese: 'ジョン', consonant: 'ㄐ', vowel: 'ㄩㄥ', tones: TONE_HANZI['jiong'] },

    // ㄑ (q)
    { zhuyin: 'ㄑㄧ',   pinyin: 'qi',    japanese: 'チ',     consonant: 'ㄑ', vowel: 'ㄧ',   tones: TONE_HANZI['qi']    },
    { zhuyin: 'ㄑㄩ',   pinyin: 'qu',    japanese: 'チュ',   consonant: 'ㄑ', vowel: 'ㄩ',   tones: TONE_HANZI['qu']    },
    { zhuyin: 'ㄑㄧㄢ', pinyin: 'qian',  japanese: 'チエン', consonant: 'ㄑ', vowel: 'ㄧㄢ', tones: TONE_HANZI['qian']  },
    { zhuyin: 'ㄑㄧㄤ', pinyin: 'qiang', japanese: 'チアン', consonant: 'ㄑ', vowel: 'ㄧㄤ', tones: TONE_HANZI['qiang'] },
    { zhuyin: 'ㄑㄧㄥ', pinyin: 'qing',  japanese: 'チン',   consonant: 'ㄑ', vowel: 'ㄧㄥ', tones: TONE_HANZI['qing']  },
    { zhuyin: 'ㄑㄩㄢ', pinyin: 'quan',  japanese: 'チュエン',consonant: 'ㄑ', vowel: 'ㄩㄢ', tones: TONE_HANZI['quan']  },
    { zhuyin: 'ㄑㄩㄥ', pinyin: 'qiong', japanese: 'チョン', consonant: 'ㄑ', vowel: 'ㄩㄥ', tones: TONE_HANZI['qiong'] },

    // ㄒ (x)
    { zhuyin: 'ㄒㄧ',   pinyin: 'xi',    japanese: 'シ',     consonant: 'ㄒ', vowel: 'ㄧ',   tones: TONE_HANZI['xi']    },
    { zhuyin: 'ㄒㄩ',   pinyin: 'xu',    japanese: 'シュ',   consonant: 'ㄒ', vowel: 'ㄩ',   tones: TONE_HANZI['xu']    },
    { zhuyin: 'ㄒㄧㄢ', pinyin: 'xian',  japanese: 'シエン', consonant: 'ㄒ', vowel: 'ㄧㄢ', tones: TONE_HANZI['xian']  },
    { zhuyin: 'ㄒㄧㄤ', pinyin: 'xiang', japanese: 'シアン', consonant: 'ㄒ', vowel: 'ㄧㄤ', tones: TONE_HANZI['xiang'] },
    { zhuyin: 'ㄒㄧㄥ', pinyin: 'xing',  japanese: 'シン',   consonant: 'ㄒ', vowel: 'ㄧㄥ', tones: TONE_HANZI['xing']  },
    { zhuyin: 'ㄒㄩㄢ', pinyin: 'xuan',  japanese: 'シュエン',consonant: 'ㄒ', vowel: 'ㄩㄢ', tones: TONE_HANZI['xuan']  },
    { zhuyin: 'ㄒㄩㄥ', pinyin: 'xiong', japanese: 'ション', consonant: 'ㄒ', vowel: 'ㄩㄥ', tones: TONE_HANZI['xiong'] },

    // ㄓ (zh)
    { zhuyin: 'ㄓㄚ',  pinyin: 'zha',   japanese: 'ジャ',   consonant: 'ㄓ', vowel: 'ㄚ',   tones: TONE_HANZI['zha']   },
    { zhuyin: 'ㄓㄛ',  pinyin: 'zho',   japanese: 'ジョ',   consonant: 'ㄓ', vowel: 'ㄛ',   tones: TONE_HANZI['zho']   },
    { zhuyin: 'ㄓㄜ',  pinyin: 'zhe',   japanese: 'ジェ',   consonant: 'ㄓ', vowel: 'ㄜ',   tones: TONE_HANZI['zhe']   },
    { zhuyin: 'ㄓㄞ',  pinyin: 'zhai',  japanese: 'ジャイ', consonant: 'ㄓ', vowel: 'ㄞ',   tones: TONE_HANZI['zhai']  },
    { zhuyin: 'ㄓㄢ',  pinyin: 'zhan',  japanese: 'ジャン', consonant: 'ㄓ', vowel: 'ㄢ',   tones: TONE_HANZI['zhan']  },
    { zhuyin: 'ㄓㄤ',  pinyin: 'zhang', japanese: 'ジャン', consonant: 'ㄓ', vowel: 'ㄤ',   tones: TONE_HANZI['zhang'] },
    { zhuyin: 'ㄓㄣ',  pinyin: 'zhen',  japanese: 'ジェン', consonant: 'ㄓ', vowel: 'ㄣ',   tones: TONE_HANZI['zhen']  },
    { zhuyin: 'ㄓㄥ',  pinyin: 'zheng', japanese: 'ジェン', consonant: 'ㄓ', vowel: 'ㄥ',   tones: TONE_HANZI['zheng'] },

    // ㄔ (ch)
    { zhuyin: 'ㄔㄚ',  pinyin: 'cha',   japanese: 'チャ',   consonant: 'ㄔ', vowel: 'ㄚ',   tones: TONE_HANZI['cha']   },
    { zhuyin: 'ㄔㄛ',  pinyin: 'cho',   japanese: 'チョ',   consonant: 'ㄔ', vowel: 'ㄛ',   tones: TONE_HANZI['cho']   },
    { zhuyin: 'ㄔㄜ',  pinyin: 'che',   japanese: 'チェ',   consonant: 'ㄔ', vowel: 'ㄜ',   tones: TONE_HANZI['che']   },
    { zhuyin: 'ㄔㄞ',  pinyin: 'chai',  japanese: 'チャイ', consonant: 'ㄔ', vowel: 'ㄞ',   tones: TONE_HANZI['chai']  },
    { zhuyin: 'ㄔㄢ',  pinyin: 'chan',  japanese: 'チャン', consonant: 'ㄔ', vowel: 'ㄢ',   tones: TONE_HANZI['chan']  },
    { zhuyin: 'ㄔㄤ',  pinyin: 'chang', japanese: 'チャン', consonant: 'ㄔ', vowel: 'ㄤ',   tones: TONE_HANZI['chang'] },
    { zhuyin: 'ㄔㄣ',  pinyin: 'chen',  japanese: 'チェン', consonant: 'ㄔ', vowel: 'ㄣ',   tones: TONE_HANZI['chen']  },
    { zhuyin: 'ㄔㄥ',  pinyin: 'cheng', japanese: 'チェン', consonant: 'ㄔ', vowel: 'ㄥ',   tones: TONE_HANZI['cheng'] },

    // ㄕ (sh)
    { zhuyin: 'ㄕㄚ',  pinyin: 'sha',   japanese: 'シャ',   consonant: 'ㄕ', vowel: 'ㄚ',   tones: TONE_HANZI['sha']   },
    { zhuyin: 'ㄕㄛ',  pinyin: 'sho',   japanese: 'ショ',   consonant: 'ㄕ', vowel: 'ㄛ',   tones: TONE_HANZI['sho']   },
    { zhuyin: 'ㄕㄜ',  pinyin: 'she',   japanese: 'シェ',   consonant: 'ㄕ', vowel: 'ㄜ',   tones: TONE_HANZI['she']   },
    { zhuyin: 'ㄕㄞ',  pinyin: 'shai',  japanese: 'シャイ', consonant: 'ㄕ', vowel: 'ㄞ',   tones: TONE_HANZI['shai']  },
    { zhuyin: 'ㄕㄢ',  pinyin: 'shan',  japanese: 'シャン', consonant: 'ㄕ', vowel: 'ㄢ',   tones: TONE_HANZI['shan']  },
    { zhuyin: 'ㄕㄤ',  pinyin: 'shang', japanese: 'シャン', consonant: 'ㄕ', vowel: 'ㄤ',   tones: TONE_HANZI['shang'] },
    { zhuyin: 'ㄕㄣ',  pinyin: 'shen',  japanese: 'シェン', consonant: 'ㄕ', vowel: 'ㄣ',   tones: TONE_HANZI['shen']  },
    { zhuyin: 'ㄕㄥ',  pinyin: 'sheng', japanese: 'シェン', consonant: 'ㄕ', vowel: 'ㄥ',   tones: TONE_HANZI['sheng'] },

    // ㄖ (r)
    { zhuyin: 'ㄖㄚ',  pinyin: 'ra',    japanese: 'ラ',     consonant: 'ㄖ', vowel: 'ㄚ',   tones: TONE_HANZI['ra']    },
    { zhuyin: 'ㄖㄛ',  pinyin: 'ro',    japanese: 'ロ',     consonant: 'ㄖ', vowel: 'ㄛ',   tones: TONE_HANZI['ro']    },
    { zhuyin: 'ㄖㄜ',  pinyin: 're',    japanese: 'レ',     consonant: 'ㄖ', vowel: 'ㄜ',   tones: TONE_HANZI['re']    },
    { zhuyin: 'ㄖㄞ',  pinyin: 'rai',   japanese: 'ライ',   consonant: 'ㄖ', vowel: 'ㄞ',   tones: TONE_HANZI['rai']   },
    { zhuyin: 'ㄖㄢ',  pinyin: 'ran',   japanese: 'ラン',   consonant: 'ㄖ', vowel: 'ㄢ',   tones: TONE_HANZI['ran']   },
    { zhuyin: 'ㄖㄤ',  pinyin: 'rang',  japanese: 'ラン',   consonant: 'ㄖ', vowel: 'ㄤ',   tones: TONE_HANZI['rang']  },
    { zhuyin: 'ㄖㄣ',  pinyin: 'ren',   japanese: 'レン',   consonant: 'ㄖ', vowel: 'ㄣ',   tones: TONE_HANZI['ren']   },
    { zhuyin: 'ㄖㄥ',  pinyin: 'reng',  japanese: 'レン',   consonant: 'ㄖ', vowel: 'ㄥ',   tones: TONE_HANZI['reng']  },

    // ㄗ (z)
    { zhuyin: 'ㄗㄚ',  pinyin: 'za',    japanese: 'ザ',     consonant: 'ㄗ', vowel: 'ㄚ',   tones: TONE_HANZI['za']    },
    { zhuyin: 'ㄗㄜ',  pinyin: 'ze',    japanese: 'ゼ',     consonant: 'ㄗ', vowel: 'ㄜ',   tones: TONE_HANZI['ze']    },
    { zhuyin: 'ㄗㄞ',  pinyin: 'zai',   japanese: 'ザイ',   consonant: 'ㄗ', vowel: 'ㄞ',   tones: TONE_HANZI['zai']   },
    { zhuyin: 'ㄗㄢ',  pinyin: 'zan',   japanese: 'ザン',   consonant: 'ㄗ', vowel: 'ㄢ',   tones: TONE_HANZI['zan']   },
    { zhuyin: 'ㄗㄤ',  pinyin: 'zang',  japanese: 'ザン',   consonant: 'ㄗ', vowel: 'ㄤ',   tones: TONE_HANZI['zang']  },
    { zhuyin: 'ㄗㄣ',  pinyin: 'zen',   japanese: 'ゼン',   consonant: 'ㄗ', vowel: 'ㄣ',   tones: TONE_HANZI['zen']   },
    { zhuyin: 'ㄗㄥ',  pinyin: 'zeng',  japanese: 'ゼン',   consonant: 'ㄗ', vowel: 'ㄥ',   tones: TONE_HANZI['zeng']  },

    // ㄘ (c)
    { zhuyin: 'ㄘㄚ',  pinyin: 'ca',    japanese: 'ツァ',   consonant: 'ㄘ', vowel: 'ㄚ',   tones: TONE_HANZI['ca']    },
    { zhuyin: 'ㄘㄜ',  pinyin: 'ce',    japanese: 'ツェ',   consonant: 'ㄘ', vowel: 'ㄜ',   tones: TONE_HANZI['ce']    },
    { zhuyin: 'ㄘㄞ',  pinyin: 'cai',   japanese: 'ツァイ', consonant: 'ㄘ', vowel: 'ㄞ',   tones: TONE_HANZI['cai']   },
    { zhuyin: 'ㄘㄢ',  pinyin: 'can',   japanese: 'ツァン', consonant: 'ㄘ', vowel: 'ㄢ',   tones: TONE_HANZI['can']   },
    { zhuyin: 'ㄘㄤ',  pinyin: 'cang',  japanese: 'ツァン', consonant: 'ㄘ', vowel: 'ㄤ',   tones: TONE_HANZI['cang']  },
    { zhuyin: 'ㄘㄣ',  pinyin: 'cen',   japanese: 'ツェン', consonant: 'ㄘ', vowel: 'ㄣ',   tones: TONE_HANZI['cen']   },
    { zhuyin: 'ㄘㄥ',  pinyin: 'ceng',  japanese: 'ツェン', consonant: 'ㄘ', vowel: 'ㄥ',   tones: TONE_HANZI['ceng']  },

    // ㄙ (s)
    { zhuyin: 'ㄙㄚ',  pinyin: 'sa',    japanese: 'サ',     consonant: 'ㄙ', vowel: 'ㄚ',   tones: TONE_HANZI['sa']    },
    { zhuyin: 'ㄙㄜ',  pinyin: 'se',    japanese: 'セ',     consonant: 'ㄙ', vowel: 'ㄜ',   tones: TONE_HANZI['se']    },
    { zhuyin: 'ㄙㄞ',  pinyin: 'sai',   japanese: 'サイ',   consonant: 'ㄙ', vowel: 'ㄞ',   tones: TONE_HANZI['sai']   },
    { zhuyin: 'ㄙㄢ',  pinyin: 'san',   japanese: 'サン',   consonant: 'ㄙ', vowel: 'ㄢ',   tones: TONE_HANZI['san']   },
    { zhuyin: 'ㄙㄤ',  pinyin: 'sang',  japanese: 'サン',   consonant: 'ㄙ', vowel: 'ㄤ',   tones: TONE_HANZI['sang']  },
    { zhuyin: 'ㄙㄣ',  pinyin: 'sen',   japanese: 'セン',   consonant: 'ㄙ', vowel: 'ㄣ',   tones: TONE_HANZI['sen']   },
    { zhuyin: 'ㄙㄥ',  pinyin: 'seng',  japanese: 'セン',   consonant: 'ㄙ', vowel: 'ㄥ',   tones: TONE_HANZI['seng']  },

    // 韻母のみ（零声母音節）
    { zhuyin: 'ㄚ',   pinyin: 'a',    japanese: 'ア',     consonant: '', vowel: 'ㄚ',   tones: TONE_HANZI['a']    },
    { zhuyin: 'ㄛ',   pinyin: 'o',    japanese: 'オ',     consonant: '', vowel: 'ㄛ',   tones: TONE_HANZI['o']    },
    { zhuyin: 'ㄜ',   pinyin: 'e',    japanese: 'エ',     consonant: '', vowel: 'ㄜ',   tones: TONE_HANZI['e']    },
    { zhuyin: 'ㄝ',   pinyin: 'ê',    japanese: 'エ',     consonant: '', vowel: 'ㄝ',   tones: TONE_HANZI['ê']    },
    { zhuyin: 'ㄞ',   pinyin: 'ai',   japanese: 'アイ',   consonant: '', vowel: 'ㄞ',   tones: TONE_HANZI['ai']   },
    { zhuyin: 'ㄟ',   pinyin: 'ei',   japanese: 'エイ',   consonant: '', vowel: 'ㄟ',   tones: TONE_HANZI['ei']   },
    { zhuyin: 'ㄠ',   pinyin: 'ao',   japanese: 'アオ',   consonant: '', vowel: 'ㄠ',   tones: TONE_HANZI['ao']   },
    { zhuyin: 'ㄡ',   pinyin: 'ou',   japanese: 'オウ',   consonant: '', vowel: 'ㄡ',   tones: TONE_HANZI['ou']   },
    { zhuyin: 'ㄢ',   pinyin: 'an',   japanese: 'アン',   consonant: '', vowel: 'ㄢ',   tones: TONE_HANZI['an']   },
    { zhuyin: 'ㄣ',   pinyin: 'en',   japanese: 'エン',   consonant: '', vowel: 'ㄣ',   tones: TONE_HANZI['en']   },
    { zhuyin: 'ㄤ',   pinyin: 'ang',  japanese: 'アン',   consonant: '', vowel: 'ㄤ',   tones: TONE_HANZI['ang']  },
    { zhuyin: 'ㄥ',   pinyin: 'eng',  japanese: 'エン',   consonant: '', vowel: 'ㄥ',   tones: TONE_HANZI['eng']  },
    { zhuyin: 'ㄦ',   pinyin: 'er',   japanese: 'アー',   consonant: '', vowel: 'ㄦ',   tones: TONE_HANZI['er']   },
    { zhuyin: 'ㄧ',   pinyin: 'i',    japanese: 'イ',     consonant: '', vowel: 'ㄧ',   tones: TONE_HANZI['i']    },
    { zhuyin: 'ㄨ',   pinyin: 'u',    japanese: 'ウ',     consonant: '', vowel: 'ㄨ',   tones: TONE_HANZI['u']    },
    { zhuyin: 'ㄩ',   pinyin: 'ü',    japanese: 'ユ',     consonant: '', vowel: 'ㄩ',   tones: TONE_HANZI['ü']    }
  ]
};
