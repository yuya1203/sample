// middleware ページが表示される前の処理を行う場所
// redirectでredirectさせることができるcontext
// appでpluginsを含むVueインスタンス全体を扱えるcontext
export default async function ({ redirect, app }) {
  if (await app.$auth()) {
    // ログイン中だったらTOPページに遷移する
    redirect('/')
  }
}
