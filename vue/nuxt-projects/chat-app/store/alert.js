// どのコンポーネントからでも参照、変更できるグローバル変数のようなもの（状態管理ライブラリ）

export const state = () => ({
  message: null
})

export const getters = {
  message: (state) => state.message
}

export const mutations = {
  // エラ-メッセージのセット
  setMessage(state, { message }) {
    state.message = message
  },

  // セットされたメッセージの削除
  deleteMessage(state) {
    state.message = null
  },
}

export const actions = {
  set(context) {
    context.commit('setMessage', '登録に失敗しました')
  },
}
