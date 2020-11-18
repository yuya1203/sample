import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import config from './../firebaseConfig.json'

// firebaseにfirebaseConfig.jsonの設定値をセット
if (!firebase.apps.length) {
  firebase.initializeApp({ ...config })
}

// VueインスタンスのContextに注入している=vueファイルで毎回インポートしなくてもfirebaseの機能が使用できるようになる
// this.$名前でコンポーネントから呼び出せる
export default ({ app }, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('fireAuth', firebase.auth())
  inject('fireStorage', firebase.storage())
}

// pluginはnuxtでvueアプリケーションがインスタンス化される前に実行される
// →外部のライブラリなどを最初に読み込んでおきたい場合にpluginを使用する
