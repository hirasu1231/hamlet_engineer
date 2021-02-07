(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{434:function(t,s,a){t.exports=a.p+"assets/img/caustom_pages.d474f2af.png"},450:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepressのフォントの設定とページメニューの追加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepressのフォントの設定とページメニューの追加"}},[t._v("#")]),t._v(" vuepressのフォントの設定とページメニューの追加")]),t._v(" "),e("p",[t._v("デフォルトのフォントが中国語用の簡体字ベースなので，一般的に使われているフォントに変更します．そして，やりたいことをまとめるページを作りたかったので，ページメニューを追加します．")]),t._v(" "),e("h2",{attrs:{id:"ファイル構成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファイル構成"}},[t._v("#")]),t._v(" ファイル構成")]),t._v(" "),e("p",[t._v("ファイル構成は以下通りです．")]),t._v(" "),e("div",{staticClass:"language-init extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hamlet_engineer\n├── src\n│   ├── _posts\n│   │   └── 20190803.md\n│   │   └── 20210118.md\n│   ├── custom-pages <-新規\n│   │   └── index.md <-新規\n│   └── .vuepress\n│       ├── public\n│       │    └── img\n│       │          └── hirasu.jpg\n│       ├── components <-新規\n│       │    └── CustomLayout.vue <-新規\n│       └── config.js\n├── package.json\n├── yarn.lock\n├── /.git\n└── docs\n    ├── /assets\n    ├── /img\n    ├── /posts\n    ├── 404.html\n    └── index.html\n")])])]),e("h2",{attrs:{id:"ページメニューの追加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ページメニューの追加"}},[t._v("#")]),t._v(" ページメニューの追加")]),t._v(" "),e("p",[t._v("雑記という名前でこれからやりたいことをまとめるページを追加します．\n.vuepress/components/CustomLayout.vueを新しく作成し，config.jsを編集します．")]),t._v(" "),e("div",{staticClass:"language-init extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mkdir .vuepress/components/\ntouch .vuepress/components/CustomLayout.vue\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("CustomLayout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom-layout"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("div is the block "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" white background "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main-div"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      This is a custom layout\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main-div"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Content "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" is to show the rendered markdown content "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" page "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Content "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CustomLayout'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  themeConfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ナビバーに表示する項目")]),t._v("\n        nav"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ホーム'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'記事検索'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'雑記'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/custom-pages/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("次に表示するページ内容を記入します．ここでは，vuepress-theme-meteorlxyのCustom Pagesの内容を記載します．")]),t._v(" "),e("div",{staticClass:"language-init extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# custom-pages/index.md\n\n---\n# Set the layout of this page\nlayout: CustomLayout\n# Set the title of this page\ntitle: Welcome to my custom page\n# Show the aside info card or not (we hide it on this page)\naside: false\n---\n\nContents here will be rendered in the `<Content />` component.\n")])])]),e("p",[t._v("以下のような画像がでれば追加完了です．\n"),e("img",{attrs:{src:a(434),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"vuepressのフォントの設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepressのフォントの設定"}},[t._v("#")]),t._v(" vuepressのフォントの設定")]),t._v(" "),e("p",[t._v(".vuepress/styles/index.stylを生成して，簡体字フォントから日本語に適したフォントに変更します．"),e("br")]),t._v(" "),e("div",{staticClass:"language-init extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mkdir .vuepress/styles/\ntouch .vuepress/styles/index.styl\n")])])]),e("div",{staticClass:"language-init extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('body\n  font-family "Helvetica"\n')])])]),e("h2",{attrs:{id:"参考サイト"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考サイト"}},[t._v("#")]),t._v(" 参考サイト")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/custom-pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePressのカスタムページ"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://meuniere.dev/posts/2020/08/06/create-vuepress.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress + Netlifyでブログ作成"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);