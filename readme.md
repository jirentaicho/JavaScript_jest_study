# JavaScriptの勉強用

JavaScriptとJestの勉強用

初期化する

> npm init

jestをインストールする

> npm i jest

テストの実行方法（全テスト）

> npm run test

ディレクトリを指定する

> npm run test ./Collection


# ES6に対応する

参考:https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export


> npm install --save-dev @babel/plugin-transform-modules-commonjs

.babelrcの作成


'''
{
    "env": {
      "test": {
        "plugins": ["@babel/plugin-transform-modules-commonjs"]
      }
    }
  }
'''

# axiosのinstall

> npm i axios



