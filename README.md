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
.


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

