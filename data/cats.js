const catsData = [
  {
    "name": "テラ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：2021年生まれ、甘えん坊でお尻のトントンが好き",
    "image": "images/cats/tera.jpg"
  },
  {
    "name": "つゆ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "里親募集中",
    "tags": [
      "さび"
    ],
    "description": "リビング組：2023年4月生まれ、ビビりですが猫が好きなので仲良しの子と一緒か優しい先住猫さん希望",
    "image": "images/cats/tsuyu.jpg"
  },
  {
    "name": "おねえちゃん",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "里親募集中",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/onechan.jpg"
  },
  {
    "name": "たんじろう",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "黒猫"
    ],
    "description": "リビング組：2022年生まれ、かまってちゃんのお喋り、べたべたの甘えん坊、先住猫さんのいるところ希望",
    "image": "images/cats/tanjirou.jpg"
  },
  {
    "name": "さくら",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：ちゅーる大好き、激しくないなでなでなら大丈夫、ねこは好き気が強い",
    "image": "images/cats/sakura.jpg"
  },
  {
    "name": "ぎん",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "里親募集中",
    "tags": [
      "ハチワレ"
    ],
    "description": "リビング組：2024年生まれ、目がまん丸でイケメン、ビビりなのでギンのペースに合わせていただける方希望",
    "image": "images/cats/gin.jpg"
  },
  {
    "name": "ミッフィ",
    "gender": "女の子",
    "age": "シニア猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "里親募集中",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：2017年生まれ",
    "image": "images/cats/miffy.jpg"
  },
  {
    "name": "ぼう",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "里親募集中",
    "tags": [
      "ハチワレ"
    ],
    "description": "リビング組：2024年生まれ、かなりビビり、ぼうのペースに合わせてくださる方希望",
    "image": "images/cats/bou.jpg"
  },
  {
    "name": "せん",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "さび"
    ],
    "description": "リビング組：2024年6月生まれ、つゆの子供、先天的に右目がない、生活に支障はないが他の兄弟に比べて小柄の為体が弱い可能性があり",
    "image": "images/cats/sen.jpg"
  },
  {
    "name": "すみ",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "黒猫"
    ],
    "description": "リビング組：2024年6月生まれ、甘えん坊、自由な不思議君、気分屋、現在預かりさん先",
    "image": "images/cats/sumi.jpg"
  },
  {
    "name": "ぜん",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：2025年5月生まれ、ご飯大好きむっちりボディ兄弟（しん）と2匹一緒に",
    "image": "images/cats/zen.jpg"
  },
  {
    "name": "しん",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "里親募集中",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：2025年5月生まれ、時々脱肛する可能性あり、生活に支障はなし、ご飯大好き、甘えん坊、兄弟（ぜん）と一緒に",
    "image": "images/cats/shin.jpg"
  },
  {
    "name": "たくや",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "キジトラ"
    ],
    "description": "2階組：気が弱いから優しい子なら一緒に大丈夫",
    "image": "images/cats/takuya.jpg"
  },
  {
    "name": "ミント",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "ハチワレ"
    ],
    "description": "リビング組：人が近くにいても平気ですが、手は少し苦手、ビビりなのでミントのペースに合わせて気長に待っていただける方希望",
    "image": "images/cats/mint.jpg"
  },
  {
    "name": "ジュネ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：2022年生まれ、猫は好き、ジュネのペースに合わせて気長に待っていただける方希望",
    "image": "images/cats/june.jpg"
  },
  {
    "name": "ひんやり",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：ひんやりのペースに合わせて気長に待っていただける方希望",
    "image": "images/cats/hinyari.jpg"
  },
  {
    "name": "あん",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：人慣れは十分大丈夫ですが、新しい場所でご飯を飲まず食わずの経験ありの為様子を見ながらでも大丈夫な方希望",
    "image": "images/cats/ann.jpg"
  },
  {
    "name": "トロ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：2019年生まれ、人慣れはまだまだ練習中ですが、トロのペースに合わせて気長に待っていただける方希望",
    "image": "images/cats/toro.jpg"
  },
  {
    "name": "ピーチ",
    "gender": "女の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "黒猫"
    ],
    "description": "保護部屋：おてんば娘、元気いっぱいでご飯大好き、姉妹または3匹一緒希望、うっすら白血病陽性の為、要相談",
    "image": "images/cats/peach.jpg"
  },
  {
    "name": "グレープ",
    "gender": "男の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "黒猫"
    ],
    "description": "保護部屋：甘えん坊で抱っこ大好き、うっすら白血病陽性の為、要相談",
    "image": "images/cats/grape.jpg"
  },
  {
    "name": "チェリー",
    "gender": "女の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "挑戦者待ち",
    "tags": [
      "黒猫"
    ],
    "description": "保護部屋：少しビビりだけど姉妹仲良し元気いっぱい、姉妹または3匹一緒希望、うっすら白血病陽性の為、要相談",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "ウルル",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "さび"
    ],
    "description": "リビング組：2021年生まれ、トライアル中",
    "image": "images/cats/ururu.jpg"
  },
  {
    "name": "あーしゃ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "ハチワレ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/asha.jpg"
  },
  {
    "name": "みかん",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "さび"
    ],
    "description": "リビング組：2024年6月生まれ、つゆの子供、ちゅーる大好き、少し気が強い、トライアル中",
    "image": "images/cats/mikan.jpg"
  },
  {
    "name": "グリ",
    "gender": "女の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/guri.jpg"
  },
  {
    "name": "ズリ",
    "gender": "男の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/zuri.jpg"
  },
  {
    "name": "わぐまー　ひぐまー",
    "gender": "男の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "黒猫"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/waguhiguma.jpg"
  },
  {
    "name": "スモ",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "さび"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/sumo.jpg"
  },
  {
    "name": "ふき",
    "gender": "男の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/fuki.jpg"
  },
  {
    "name": "うさ",
    "gender": "男の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "譲渡済み",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/usa.jpg"
  },
  {
    "name": "アクア",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "白猫"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/aqua.jpg"
  },
  {
    "name": "かな",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "現在募集なし",
    "tags": [
      "キジトラ"
    ],
    "description": "2階組：5歳以上",
    "image": "images/cats/kana.jpg"
  },
  {
    "name": "サビッチ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "さび"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/sabicchi.jpg"
  },
  {
    "name": "くろっぴー",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "黒猫"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/kuroppi.jpg"
  },
  {
    "name": "ぽんた",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "キジトラ"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/ponta.jpg"
  },
  {
    "name": "シェル",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "さび"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/shell.jpg"
  },
  {
    "name": "ウィン（右）",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "茶トラ"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/win.jpg"
  },
  {
    "name": "かもめ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "現在募集なし",
    "tags": [
      "白猫"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/kamome.jpg"
  },
  {
    "name": "ソック",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "現在募集なし",
    "tags": [
      "キジトラ"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/sokku.jpg"
  },
  {
    "name": "みー",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：なでなで大好き、甘えん坊、食いしん坊が、腎臓病のため現在募集なし",
    "image": "images/cats/mii.jpg"
  },
  {
    "name": "ななこ",
    "gender": "女の子",
    "age": "シニア猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/nanako.jpg"
  },
  {
    "name": "さびーにゃ",
    "gender": "女の子",
    "age": "シニア猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "さび"
    ],
    "description": "リビング組：ねこのようちえん最高齢、さぶろう大好き、猫好き、人慣れ微妙",
    "image": "images/cats/sabinya.jpg"
  },
  {
    "name": "さぶろう",
    "gender": "男の子",
    "age": "シニア猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [
      "茶トラ"
    ],
    "description": "リビング組：猫も人も大好き甘えん坊、さびーにゃとラブラブ、人の食べてるものに興味あり",
    "image": "images/cats/saburou.jpg"
  },
  {
    "name": "ギザ",
    "gender": "女の子",
    "age": "シニア猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/giza.jpg"
  },
  {
    "name": "はる",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：病気のリスクあるため、現在募集なし",
    "image": "images/cats/haru.jpg"
  },
  {
    "name": "ナラ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [
      "キジトラ"
    ],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/nara.jpg"
  },
  {
    "name": "チャッピー",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [
      "茶トラ"
    ],
    "description": "リビング組：病気のリスクあるため、現在募集なし",
    "image": "images/cats/chappi.jpg"
  },
  {
    "name": "まあちゃん",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "現在募集なし",
    "tags": [
      "三毛"
    ],
    "description": "リビング組：体調不良のため現在募集なし",
    "image": "images/cats/machan.jpg"
  },
  {
    "name": "キャンディ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "ポンポン",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "くぼたん",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "リビング組：ビビりちゃん",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "ドリー",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "リビング組：口内炎のため、現在募集なし",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "フルール",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "リビング組：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "つるきち",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [
      "白猫"
    ],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/tsurukichi.jpg"
  },
  {
    "name": "なつめ",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "はな",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "レオン",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/reon.jpg"
  },
  {
    "name": "いちご",
    "gender": "女の子",
    "age": "子猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "現在募集なし",
    "tags": [],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "ひまわり",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "シャシャ猫"
    ],
    "badge": "お空に",
    "tags": [
      "茶トラ"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/himawari.jpg"
  },
  {
    "name": "やまぴー",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "お空に",
    "tags": [
      "茶トラ"
    ],
    "description": "2階組：詳細追加待ち",
    "image": "images/cats/yamapi.jpg"
  },
  {
    "name": "まな",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "繊細ちゃん"
    ],
    "badge": "お空に",
    "tags": [
      "キジトラ"
    ],
    "description": "2階組：5歳以上",
    "image": "images/cats/mana.jpg"
  },
  {
    "name": "恵多くん",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "お空に",
    "tags": [
      "キジトラ"
    ],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/eta.jpg"
  },
  {
    "name": "りの",
    "gender": "女の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "お空に",
    "tags": [],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  },
  {
    "name": "くさま",
    "gender": "男の子",
    "age": "成猫",
    "personality": [
      "甘え坊"
    ],
    "badge": "お空に",
    "tags": [],
    "description": "保護部屋：詳細追加待ち",
    "image": "images/cats/nan.jpg"
  }
];
