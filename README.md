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

vetur: .vue 内に記述する HTML や JavaScript の補完、シンタックスハイライト。必須
brackets pair colorizer: カッコ毎に色を分けてハイライト。Vue や Nuxt で(){}のネストを多用しても OK
beautify: 整形。javascript や JSON, CSS, Sass, HTML コードを選択し、command pallet から Beautify を実行すると綺麗に整えてくれます。

code runnner: VSCode 内から各種対応言語や command を実行。デバッグもできる
Vue.peek: 選択したコンポーネントやファイル名について、「Vue ファイルのどこで定義されたか」や「定義しているコード」を表示。F12 でコンポーネントが開くようになる
duplicate acition: VSCode 内で簡単にファイルやディレクトリの複製が可能になる
Vue docs: Vue.js や Vuex, Vue Router, Vue SSR, Vuetify, Nuxt.js, VuePress の公式ドキュメントを VSCode 内から直接参照

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

初回起動（Docker, docker-compose.yml を修正した場合もこちら。--build を付けないと Docker イメージのキャッシュを使用してしまうため）
\$ docker-compose up --build

２回目以降起動
\$ docker-compose up

起動後、以下 URL で開発中のアプリケーションを動作確認できます。
http://localhost:3000

# IDE

IDE は Visual Studio Code を使用する。
Remote Containers プラグインを入れることで Docker 内の資源を Remote できる
(左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば OK)

## プラグイン

- Vetur プラグインは毎回消えるので入れ直す（入れ直さないとコードに色が付かずに読みづらい）
- Prettier プラグインも同様。自動フォーマット用で必須。特に設定しないでも入れれば.js .vue に適用される
- Vue.peek: F12 でコンポーネントが開くようになる

# Nuxt について

Nust は以下 3 つのタイプのシステムを構築できる。

- SPA
- SSR
- 静的サイト

今回は運用費削減のため静的サイトを生成する。
3 つのタイプについては実行時のコマンドで切り替えることができる
https://ja.nuxtjs.org/guide/

## SPA

SSR したくない場合は nuxt --spa を使うことで SPA サイトとして出力できる

## SSR

nuxt コマンドで生成できる。開発時はホットリロードもされる。

## 静的サイトの作成方法

静的サイトは nuxt generate コマンドを使うことで dist ディレクトリ配下に生成される。
