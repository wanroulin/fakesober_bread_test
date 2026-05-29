import type { BreadResult, BreadType, QuizQuestion } from "./types";

export const BREAD_ORDER: BreadType[] = [
  "original",
  "earlgrey",
  "redbean",
  "bacon",
  "garlic",
];

export const BREAD_IMAGES: Record<BreadType, string> = {
  original: "/原味.png",
  earlgrey: "/伯爵茶.png",
  redbean: "/紅豆奶油.png",
  bacon: "/培根蘆筍.png",
  garlic: "/蒜味奶油乳酪.png",
};

export const QUESTION_WEIGHTS = [1, 1, 2, 1, 2, 1] as const;

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: "第一次到 Fake Sober，你會選哪個位置？",
    weight: 1,
    options: [
      { label: "靠窗的位置，看街景發呆", type: "earlgrey" },
      { label: "最安靜的小角落", type: "original" },
      { label: "吧台附近，想聽大家聊天", type: "garlic" },
      { label: "有插座、方便做事的位置", type: "bacon" },
      { label: "燈光最好看的位置", type: "redbean" },
    ],
  },
  {
    id: 2,
    title: "朋友突然揪你出門，你通常？",
    weight: 1,
    options: [
      { label: "「走啊，現在嗎？」", type: "bacon" },
      { label: "先問還有哪些人", type: "earlgrey" },
      { label: "嘴巴說懶，但最後還是會去", type: "redbean" },
      { label: "看狀況，但通常都可以", type: "original" },
      { label: "已經開始想等等要發什麼限動", type: "garlic" },
    ],
  },
  {
    id: 3,
    title: "你最常在深夜做什麼？",
    weight: 2,
    highlight: "權重 x2",
    options: [
      { label: "聽歌發呆", type: "earlgrey" },
      { label: "一直滑手機停不下來", type: "garlic" },
      { label: "突然很想吃宵夜", type: "redbean" },
      { label: "安排明天的事情", type: "bacon" },
      { label: "什麼都不做，只想放空", type: "original" },
    ],
  },
  {
    id: 4,
    title: "難得放假一天，你最想？",
    weight: 1,
    options: [
      { label: "睡到自然醒，再慢慢吃早餐", type: "original" },
      { label: "去咖啡廳待一整天", type: "earlgrey" },
      { label: "臨時決定跑去遠一點的地方", type: "bacon" },
      { label: "約朋友聊天聊到晚上", type: "garlic" },
      { label: "在家追劇配甜食", type: "redbean" },
    ],
  },
  {
    id: 5,
    title: "你容易被哪種人吸引？",
    weight: 2,
    highlight: "權重 x2",
    options: [
      { label: "很溫柔但低調的人", type: "original" },
      { label: "有自己世界觀的人", type: "earlgrey" },
      { label: "看起來酷，但其實很暖的人", type: "redbean" },
      { label: "行動力超強的人", type: "bacon" },
      { label: "跟誰都能自然聊起來的人", type: "garlic" },
    ],
  },
  {
    id: 6,
    title: "選一個 Fake Sober 的夜晚畫面",
    weight: 1,
    highlight: "同分決勝題",
    options: [
      { label: "爵士樂＋窗邊雨天", type: "earlgrey" },
      { label: "一個人待到快打烊", type: "original" },
      { label: "微醺後慢慢散步回家", type: "redbean" },
      { label: "一群人突然決定續攤", type: "garlic" },
      { label: "明天有事但今天還是想玩", type: "bacon" },
    ],
  },
];

export const RESULTS: Record<BreadType, BreadResult> = {
  original: {
    type: "original",
    name: "原味鹽麵包",
    image: BREAD_IMAGES.original,
    keywords: [
      { emoji: "☁️", text: "穩定" },
      { emoji: "🛋️", text: "慢熟" },
      { emoji: "🌙", text: "安心感" },
    ],
    description: [
      "你是大家身邊最像「避風港」的人。",
      "不一定最顯眼，但總會讓人莫名安心。",
      "你喜歡舒服的節奏，也很懂得照顧別人的情緒。",
      "比起熱鬧，你更在意「相處起來自在」。",
    ],
    drink: "伯爵鮮奶茶",
    drinkNote: "淡淡茶香跟穩定感很像你。",
    friendBread: "蒜味奶油乳酪鹽麵包",
    friendNote: "你的穩定，剛好能接住他的瘋。",
  },
  earlgrey: {
    type: "earlgrey",
    name: "伯爵茶鹽麵包",
    image: BREAD_IMAGES.earlgrey,
    keywords: [
      { emoji: "🎧", text: "氣質" },
      { emoji: "☕", text: "觀察系" },
      { emoji: "🌧️", text: "慢熱" },
    ],
    description: [
      "你有自己的世界。",
      "你不一定話很多，但總能注意到別人忽略的小細節。",
      "很多人第一次會覺得你有點距離感，",
      "但熟了之後，會發現你其實非常溫柔。",
    ],
    drink: "單品手沖咖啡",
    drinkNote: "有層次、耐人尋味。",
    friendBread: "原味鹽麵包",
    friendNote: "他能給你最舒服的安全感。",
  },
  redbean: {
    type: "redbean",
    name: "紅豆奶油鹽麵包",
    image: BREAD_IMAGES.redbean,
    keywords: [
      { emoji: "🍓", text: "反差感" },
      { emoji: "🎞️", text: "浪漫" },
      { emoji: "🫧", text: "情緒派" },
    ],
    description: [
      "你看起來好像酷酷的，但其實超容易心軟。",
      "你很重感覺，也很容易因為一個瞬間被打動。",
      "你是那種：會突然衝去買甜點安慰自己的人。",
    ],
    drink: "抹茶歐蕾",
    drinkNote: "溫柔、療癒、帶一點甜。",
    friendBread: "培根蘆筍鹽麵包",
    friendNote: "他會把你從情緒裡拖出來。",
  },
  bacon: {
    type: "bacon",
    name: "培根蘆筍鹽麵包",
    image: BREAD_IMAGES.bacon,
    keywords: [
      { emoji: "⚡", text: "行動派" },
      { emoji: "🚗", text: "說走就走" },
      { emoji: "🔥", text: "熱血" },
    ],
    description: [
      "你的人生很少「等一下」。",
      "想到什麼就去做，臨時約也能立刻出發。",
      "你討厭停滯感，總是在找新的刺激跟新鮮感。",
      "跟你待在一起的人，通常都會變得比較勇敢。",
    ],
    drink: "西西里咖啡",
    drinkNote: "清爽、有衝擊感，很像你。",
    friendBread: "紅豆奶油鹽麵包",
    friendNote: "你們是標準互補型。",
  },
  garlic: {
    type: "garlic",
    name: "蒜味奶油乳酪鹽麵包",
    image: BREAD_IMAGES.garlic,
    keywords: [
      { emoji: "🎉", text: "社交怪物" },
      { emoji: "📸", text: "主角感" },
      { emoji: "🪩", text: "熱鬧製造機" },
    ],
    description: [
      "有你在的地方，通常不會太安靜。",
      "你很懂氣氛，也很容易跟陌生人熟起來。",
      "但其實你比大家想得更細膩，",
      "只是習慣把情緒藏在熱鬧後面。",
    ],
    drink: "雲朵拿鐵",
    drinkNote: "可愛、吸睛，而且讓人印象深刻。",
    friendBread: "伯爵茶鹽麵包",
    friendNote: "你負責熱鬧，他負責安靜。",
  },
};
