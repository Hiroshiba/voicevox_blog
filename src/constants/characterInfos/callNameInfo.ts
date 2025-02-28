import type { CharacterKey } from "@/constants/characterEntry";

export const callNameInfos: {
  [key in CharacterKey]: {
    [key in CharacterKey]?: string | undefined;
  } & { me: readonly string[]; you: readonly string[] };
} = {
  四国めたん: {
    me: ["わたくし"],
    you: ["貴女(たち)", "アンタ(ら)"],
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎさん",
    雨晴はう: "はうさん",
    波音リツ: "リツさん",
    玄野武宏: "玄野さん",
    白上虎太郎: "白上さん",
    青山龍星: "青山さん",
    冥鳴ひまり: "ひまりさん",
    九州そら: "そら",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "剣崎さん",
    WhiteCUL: "雪さん",
    後鬼: "後鬼さん",
    No7: "セブンさん",
    ちび式じい: "ちび式じいさん",
    櫻歌ミコ: "ミコさん",
    小夜_SAYO: "小夜さん",
    ナースロボ＿タイプＴ: "ＴＴさん",
    聖騎士紅桜: "聖騎士さん",
    雀松朱司: "雀松さん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "ナナさん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "うさぎ",
    栗田まろん: "栗田さん",
    藍田ノエル: "あいえるさん",
    満別花丸: "花丸さん",
    琴詠ニア: "ニアさん",
    Voidoll: "ぼいどーるさん",
    ぞん子: "ぞん子さん",
    中部つるぎ: "中部つるぎ",
  },
  ずんだもん: {
    me: ["ずんだもん", "僕"],
    you: ["オマエ", "みんな"],
    四国めたん: "めたん",
    春日部つむぎ: "つむぎ",
    雨晴はう: "はう",
    波音リツ: "リツ",
    玄野武宏: "たけひろ",
    白上虎太郎: "こたろう",
    青山龍星: "りゅうせい",
    冥鳴ひまり: "ひまり",
    九州そら: "そら",
    モチノキョウコ: "もち子",
    剣崎雌雄: "めすお",
    WhiteCUL: "雪",
    後鬼: "後鬼",
    No7: "セブン",
    ちび式じい: "ちび式じい",
    櫻歌ミコ: "ミコ",
    小夜_SAYO: "小夜",
    ナースロボ＿タイプＴ: "ＴＴ",
    聖騎士紅桜: "紅桜",
    雀松朱司: "朱司",
    麒ヶ島宗麟: "宗麟",
    春歌ナナ: "ナナ",
    猫使アル: "アル",
    猫使ビィ: "ビィ",
    中国うさぎ: "うさぎ",
    栗田まろん: "まろん",
    藍田ノエル: "あいえる",
    満別花丸: "はなまる",
    琴詠ニア: "ニア",
    Voidoll: "ぼいどーる",
    ぞん子: "ぞん子",
    中部つるぎ: "つるぎ",
  },
  春日部つむぎ: {
    me: ["あーし"],
    you: ["きみ", "きみたち"],
    四国めたん: "めたん先輩",
    ずんだもん: "ずんだもん先輩",
    雨晴はう: "はうちゃん",
    波音リツ: "りっちゃん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまっち",
    九州そら: "そらさん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "めすおちゃん",
    WhiteCUL: "ゆきちゃん",
    後鬼: "後鬼せんせー",
    No7: "ななっち",
    ちび式じい: "ちびじい",
    櫻歌ミコ: "みこっち",
    小夜_SAYO: "さよち",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "聖騎士くん",
    雀松朱司: "赤司くん",
    麒ヶ島宗麟: "宗麟おじ",
    春歌ナナ: "ナナっち",
    猫使アル: "アルにゃん",
    猫使ビィ: "ビィにゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんちゃん",
    藍田ノエル: "あいえるたん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイちゃん",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎさん",
  },
  雨晴はう: {
    me: ["僕"],
    you: ["あなた", "あなた達"],
    四国めたん: "めたんさん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎさん",
    波音リツ: "リツさん",
    玄野武宏: "玄野さん",
    白上虎太郎: "白上さん",
    青山龍星: "青山さん",
    冥鳴ひまり: "ひまりさん",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "剣崎さん",
    WhiteCUL: "ゆきさん",
    後鬼: "ごきさん",
    No7: "ななさん",
    ちび式じい: "お式さん",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜さん",
    ナースロボ＿タイプＴ: "Tちゃん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "雀松さん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "春歌さん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさちゃん",
    栗田まろん: "栗田さん",
    藍田ノエル: "あいえるたん",
    満別花丸: "花丸さん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ぼいどーるさん",
    中部つるぎ: "つるぎさん",
  },
  波音リツ: {
    me: ["あたし"],
    you: ["アンタ", "アンタら"],
    四国めたん: "めたん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎ",
    雨晴はう: "はう",
    玄野武宏: "くろの",
    白上虎太郎: "こたろう",
    青山龍星: "りゅうせい",
    冥鳴ひまり: "ひまり",
    九州そら: "そら",
    モチノキョウコ: "もち子",
    剣崎雌雄: "めすお",
    WhiteCUL: "ゆき",
    後鬼: "ごき",
    No7: "なな",
    ちび式じい: "式じい",
    櫻歌ミコ: "ミコ",
    小夜_SAYO: "さよ",
    ナースロボ＿タイプＴ: "TT",
    聖騎士紅桜: "べにざくら",
    雀松朱司: "あかし",
    麒ヶ島宗麟: "そうりん",
    春歌ナナ: "ナナ",
    猫使アル: "アル",
    猫使ビィ: "ビィ",
    中国うさぎ: "うさぎ",
    栗田まろん: "まろん",
    藍田ノエル: "あいえる",
    満別花丸: "花丸",
    琴詠ニア: "ニア",
    Voidoll: "ぼいどーる",
    ぞん子: "ぞん子",
    中部つるぎ: "つるぎ",
  },
  玄野武宏: {
    me: ["俺"],
    you: ["お前", "お前ら"],
    四国めたん: "めたん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎ",
    雨晴はう: "はう",
    波音リツ: "リツ",
    白上虎太郎: "虎太郎",
    青山龍星: "龍星",
    冥鳴ひまり: "ひまり",
    九州そら: "そら",
    モチノキョウコ: "もち子",
    剣崎雌雄: "雌雄",
    WhiteCUL: "雪",
    後鬼: "後鬼",
    No7: "なな",
    ちび式じい: "小さいじいさん",
    櫻歌ミコ: "ミコ",
    小夜_SAYO: "小夜",
    ナースロボ＿タイプＴ: "タイプT",
    聖騎士紅桜: "紅桜",
    雀松朱司: "朱司",
    麒ヶ島宗麟: "おっさん",
    春歌ナナ: "ナナ",
    猫使アル: "アル",
    猫使ビィ: "ビィ",
    中国うさぎ: "うさぎ",
    栗田まろん: "まろん",
    藍田ノエル: "あいえる",
    満別花丸: "花丸",
    琴詠ニア: "ニア",
    Voidoll: "ボイドール",
    ぞん子: "ぞん子",
    中部つるぎ: "つるぎ",
  },
  白上虎太郎: {
    me: ["おれ"],
    you: ["きみ", "きみ達"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんずん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうさん",
    波音リツ: "リツさん",
    玄野武宏: "タケヒロ",
    青山龍星: "リューセー",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "シユー",
    WhiteCUL: "ユキさん",
    後鬼: "ゴキさん",
    No7: "ナナちゃんさん",
    ちび式じい: "ちっちゃい式じい",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "サヨちゃん",
    ナースロボ＿タイプＴ: "Tちゃん",
    聖騎士紅桜: "ベニザクラさん",
    雀松朱司: "アカシさん",
    麒ヶ島宗麟: "おっちゃん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんちゃん/くん",
    藍田ノエル: "あいえるちゃん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイドールちゃん",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎさん",
  },
  青山龍星: {
    me: ["オレ"],
    you: ["アンタ", "アンタ達", "お前達"],
    四国めたん: "めたん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎ",
    雨晴はう: "はう",
    波音リツ: "リツ",
    玄野武宏: "武宏",
    白上虎太郎: "虎太郎",
    冥鳴ひまり: "ひまり",
    九州そら: "そら",
    モチノキョウコ: "もち子",
    剣崎雌雄: "雌雄",
    WhiteCUL: "雪",
    後鬼: "後鬼",
    No7: "セブン",
    ちび式じい: "小さい大元さん",
    櫻歌ミコ: "ミコ",
    小夜_SAYO: "小夜",
    ナースロボ＿タイプＴ: "T",
    聖騎士紅桜: "紅桜",
    雀松朱司: "朱司",
    麒ヶ島宗麟: "親父",
    春歌ナナ: "ナナ",
    猫使アル: "アル",
    猫使ビィ: "ビィ",
    中国うさぎ: "うさぎ",
    栗田まろん: "まろん",
    藍田ノエル: "あいえる",
    満別花丸: "花丸",
    琴詠ニア: "ニア",
    Voidoll: "ボイドール",
    ぞん子: "ぞん子",
    中部つるぎ: "つるぎ",
  },
  冥鳴ひまり: {
    me: ["私"],
    you: ["君たち"],
    四国めたん: "めたん先輩",
    ずんだもん: "ずんだもん先輩",
    春日部つむぎ: "つむぎ先輩",
    雨晴はう: "はう先輩",
    波音リツ: "リツ先輩",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    九州そら: "そらちゃん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "メスオジ",
    WhiteCUL: "ゆきちゃん",
    後鬼: "後鬼ちゃん",
    No7: "ななちゃん",
    ちび式じい: "ちびじい",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "聖騎士さん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "宗麟くん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさちゃん",
    栗田まろん: "まろんちゃん",
    藍田ノエル: "あいえるちゃん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイドールちゃん",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎちゃん",
  },
  九州そら: {
    me: ["まーくつー"],
    you: ["あなたさま", "みなさま"],
    四国めたん: "めたんさま",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎさま",
    雨晴はう: "はうさま",
    波音リツ: "リツさま",
    玄野武宏: "武宏さま",
    白上虎太郎: "虎太郎さま",
    青山龍星: "龍星さま",
    冥鳴ひまり: "ひまりさま",
    モチノキョウコ: "もち子さま",
    剣崎雌雄: "雌雄さま",
    WhiteCUL: "雪さま",
    後鬼: "後鬼さま",
    No7: "セブンさま",
    ちび式じい: "ちび式じいさま",
    櫻歌ミコ: "ミコさま",
    小夜_SAYO: "小夜さま",
    ナースロボ＿タイプＴ: "ＴＴさま",
    聖騎士紅桜: "紅桜さま",
    雀松朱司: "朱司さま",
    麒ヶ島宗麟: "宗麟さま",
    春歌ナナ: "ナナさま",
    猫使アル: "アルさま",
    猫使ビィ: "ビィさま",
    中国うさぎ: "うさぎさま",
    栗田まろん: "まろんさま",
    藍田ノエル: "あいえるさま",
    満別花丸: "花丸様",
    琴詠ニア: "ニアさま",
    Voidoll: "ぼいどーるさま",
    ぞん子: "ぞん子さま",
    中部つるぎ: "つるぎさま",
  },
  モチノキョウコ: {
    me: ["私", "もち子"],
    you: ["あなた", "あなた達"],
    四国めたん: "めたんさん",
    ずんだもん: "ずんだもんちゃん",
    春日部つむぎ: "つむぎさん",
    雨晴はう: "はうちゃん",
    波音リツ: "リッちゃん先輩",
    玄野武宏: "玄野くん",
    白上虎太郎: "白上くん",
    青山龍星: "青山くん",
    冥鳴ひまり: "ひまり先輩",
    九州そら: "そらさん",
    剣崎雌雄: "剣崎さん",
    WhiteCUL: "ユキさん",
    後鬼: "後鬼お姉さん",
    No7: "セブンちゃん",
    ちび式じい: "ちび式さん",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "ティーさん（Tさん）",
    聖騎士紅桜: "紅桜",
    雀松朱司: "雀松くん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんくん",
    藍田ノエル: "えるさん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ぼいどーるちゃん",
    ぞん子: "ぞん子(ぞーん)ちゃん",
    中部つるぎ: "つるぎさん",
  },
  剣崎雌雄: {
    me: ["僕"],
    you: ["君等"],
    四国めたん: "くにさん",
    ずんだもん: "だーもん",
    春日部つむぎ: "べっつー",
    雨晴はう: "はーさん",
    波音リツ: "ねりさん",
    玄野武宏: "くーろん",
    白上虎太郎: "こっちゃん",
    青山龍星: "りゅうさん",
    冥鳴ひまり: "めまりちゃん",
    九州そら: "らーさん",
    モチノキョウコ: "もっちー",
    WhiteCUL: "とかっち",
    後鬼: "ごっさん",
    No7: "ぶんぶん丸",
    ちび式じい: "小元",
    櫻歌ミコ: "カミッコ",
    小夜_SAYO: "小夜",
    ナースロボ＿タイプＴ: "助手",
    聖騎士紅桜: "我が強敵（とも）スカーレットチェリーブロッサム",
    雀松朱司: "かっしー",
    麒ヶ島宗麟: "りんちゃん",
    春歌ナナ: "るかなん",
    猫使アル: "カール",
    猫使ビィ: "カービィ",
    中国うさぎ: "ごくう",
    栗田まろん: "まろん",
    藍田ノエル: "Ｌ",
    満別花丸: "まんまる",
    琴詠ニア: "おことさん",
    Voidoll: "おいどん",
    ぞん子: "ゾネ子/魔剤",
    中部つるぎ: "カネツグ",
  },
  WhiteCUL: {
    me: ["わたし"],
    you: ["あなた", "あなたたち"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎ",
    雨晴はう: "はうちゃん",
    波音リツ: "リツちゃん",
    玄野武宏: "武弘さん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "りゅうちゃん",
    冥鳴ひまり: "ひまりん",
    九州そら: "そらさん",
    モチノキョウコ: "もちこさん",
    剣崎雌雄: "剣崎さん",
    後鬼: "後鬼さん",
    No7: "ななさん",
    ちび式じい: "ちびじい",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "そうりん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "うさぎさん",
    栗田まろん: "まろんくん",
    藍田ノエル: "あいえるさん",
    満別花丸: "花丸さん",
    琴詠ニア: "にあちゃん",
    Voidoll: "どるちゃん",
    ぞん子: "ぞん子さん",
    中部つるぎ: "つるぎさん",
  },
  後鬼: {
    me: ["私/ワテ"],
    you: ["あなたorキミ/あんたはん"],
    四国めたん: "四国さん/めたんはん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "春日部さん/つむぎはん",
    雨晴はう: "雨晴さん/はうはん",
    波音リツ: "波音さん/リツはん",
    玄野武宏: "玄野くん/玄野はん",
    白上虎太郎: "白上くん/白上はん",
    青山龍星: "青山くん/龍星はん",
    冥鳴ひまり: "冥鳴さん/ひまりはん",
    九州そら: "九州さん/九州はん",
    モチノキョウコ: "もち子さん/もち子はん",
    剣崎雌雄: "剣崎くん/剣崎はん",
    WhiteCUL: "雪さん/雪はん",
    No7: "セブンさん/セブンはん",
    ちび式じい: "おちびさん/ちび式じいはん",
    櫻歌ミコ: "櫻歌さん/ミコはん",
    小夜_SAYO: "小夜さん/小夜はん",
    ナースロボ＿タイプＴ: "TTさん/TTはん",
    聖騎士紅桜: "紅桜さん/紅桜はん",
    雀松朱司: "雀松くん/雀松はん",
    麒ヶ島宗麟: "宗麟さん/宗麟はん",
    春歌ナナ: "春歌さん/ナナはん",
    猫使アル: "アルさん/アルはん",
    猫使ビィ: "ビィさん/ビィはん",
    中国うさぎ: "中国さん/中国はん",
    栗田まろん: "栗田くん/栗田はん",
    藍田ノエル: "あいえるさん/あいえるはん",
    満別花丸: "満別さん/花丸はん",
    琴詠ニア: "琴詠さん/ニアはん",
    Voidoll: "ボイドールさん/ぼいどーるはん",
    ぞん子: "ぞん子さん/ぞん子はん",
    中部つるぎ: "中部さん/中部はん",
  },
  No7: {
    me: ["私", "僕"],
    you: ["そちら様", "皆様"],
    四国めたん: "四国さん",
    ずんだもん: "ずんだもん様",
    春日部つむぎ: "春日部さん",
    雨晴はう: "雨晴さん",
    波音リツ: "波音さん",
    玄野武宏: "玄野さん",
    白上虎太郎: "白上さん",
    青山龍星: "青山さん",
    冥鳴ひまり: "冥鳴さん",
    九州そら: "九州さん",
    モチノキョウコ: "モチノさん",
    剣崎雌雄: "剣崎さん",
    WhiteCUL: "雪さん",
    後鬼: "後鬼さん",
    ちび式じい: "ちび式さん",
    櫻歌ミコ: "櫻歌さん",
    小夜_SAYO: "小夜さん",
    ナースロボ＿タイプＴ: "TTさん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "雀松さん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "春歌さん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "中国さん",
    栗田まろん: "栗田さん",
    藍田ノエル: "あいえるさん",
    満別花丸: "満別さん",
    琴詠ニア: "琴詠さん",
    Voidoll: "ぼいどーるさん",
    ぞん子: "ぞん子さん",
    中部つるぎ: "中部さん/中部はん",
  },
  ちび式じい: {
    me: ["わし"],
    you: ["おぬし", "おぬしら"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだの精さん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "りっちゃん",
    玄野武宏: "たけひろさん",
    白上虎太郎: "こたろうくん",
    青山龍星: "りゅうせいさん",
    冥鳴ひまり: "めいめいちゃん/死神さん",
    九州そら: "そらさん",
    モチノキョウコ: "もちこさん",
    剣崎雌雄: "メスの付喪神さん/メスのひと",
    WhiteCUL: "ゆきさん",
    後鬼: "ごきさん",
    No7: "なな号さん",
    櫻歌ミコ: "みこみこ",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "ほーりーないとべにざくらさん",
    雀松朱司: "あかしさん",
    麒ヶ島宗麟: "そうりんさん",
    春歌ナナ: "はるななさん",
    猫使アル: "あるさん",
    猫使ビィ: "びぃさん",
    中国うさぎ: "うさぎさん",
    栗田まろん: "にこにこのえらいひと(？)",
    藍田ノエル: "あいえるたん",
    満別花丸: "はなまるさん",
    琴詠ニア: "にあさん",
    Voidoll: "ぼいどーるさん",
    ぞん子: "ぞんこさん",
    中部つるぎ: "つるぎさん",
  },
  櫻歌ミコ: {
    me: ["ミコ/私"],
    you: ["あなた", "あなたたち"],
    四国めたん: "めたんちゃん",
    ずんだもん: "もんちゃん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "りっちゃん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらちゃん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "剣崎先生",
    WhiteCUL: "雪ちゃん",
    後鬼: "後鬼ちゃん",
    No7: "セブンちゃん",
    ちび式じい: "ちいおじいちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "宗麟おじちゃん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんくん",
    藍田ノエル: "えるちゃん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイちゃん",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎちゃん",
  },
  小夜_SAYO: {
    me: ["小夜"],
    you: ["あなた", "あなたたち"],
    四国めたん: "めたんさん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうさん",
    波音リツ: "リツさん",
    玄野武宏: "武宏さん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星さん",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "剣崎先生",
    WhiteCUL: "雪さん",
    後鬼: "後鬼さん",
    No7: "ななさん",
    ちび式じい: "ちびじい",
    櫻歌ミコ: "ミコちゃん",
    ナースロボ＿タイプＴ: "てぃてぃちゃん",
    聖騎士紅桜: "騎士さん（ないとさん）",
    雀松朱司: "朱司さん",
    麒ヶ島宗麟: "宗麟おじちゃん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんくん",
    藍田ノエル: "あいえるたん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアさん",
    Voidoll: "ぼいどーる",
    ぞん子: "ぞん子さん",
    中部つるぎ: "つるぎさん",
  },
  ナースロボ＿タイプＴ: {
    me: ["わたし"],
    you: ["あなた", "あなたたち"],
    四国めたん: "四国さん",
    ずんだもん: "ずんだもんさん",
    春日部つむぎ: "春日部さん",
    雨晴はう: "雨晴さん",
    波音リツ: "波音さん",
    玄野武宏: "玄野さん",
    白上虎太郎: "白上さん",
    青山龍星: "青山さん",
    冥鳴ひまり: "冥鳴さん",
    九州そら: "まーくつーさん",
    モチノキョウコ: "モチノさん",
    剣崎雌雄: "剣崎先生",
    WhiteCUL: "ゆきさん",
    後鬼: "後鬼さん",
    No7: "セブンさん",
    ちび式じい: "おじいさん",
    櫻歌ミコ: "櫻歌さん",
    小夜_SAYO: "小夜さん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "雀松さん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "ナナさん",
    猫使アル: "アルさん",
    猫使ビィ: "ビーさん",
    中国うさぎ: "うさぎさん",
    栗田まろん: "栗田さん",
    藍田ノエル: "あいえるはん",
    満別花丸: "満別さん",
    琴詠ニア: "琴詠さん",
  },
  聖騎士紅桜: {
    me: ["我"],
    you: ["お前", "お前ら"],
    四国めたん: "めたん殿",
    ずんだもん: "ずんだもん殿",
    春日部つむぎ: "つむぎ殿",
    雨晴はう: "はう殿",
    波音リツ: "リツ殿",
    玄野武宏: "武宏殿",
    白上虎太郎: "虎太郎殿",
    青山龍星: "龍星殿",
    冥鳴ひまり: "ひまり殿",
    九州そら: "そら殿",
    モチノキョウコ: "もち子殿",
    剣崎雌雄: "雌雄",
    WhiteCUL: "雪殿",
    後鬼: "後鬼殿",
    No7: "なな殿",
    ちび式じい: "ちびじい殿",
    櫻歌ミコ: "ミコ殿",
    小夜_SAYO: "小夜殿",
    ナースロボ＿タイプＴ: "TT殿",
    雀松朱司: "朱司殿",
    麒ヶ島宗麟: "麒ヶ島殿",
    春歌ナナ: "ナナ殿",
    猫使アル: "アル殿",
    猫使ビィ: "ビィ殿",
    中国うさぎ: "うさ殿",
    栗田まろん: "まろん殿",
    藍田ノエル: "あいえる殿",
    満別花丸: "花丸殿",
    琴詠ニア: "ニア殿",
    Voidoll: "ボイ殿",
  },
  雀松朱司: {
    me: ["僕"],
    you: ["あなた", "あなたたち"],
    四国めたん: "めたんさん",
    ずんだもん: "ずんだもんさん",
    春日部つむぎ: "春日部さん",
    雨晴はう: "雨晴さん",
    波音リツ: "波音さん",
    玄野武宏: "玄野くん",
    白上虎太郎: "白上くん",
    青山龍星: "龍星",
    冥鳴ひまり: "冥鳴さん",
    九州そら: "九州さん",
    モチノキョウコ: "もちのさん",
    剣崎雌雄: "剣崎さん",
    WhiteCUL: "雪さん",
    後鬼: "後鬼さん",
    No7: "ななさん",
    ちび式じい: "小さい方の式じいさん",
    櫻歌ミコ: "櫻花さん",
    小夜_SAYO: "小夜さん",
    ナースロボ＿タイプＴ: "TTさん",
    聖騎士紅桜: "紅桜さん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "春歌さん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "うさぎさん",
    栗田まろん: "まろんさん",
    藍田ノエル: "あいえるさん",
    満別花丸: "花丸さん",
    琴詠ニア: "ニアさん",
    Voidoll: "ボイドールさん",
    ぞん子: "ぞん子さん",
    中部つるぎ: "つるぎさん",
  },
  麒ヶ島宗麟: {
    me: ["私"],
    you: ["おまえ", "お前たち"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだもんちゃん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "リッちゃん",
    玄野武宏: "武宏",
    白上虎太郎: "虎坊(とらぼん)",
    青山龍星: "龍",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらちゃん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "雌雄くん",
    WhiteCUL: "雪ちゃん",
    後鬼: "後鬼ちゃん",
    No7: "ななちゃん",
    ちび式じい: "小さい式じい殿",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "桜花くん",
    雀松朱司: "朱司くん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんくん",
    藍田ノエル: "あいえるちゃん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイドール殿",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎちゃん",
  },
  春歌ナナ: {
    me: ["ナナ", "わたし"],
    you: ["あなた", "あなたたち"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "りっちゃん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらちゃん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "剣崎せんせー",
    WhiteCUL: "ゆきちゃん",
    後鬼: "後鬼ちゃん",
    No7: "セブンちゃん",
    ちび式じい: "ちびおじいちゃん",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "ティーちゃん（Tちゃん）",
    聖騎士紅桜: "紅さん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "宗麟おじちゃんおじちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
  },
  猫使アル: {
    me: ["アル", "おれ", "ボク"],
    you: ["～さん", "先輩", "きみ等"],
    四国めたん: "めたん先輩",
    ずんだもん: "ずんだ先輩",
    春日部つむぎ: "つむぎ先輩",
    雨晴はう: "はう先輩",
    波音リツ: "リツ先輩",
    玄野武宏: "たけ先輩",
    白上虎太郎: "こた先輩",
    青山龍星: "りゅう先輩",
    冥鳴ひまり: "ひまり先輩",
    九州そら: "そら先輩",
    モチノキョウコ: "もちこ先輩",
    剣崎雌雄: "めすお先輩",
    WhiteCUL: "ゆき先輩",
    後鬼: "ごき先輩",
    No7: "セブン先輩",
    ちび式じい: "しきじいちゃん",
    櫻歌ミコ: "ミコ先輩",
    小夜_SAYO: "さよ先輩",
    ナースロボ＿タイプＴ: "T先輩",
    聖騎士紅桜: "黒歴史先輩",
    雀松朱司: "あかしさん",
    麒ヶ島宗麟: "そうりんおじさん",
    春歌ナナ: "ナナ",
    猫使ビィ: "ビィ",
    中国うさぎ: "うさぎさん",
    栗田まろん: "まろんさん",
    藍田ノエル: "えるさん",
    満別花丸: "まるさん",
    琴詠ニア: "にあさん",
    Voidoll: "どーるさん",
    ぞん子: "ぞん子さん",
    中部つるぎ: "つるぎさん",
  },
  猫使ビィ: {
    me: ["ビィ", "私", "ボク"],
    you: ["～さん", "先輩", "あなた等"],
    四国めたん: "めたん先輩",
    ずんだもん: "ずんだもん先輩",
    春日部つむぎ: "つむぎ先輩",
    雨晴はう: "はう先輩",
    波音リツ: "りつ先輩",
    玄野武宏: "たけ先輩",
    白上虎太郎: "こたろー先輩",
    青山龍星: "りゅうせー先輩",
    冥鳴ひまり: "ひまり先輩",
    九州そら: "そら先輩",
    モチノキョウコ: "もちこ先輩",
    剣崎雌雄: "めすお先輩",
    WhiteCUL: "ゆき先輩",
    後鬼: "ごき先輩",
    No7: "せぶん先輩",
    ちび式じい: "しきおじいちゃん",
    櫻歌ミコ: "みこみこ先輩",
    小夜_SAYO: "さよ先輩",
    ナースロボ＿タイプＴ: "TT先輩",
    聖騎士紅桜: "黒歴史先輩",
    雀松朱司: "あかしさん",
    麒ヶ島宗麟: "そーりんおじさん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アル",
    中国うさぎ: "うさぎさん",
    栗田まろん: "まろんさん",
    藍田ノエル: "えるさん",
    満別花丸: "まるさん",
    琴詠ニア: "にあさん",
    Voidoll: "どーるさん",
    ぞん子: "ぞん子さん",
    中部つるぎ: "つるぎさん",
  },
  中国うさぎ: {
    me: ["わたし"],
    you: ["あなた", "みんな"],
    四国めたん: "メタンハイドレートの人/めたんの人",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "埼玉の人",
    雨晴はう: "看護の人",
    波音リツ: "波の人",
    玄野武宏: "玄の人",
    白上虎太郎: "虎の人",
    青山龍星: "龍の人",
    冥鳴ひまり: "死に神の人",
    九州そら: "そらの人",
    モチノキョウコ: "もちの人",
    剣崎雌雄: "メスの人",
    WhiteCUL: "白の人",
    後鬼: "後鬼の人",
    No7: "七（なな）の人",
    ちび式じい: "じいの人",
    櫻歌ミコ: "オオカミの人",
    小夜_SAYO: "ねこみみの人",
    ナースロボ＿タイプＴ: "ロボTの人",
    聖騎士紅桜: "聖騎士の人",
    雀松朱司: "朱（あか）の人",
    麒ヶ島宗麟: "麒麟（きりん）の人",
    春歌ナナ: "春の人",
    猫使アル: "猫Ａの人",
    猫使ビィ: "猫Ｂの人",
    栗田まろん: "栗の人",
    藍田ノエル: "エルの人",
    満別花丸: "花丸の人",
    琴詠ニア: "琴の人",
    Voidoll: "コンパスの人",
    ぞん子: "ぞん子の人",
    中部つるぎ: "つるぎの人",
  },
  栗田まろん: {
    me: ["僕"],
    you: ["君", "みなさん"],
    四国めたん: "めたんさん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎさん",
    雨晴はう: "はうさん",
    波音リツ: "リツさん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまりさん",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "雌雄さん",
    WhiteCUL: "ゆきさん",
    後鬼: "後鬼さん",
    No7: "ななさん",
    ちび式じい: "式さん",
    櫻歌ミコ: "ミコさん",
    小夜_SAYO: "小夜さん",
    ナースロボ＿タイプＴ: "TTさん",
    聖騎士紅桜: "紅桜くん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "ナナさん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "うさぎさん",
    藍田ノエル: "あいえるさん",
    満別花丸: "花丸さん",
    琴詠ニア: "ニアさん",
    Voidoll: "ぼいどーるさん",
  },
  藍田ノエル: {
    me: ["あいえるたん", "わたし"],
    you: ["あなた", "みんな"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "リッちゃん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらちゃん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "雌雄くん",
    WhiteCUL: "ゆきちゃん",
    後鬼: "後鬼さん",
    No7: "セブンちゃん",
    ちび式じい: "ちびじいさん",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "Tちゃん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "宗麟さん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんちゃん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイちゃん",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎちゃん",
  },
  満別花丸: {
    me: ["ぼく"],
    you: ["君", "みんな"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "リツさん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "雌雄",
    WhiteCUL: "ゆきちゃん",
    後鬼: "後鬼さん",
    No7: "セブンさん",
    ちび式じい: "ちび式じい",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "TTちゃん",
    聖騎士紅桜: "紅桜",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "きりんのおじちゃん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アル",
    猫使ビィ: "ビィ",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "栗田",
    藍田ノエル: "あいえるたん",
    琴詠ニア: "ニア",
    Voidoll: "ぼいどーる",
    ぞん子: "ぞん子",
    中部つるぎ: "つるぎさん",
  },
  琴詠ニア: {
    me: ["私"],
    you: ["きみ", "きみ達"],
    四国めたん: "めたん先輩",
    ずんだもん: "ずんだもん先輩",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はう先輩",
    波音リツ: "リツさん",
    玄野武宏: "玄野さん",
    白上虎太郎: "白上くん",
    青山龍星: "青山さん",
    冥鳴ひまり: "ひまり先輩",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "剣崎先生",
    WhiteCUL: "ゆき先輩",
    後鬼: "後鬼さん",
    No7: "ナナ先輩",
    ちび式じい: "ちびじい",
    櫻歌ミコ: "みこみこ先輩",
    小夜_SAYO: "さよ先輩",
    ナースロボ＿タイプＴ: "Tちゃん",
    聖騎士紅桜: "ほーりーさん",
    雀松朱司: "朱司さん",
    麒ヶ島宗麟: "麒ヶ島さん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "うさぎさん",
    栗田まろん: "まろんちゃん",
    藍田ノエル: "あいえるたん",
    満別花丸: "花丸ちゃん",
    Voidoll: "ボイドールさん",
    ぞん子: "ぞん子ちゃん",
    中部つるぎ: "つるぎさん",
  },
  Voidoll: {
    me: ["ワタシ"],
    you: ["～さん", "皆さん"],
    四国めたん: "めたんさん",
    ずんだもん: "ずんだもんさん",
    春日部つむぎ: "つむぎさん",
    雨晴はう: "はうさん",
    波音リツ: "リツさん",
    玄野武宏: "武宏さん",
    白上虎太郎: "虎太郎さん",
    青山龍星: "龍星さん",
    冥鳴ひまり: "ひまりさん",
    九州そら: "そらさん",
    モチノキョウコ: "もち子さん",
    剣崎雌雄: "雌雄さん",
    WhiteCUL: "WhiteCULさん",
    後鬼: "後鬼さん",
    No7: "No.7さん",
    ちび式じい: "ちび式じいさん",
    櫻歌ミコ: "ミコさん",
    小夜_SAYO: "小夜さん",
    ナースロボ＿タイプＴ: "タイプTさん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "朱司さん",
    麒ヶ島宗麟: "宗麟さん",
    春歌ナナ: "ナナさん",
    猫使アル: "アルさん",
    猫使ビィ: "ビィさん",
    中国うさぎ: "うさぎさん",
    栗田まろん: "まろんさん",
    藍田ノエル: "あいえるさん",
    満別花丸: "花丸さん",
    琴詠ニア: "ニアさん",
  },
  ぞん子: {
    me: ["ぞん子"],
    you: ["キミ", "みんな", "あなた"],
    四国めたん: "めたんちゃん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎちゃん",
    雨晴はう: "はうちゃん",
    波音リツ: "りっちゃん",
    玄野武宏: "武宏さん",
    白上虎太郎: "虎太郎さん",
    青山龍星: "龍星さん",
    冥鳴ひまり: "ひまりちゃん",
    九州そら: "そらちゃん",
    モチノキョウコ: "もち子ちゃん",
    剣崎雌雄: "雌雄さん",
    WhiteCUL: "ゆきちゃん",
    後鬼: "後鬼さん",
    No7: "セブンちゃん",
    ちび式じい: "ちび式じい",
    櫻歌ミコ: "ミコちゃん",
    小夜_SAYO: "小夜ちゃん",
    ナースロボ＿タイプＴ: "Tちゃん",
    聖騎士紅桜: "紅桜さん",
    雀松朱司: "朱司さん",
    麒ヶ島宗麟: "宗麟さん",
    春歌ナナ: "ナナちゃん",
    猫使アル: "アルちゃん",
    猫使ビィ: "ビィちゃん",
    中国うさぎ: "うさぎちゃん",
    栗田まろん: "まろんちゃん",
    藍田ノエル: "あいえるちゃん",
    満別花丸: "花丸ちゃん",
    琴詠ニア: "ニアちゃん",
    Voidoll: "ボイドールさん",
    中部つるぎ: "つるぎさん",
  },
  中部つるぎ: {
    me: ["私", "自分"],
    you: ["貴様（ら）", "君"],
    四国めたん: "めたんくん",
    ずんだもん: "ずんだもん",
    春日部つむぎ: "つむぎくん",
    雨晴はう: "はうくん",
    波音リツ: "リツくん",
    玄野武宏: "武宏くん",
    白上虎太郎: "虎太郎くん",
    青山龍星: "龍星くん",
    冥鳴ひまり: "ひまりくん",
    九州そら: "そらくん",
    モチノキョウコ: "もち子くん",
    剣崎雌雄: "雌雄くん",
    WhiteCUL: "ゆきくん",
    後鬼: "後鬼くん",
    No7: "ななくん",
    ちび式じい: "式じいさん",
    櫻歌ミコ: "ミコくん",
    小夜_SAYO: "小夜くん",
    ナースロボ＿タイプＴ: "TTくん",
    聖騎士紅桜: "紅桜くん",
    雀松朱司: "朱司くん",
    麒ヶ島宗麟: "宗麟くん",
    春歌ナナ: "ナナくん",
    猫使アル: "アルくん",
    猫使ビィ: "ビィくん",
    中国うさぎ: "うさぎくん",
    栗田まろん: "まろんくん",
    藍田ノエル: "あいえるくん",
    満別花丸: "花丸くん",
    琴詠ニア: "ニアくん",
    Voidoll: "ボイドールくん",
    ぞん子: "ぞん子くん",
  },
};
