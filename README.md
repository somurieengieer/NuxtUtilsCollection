# NuxtUtilsCollection

> My world-class Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# 拡張機能

vetur: .vue内に記述するHTMLやJavaScriptの補完、シンタックスハイライト。必須
brackets pair colorizer: カッコ毎に色を分けてハイライト。VueやNuxtで(){}のネストを多用してもOK
beautify: 整形。javascriptやJSON, CSS, Sass, HTMLコードを選択し、command palletからBeautifyを実行すると綺麗に整えてくれます。

code runnner: VSCode内から各種対応言語やcommandを実行。デバッグもできる
Vue.peek: 選択したコンポーネントやファイル名について、「Vueファイルのどこで定義されたか」や「定義しているコード」を表示。F12でコンポーネントが開くようになる
duplicate acition: VSCode内で簡単にファイルやディレクトリの複製が可能になる
Vue docs: Vue.jsやVuex, Vue Router, Vue SSR, Vuetify, Nuxt.js, VuePressの公式ドキュメントをVSCode内から直接参照

参考
https://qiita.com/kyohei_ai/items/aeddc6a179ea3a464ed5

# ショートカットキー

## 移動

F12: コンポーネントを開く（Vue.peek）
opt+F12: コンポーネントをツールチップっぽく参照（Vue.peek）
^-: 前に戻る

# システム構成

- Vue
- Nuxt
- Vuetify

# 起動方法

初回起動（Docker, docker-compose.ymlを修正した場合もこちら。--buildを付けないとDockerイメージのキャッシュを使用してしまうため）
$ docker-compose up --build

２回目以降起動
$ docker-compose up

起動後、以下URLで開発中のアプリケーションを動作確認できます。
http://localhost:3000 

# IDE

IDEはVisual Studio Codeを使用する。
Remote Containersプラグインを入れることでDocker内の資源をRemoteできる
Veturプラグインは毎回消えるので入れ直す（入れ直さないとコードに色が付かずに読みづらい）

# Nuxtについて

Nustは以下3つのタイプのシステムを構築できる。

- SPA
- SSR
- 静的サイト

今回は運用費削減のため静的サイトを生成する。
3つのタイプについては実行時のコマンドで切り替えることができる
https://ja.nuxtjs.org/guide/

## SPA

SSRしたくない場合はnuxt --spaを使うことでSPAサイトとして出力できる

## SSR

nuxtコマンドで生成できる。開発時はホットリロードもされる。

## 静的サイトの作成方法

静的サイトはnuxt generateコマンドを使うことでdistディレクトリ配下に生成される。

