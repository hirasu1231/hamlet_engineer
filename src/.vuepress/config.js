// .vuepress/config.js

module.exports = {
    // GitHub Pagesにホスティング
    base: '/hamlet_engineer/',
    dest: 'docs',
    // サイトのタイトル
    title: 'ハムレット型エンジニアのカンニングノート',

    // サイトの説明
    description: 'ハムレット型：決断を下して行動に移るよりは、 むしろ懐疑や苦悩にこもってしまう思索的な性格．そんな元エンジニアの雑記帳です．個人的な趣味全開の実用性皆無なプログラミングを綴っています．',

    // 言語設定
    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },

    // 言語設定
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Parisienne&display=swap'}],
      ],

    // テーマを指定
    theme: 'meteorlxy',

    // Theme config
    themeConfig: {
        // ボタンなどを日本語に変更
        lang: {
            home: 'ホーム',
            posts: '記事検索',
            category: 'カテゴリー',
            categories: 'カテゴリー',
            allCategories: '全て',
            tag: 'タグ',
            tags: 'タグ',
            search: '検索',
            createdAt: '作成日',
            updatedAt: '更新日',
            prevPost: '前の記事へ',
            nextPost: '次の記事へ',
            toc: '目次',
        },

        // ブログ作成者の情報
        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            // ニックネーム
            nickname: 'hirasu1231',

            // 自己紹介(HYML対応)
            description: 'ハムレット型：決断を下して行動に移るよりは、 むしろ懐疑や苦悩にこもってしまう思索的な性格．そんな精神療養中の元エンジニアです.',

            // 拠点地
            location: 'Fukuoka, Japan',

            // アバターの画像
            // Set to external link
            avatar: '/img/hirasu.jpg',
            // `.vuepress/public/img/avatar.jpg`に置く
            // avatar: '/img/avatar.jpg'と記載する

            // SNS　アカウント情報
            sns: {

                // Twitterのアカウントとリンク
                twitter: {
                    account: 'hirasu1231',
                    link: 'https://twitter.com/hirasu1231',
                },

                // Githubのアカウントとリンク
                github: {
                    account: 'hirasu1231',
                    link: 'https://github.com/hirasu1231',

                // Facebookのアカウントとリンク
                // facebook: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.facebook.com/meteorlxy.cn',
                // },

                // Instagramのアカウントとリンク
                // instagram: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.instagram.com/meteorlxy.cn',
                // },

                // Docker Hub account and link
                // docker: {
                //     account: 'meteorlxy',
                //     link: 'https://hub.docker.com/u/meteorlxy',
                //     },

                },
            },
        },

        // Header Config (Optional)
        header: {
            // ヘッダーの背景画像
            background: {
                // urlを指定すると画像が、指定しないとランダムパターンが表示される
                //url: '/assets/img/bg.jpg',

                // ランダムパターンを使用するか？
                useGeo: true,
            },

            // 記事のタイトルをヘッダーに表示するか？
            showTitle: true,
        },

        // Footer Config (Optional)
        footer: {
            // Show 'Powered by VuePress' or not (enable it to support VuePress)
            poweredBy: true,

            // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
            poweredByTheme: true,

            // フッター表示 HTML 可
            custom: 'Copyright 2021 hirasu1231',
        },

        // Info Card Config (Optional)
        infoCard: {
            // ヘッダーの背景画像
            headerBackground: {
                // urlを指定すると画像が、指定しないとランダムパターンが表示される
                //url: '/assets/img/bg.jpg',

                // ランダムパターンを使用するか？
                useGeo: true,
            },
        },

        // Show the last updated time of your posts
        lastUpdated: true,

        // ナビバーに表示する項目
        nav: [
            { text: 'ホーム', link: '/', exact: true },
            { text: '記事検索', link: '/posts/', exact: false },
        ],

        // Enable smooth scrolling or not
        smoothScroll: true,

        // ズームプラグイン vuepress-plugin-zooming を使うかどうかの設定
        zooming: {
            // @see https://vuepress.github.io/en/plugins/zooming
        },

        // 何ページづつ表示するか
        pagination: {
            perPage: 10,
        },

        // Default Pages (Optional, the default value of all pages is `true`)
        defaultPages: {
            // Allow theme to add Home page (url: /)
            home: true,
            // Allow theme to add Posts page (url: /posts/)
            posts: true,

        },
    },
}