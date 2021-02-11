---
title: 'docker+selenium+chromeでウェブスクレイピングをする part1'
date: 2021-02-11
category: python
tags:
  - python
  - docker
  - ウェブスクレイピング
---

# docker+selenium+chromeでウェブスクレイピングする part1
作業用BGMとして[甘茶の音楽工房](https://amachamusic.chagasi.com/image_kurai.htm)の音楽をダウンロードして聞いていました．いい加減面倒臭くなってきたので，ウェブスクレイピングでダウンロードしていきます．<br>
本稿では，selenium + dockerのセッティングを実施します．ただし，jupyter or pythonはローカルです．

## selenium
本稿では，seleniumでウェブスクレイピングを実施します．以前はrequestsとBeautifulSoupでスクレイピングしていましたが，jsで情報を挿入しているサイトではスクレイピングできないことがありましたので，seleniumを使います．<br>
ちなみに，スクレイピングできなかったサイトは，Fanzaです!!!<br>
DVDのサンプル画像をスクレイピングしようとしていましたwww

## seleniumとは
> Selenium は Web ブラウザの操作を自動化するためのフレームワークです。
2004 年に ThoughtWorks 社によって Web アプリケーションの UI テストを自動化する目的で開発されました。
https://selenium.dev/history/
元々は Web アプsリケーションの UI テストや JavaScript のテストの目的で開発されましたが、テスト以外にもタスクの自動化や Web サイトのクローリングなど様々な用途で利用されています。

## docker+selenium+chrome
本稿では，docker上でseleniumを使います．dockerで使う理由として，chrome driverのversion管理が面倒臭いからです．<br>
有志の方がわかりやすくしてくれているので，がっつりあやかります．
```init
docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:4.0.0-beta-1-prerelease-20201208
```

### docker+selenium+chromeの起動確認
docker+selenium+chromeの起動を確認します．また，ローカル上のchromeを使う際のコードも記載しておきます．

```python
# dockerのselenium
from selenium import webdriver

# Chrome のオプションを設定する
options = webdriver.ChromeOptions()

# Selenium Server に接続する
driver = webdriver.Remote(
    command_executor='http://localhost:4444/wd/hub',
    options=options,
)

# Selenium 経由でブラウザを操作する
url = 'https://amachamusic.chagasi.com/image_ayashii.html'
driver.get(url)
print(driver.current_url)
# 出力:https://amachamusic.chagasi.com/image_ayashii.html
```

```python
# ローカル上のchromeを使う場合．

# coding: UTF-8
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selene.driver import SeleneDriver
from webdriver_manager.utils import chrome_version
from webdriver_manager.chrome import ChromeDriverManager

# versionに応じたchrome driver のインストール
version = chrome_version()
url = 'http://chromedriver.storage.googleapis.com/LATEST_RELEASE_' + version
response = requests.get(url)

options = Options()
options.add_argument('--headless')

# インストールしたchrome driverでchromeを起動
driver = SeleneDriver.wrap(webdriver.Chrome(
    executable_path=ChromeDriverManager().install(), 
    chrome_options=options))

# Selenium 経由でブラウザを操作する
url = 'https://amachamusic.chagasi.com/image_ayashii.html'
driver.get(url)
print(driver.current_url)
# 出力:https://amachamusic.chagasi.com/image_ayashii.html
```

## まとめ
ここまででdocker+selenium+chromeの起動を実施しました．おおよその次の記事でseleniumの操作を検索しながら，必要な工程を実装します．<br>
時間があれば，docker composeまでやってdocker上のjupyterでやりたいです．



## 参考サイト
[10分で理解する Selenium](https://qiita.com/Chanmoro/items/9a3c86bb465c1cce738a)<br>
[Docker上でSeleniumとHeadless ChromeとPython3を動かす](https://qiita.com/sikkim/items/447b72e6ec45849058cd)<br>
[Dockerコンテナからseleniumを使ってスクレイピング](https://qiita.com/kei0919/items/f6f696169c92c936374c)<br>
[Python×SeleniumでWebスクレイピング実践](https://qiita.com/maroKanatani/items/e52984f37cc5474ccd98)<br>