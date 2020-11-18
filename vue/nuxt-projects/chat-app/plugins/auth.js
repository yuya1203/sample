// どこからでも呼び出せるようにVueインスタンスのcontextに注入している
export default ({ app }, inject) => {
  inject('auth', () => {
    return new Promise((resolve) => {
      // plugins/firebase.jsのfireAuth
      // ->プラグインに記述しているため、this.$名前では呼び出せない(app.$fireAuth)
      // onAtuthStateChangedはcallBack関数
      app.$fireAuth.onAuthStateChanged((auth) => {
        resolve(auth || null)
      })
    })
  })
}
