(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{451:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-selenium-chromeでウェブスクレイピングする-part1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-selenium-chromeでウェブスクレイピングする-part1"}},[t._v("#")]),t._v(" docker+selenium+chromeでウェブスクレイピングする part1")]),t._v(" "),a("p",[t._v("作業用BGMとして"),a("a",{attrs:{href:"https://amachamusic.chagasi.com/image_kurai.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("甘茶の音楽工房"),a("OutboundLink")],1),t._v("の音楽をダウンロードして聞いていました．いい加減面倒臭くなってきたので，ウェブスクレイピングでダウンロードしていきます．"),a("br"),t._v("\n本稿では，selenium + dockerのセッティングを実施します．")]),t._v(" "),a("h2",{attrs:{id:"selenium"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selenium"}},[t._v("#")]),t._v(" selenium")]),t._v(" "),a("p",[t._v("本稿では，seleniumでウェブスクレイピングを実施します．以前はrequestsとBeautifulSoupでスクレイピングしていましたが，jsで情報を挿入しているサイトではスクレイピングできないことがありましたので，seleniumを使います．"),a("br"),t._v("\nちなみに，スクレイピングできなかったサイトは，Fanzaです!!!"),a("br"),t._v("\nDVDのサンプル画像をスクレイピングしようとしていましたwww")]),t._v(" "),a("h2",{attrs:{id:"seleniumとは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seleniumとは"}},[t._v("#")]),t._v(" seleniumとは")]),t._v(" "),a("blockquote",[a("p",[t._v("Selenium は Web ブラウザの操作を自動化するためのフレームワークです。\n2004 年に ThoughtWorks 社によって Web アプリケーションの UI テストを自動化する目的で開発されました。\nhttps://selenium.dev/history/\n元々は Web アプsリケーションの UI テストや JavaScript のテストの目的で開発されましたが、テスト以外にもタスクの自動化や Web サイトのクローリングなど様々な用途で利用されています。")])]),t._v(" "),a("h2",{attrs:{id:"docker-selenium-chrome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-selenium-chrome"}},[t._v("#")]),t._v(" docker+selenium+chrome")]),t._v(" "),a("p",[t._v("本稿では，docker上でseleniumを使います．dockerで使う理由として，chrome driverのversion管理が面倒臭いからです．"),a("br"),t._v("\n有志の方がdocker composeも作ってくださっているので，がっつりあやかります．")]),t._v(" "),a("div",{staticClass:"language-init extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git clone https://github.com/sikkimtemi/selenium\n$ cd selenium\n$ docker-compose up -d\n")])])]),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-compose.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selenium-hub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" selenium/hub\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'selenium-hub'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 4444"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4444")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" selenium/node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("debug\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chrome'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 5900"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5900")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /dev/shm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/dev/shm\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#firefox:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  image: selenium/node-firefox-debug")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  container_name: 'firefox'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  ports:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   - 5910:5900")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  links:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    - selenium-hub:hub")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("python")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./python-selenium'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'python'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tail -f /dev/null'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("working_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/root/script/'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./script/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/root/script/\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TZ=Asia/Tokyo'")]),t._v("\n")])])]),a("h3",{attrs:{id:"docker-selenium-chromeの起動確認"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-selenium-chromeの起動確認"}},[t._v("#")]),t._v(" docker+selenium+chromeの起動確認")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# coding: UTF-8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webdriver\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Options\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("driver "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SeleneDriver\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" webdriver_manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" chrome_version\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" webdriver_manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chrome "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ChromeDriverManager\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# versionに応じたchrome driver のインストール")]),t._v("\nversion "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chrome_version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://chromedriver.storage.googleapis.com/LATEST_RELEASE_'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" version\nresponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\noptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--headless'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# インストールしたchrome driverでchromeを起動")]),t._v("\ndriver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SeleneDriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webdriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    executable_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ChromeDriverManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    chrome_options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Selenium 経由でブラウザを操作する")]),t._v("\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://amachamusic.chagasi.com/image_ayashii.html'")]),t._v("\ndriver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 出力:https://amachamusic.chagasi.com/image_ayashii.html")]),t._v("\n")])])]),a("h2",{attrs:{id:"まとめ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#まとめ"}},[t._v("#")]),t._v(" まとめ")]),t._v(" "),a("p",[t._v("ここまででdocker+selenium+chromeの起動を実施しました．おおよその次の記事でseleniumの操作を検索しながら，必要な工程を実装します．")]),t._v(" "),a("h2",{attrs:{id:"参考サイト"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考サイト"}},[t._v("#")]),t._v(" 参考サイト")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://qiita.com/Chanmoro/items/9a3c86bb465c1cce738a",target:"_blank",rel:"noopener noreferrer"}},[t._v("10分で理解する Selenium"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://qiita.com/sikkim/items/447b72e6ec45849058cd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker上でSeleniumとHeadless ChromeとPython3を動かす"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://qiita.com/kei0919/items/f6f696169c92c936374c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dockerコンテナからseleniumを使ってスクレイピング"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://qiita.com/maroKanatani/items/e52984f37cc5474ccd98",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python×SeleniumでWebスクレイピング実践"),a("OutboundLink")],1),a("br")])])}),[],!1,null,null,null);s.default=n.exports}}]);