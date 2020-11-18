import Vuex from 'vuex'
// 状態保持のプラグイン
import createPersistedState from "vuex-persistedstate";

export const plugins = [
	createPersistedState(), 
]
