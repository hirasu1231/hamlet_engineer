(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{453:function(v,_,a){"use strict";a.r(_);var t=a(1),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"企画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#企画"}},[v._v("#")]),v._v(" 企画")]),v._v(" "),a("p",[v._v("ただ，知っていることをツラツラ書いていくのは僕が面白くないので，テキトーにこれやってみたいなという技術と企画をこのページでメモしています．"),a("br"),v._v("\n心がおれないようにざっくりとした工程とおきうる壁を書いています．")]),v._v(" "),a("h2",{attrs:{id:"_1月1日の郵便局のバイクをカウントする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1月1日の郵便局のバイクをカウントする"}},[v._v("#")]),v._v(" 1月1日の郵便局のバイクをカウントする")]),v._v(" "),a("p",[v._v("1月1日に郵便局から爆走するバイクを眺めるのが好きで，たまに左右に何台走ったかを計測したりします．しかし，たまに面倒になるので遊び半分で自動計測をしてみます．"),a("br"),v._v(" "),a("code",[v._v("物体検出")]),v._v(","),a("code",[v._v("転移学習")]),v._v(","),a("code",[v._v("Yolo")]),v._v(","),a("code",[v._v("SSD")])]),v._v(" "),a("ul",[a("li",[v._v("cocoのデータセットからバイクのみを抽出し，学習データの整理を実施する．")]),v._v(" "),a("li",[v._v("モデルはyolov4とEfficientDetの2つで比較．遊び要素．")]),v._v(" "),a("li",[v._v("転移学習等の小手先も使う．")])]),v._v(" "),a("h3",{attrs:{id:"おきうる壁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#おきうる壁"}},[v._v("#")]),v._v(" おきうる壁")]),v._v(" "),a("ul",[a("li",[v._v("cocoのダウンロードに時間がかかる.\n"),a("ul",[a("li",[v._v("全くコードとは関係ない別作業をする．並行してやると，また心が病む．")])])]),v._v(" "),a("li",[v._v("モデルのモジュールとCUDAの調整．\n"),a("ul",[a("li",[v._v("Colabでやれば，勝手にリセットされるから心置きなくいじる．")])])]),v._v(" "),a("li",[v._v("google colabを使う予定だが，24時間で終了するか．\n"),a("ul",[a("li",[v._v("途中経過を捌けるようにする．")])])]),v._v(" "),a("li",[v._v("lossとmapの算出\n"),a("ul",[a("li",[v._v("githubのissueで同志を見つける．")])])]),v._v(" "),a("li",[v._v("転移学習等の学習手法の変化でモジュールとCUDAの調整．\n"),a("ul",[a("li",[v._v("Colabでやれば，勝手にリセットされるから心置きなくいじる．")])])]),v._v(" "),a("li",[v._v("2時間くらい同じエラーで苦しむww\n"),a("ul",[a("li",[v._v("山で愚痴を吐く")])])])]),v._v(" "),a("h2",{attrs:{id:"初期デザインのキングギドラを再現"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初期デザインのキングギドラを再現"}},[v._v("#")]),v._v(" 初期デザインのキングギドラを再現")]),v._v(" "),a("p",[v._v("アンパンマンよりゴジラを見て育った身としては，金色キングギドラより初期デザインの青色キングギドラを映像で見て楽しみたいです．そこで，CycleGANを使って青色キングギドラを生成したいと思います．"),a("br"),v._v(" "),a("code",[v._v("CycleGAN")]),v._v(","),a("code",[v._v("データ増殖")])]),v._v(" "),a("ul",[a("li",[v._v("キングギドラのデータ収集．")]),v._v(" "),a("li",[v._v("キングギドラのデータの水増し．")]),v._v(" "),a("li",[v._v("CycleGANの学習")])]),v._v(" "),a("h3",{attrs:{id:"おきうる壁-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#おきうる壁-2"}},[v._v("#")]),v._v(" おきうる壁")]),v._v(" "),a("ul",[a("li",[v._v("データ数が少ない．\n"),a("ul",[a("li",[v._v("とにかく，データの水増しをしまくる．")])])]),v._v(" "),a("li",[v._v("学習がうまくいかない．\n"),a("ul",[a("li",[v._v("うまくいかない箇所のデータを自作するのは論外なので，学習手法を変更する．")])])]),v._v(" "),a("li",[v._v("学習がうまくいかない．\n"),a("ul",[a("li",[v._v("数秒動いたシーンで妥協する．")])])]),v._v(" "),a("li",[v._v("2時間くらい同じエラーで苦しむww\n"),a("ul",[a("li",[v._v("山で愚痴を吐く")])])])]),v._v(" "),a("h2",{attrs:{id:"demからの3dマップの作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demからの3dマップの作成"}},[v._v("#")]),v._v(" DEMからの3Dマップの作成")]),v._v(" "),a("p",[v._v("google map 3Dを作りたいなあ，ただそれだけ．"),a("br"),v._v(" "),a("code",[v._v("GIS")])]),v._v(" "),a("h2",{attrs:{id:"骨格推定からmmdを作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#骨格推定からmmdを作成"}},[v._v("#")]),v._v(" 骨格推定からMMDを作成")]),v._v(" "),a("p",[v._v("実際の人間の動きを骨格推定を実施し，そのデータをMMDのCGに反映させる．\n"),a("code",[v._v("Openpose")])]),v._v(" "),a("h2",{attrs:{id:"声優さんの声を学習して-好きなセリフを喋らせる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声優さんの声を学習して-好きなセリフを喋らせる"}},[v._v("#")]),v._v(" 声優さんの声を学習して，好きなセリフを喋らせる")]),v._v(" "),a("p",[v._v("進撃の巨人のエルヴィンに下記の台詞を言わしたいので，音声関係の機械学習の勉強がてら実施する．下記の台詞はyoutubeのコメントにあった物です．"),a("br"),v._v(" "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=H13ID0ymOis",target:"_blank",rel:"noopener noreferrer"}},[v._v("【進撃の巨人】エルヴィン『兵士よ怒れ！兵士よ叫べ！！兵士よ戦え！！！』"),a("OutboundLink")],1)]),v._v(" "),a("div",{staticClass:"language-init extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("全くもって無意味だ．どんなに夢や希望を持っていても\n幸福な人生を送ることができたとしても\n毎月150時間以上の残業で過労死しても同じだ．人はいずれ死ぬ．\nならば人生に意味はないのか．そもそも生まれてきた事に意味はなかったのか．\n退職していった仲間もそうなのか？\nあの社員達も、無意味だったのか？\n\nいや違う！！！あの社員，いや！兵士達に意味を与えるのは我々だ！！！\nあの勇敢な殉職者を！！哀れな退職者を！！想う事が出来るのは！！現職である我々だ！！\n我々はここで過労死するまで働き，次の社員に意味を託す！！！それこそ唯一！！！\nこの残酷な社会に抗う術なのだ！！！！！\n兵士よ怒れぇ！！！\n兵士よ叫べぇ！！！！\n兵士よ働けぇぇえええ！！！！！\n")])])]),a("h2",{attrs:{id:"deepfaceをただ回すだけ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deepfaceをただ回すだけ"}},[v._v("#")]),v._v(" DeepFaceをただ回すだけ")]),v._v(" "),a("p",[v._v("ニュースで騒いでいたので，テキトーに回したい．")]),v._v(" "),a("h2",{attrs:{id:"リアルタイムで自分の声をゆっくりボイスに変換"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#リアルタイムで自分の声をゆっくりボイスに変換"}},[v._v("#")]),v._v(" リアルタイムで自分の声をゆっくりボイスに変換")]),v._v(" "),a("p",[v._v("pix2pixでやった先人がいたので，違うモデルでやってみたい．")])])}),[],!1,null,null,null);_.default=e.exports}}]);