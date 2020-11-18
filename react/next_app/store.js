import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
var config = {
	apiKey: "AIzaSyD_UmMwe6ZQxWRaFLEOwypAbO0H64J62XU",
	authDomain: "react-1203-c5cd1.firebaseapp.com",
	databaseURL: "https://react-1203-c5cd1.firebaseio.com",
	projectId: "react-1203-c5cd1",
	storageBucket: "react-1203-c5cd1.appspot.com",
	messagingSenderId: "722657462862",
	appId: "1:722657462862:web:0cd1e68b7fa7617528911f",
	measurementId: "G-50V88BMKMP"
};

var fireapp;
try {
	firebase.initializeApp(config);
} catch (error) {
	console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = initial, action) {
	switch (action.type) {
		// ダミー
		case 'TESTACTION':
			return state;
		// デフォルト
		default:
			return state;
	}
}

// initStore関数
export function initStore(state = initial) {
	return createStore(fireReducer, state,
	applyMiddleware(thunkMiddleware))
}



// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// // ステート初期値
// const initial = {
// 	message: 'START',
// 	data: [],
// 	number: [],
// 	result:0
// }

// // レデューサー
// function calcReducer(state = initial, action) {
// 	switch (action.type) {
// 		// 計算実行
// 		case 'ENTER':
// 			let data2 = state.data.slice();
// 			let s = action.value;
// 			data2.unshift(s);
// 			let num = s.replace(/[^0-9]/g, "");
// 			let number2 = state.number.slice();
// 			number2.unshift(num);
// 			let result = (state.result * 1) + (num * 1);
// 			return {
// 				message: 'ENTER',
// 				data: data2,
// 				number: number2,
// 				result: result
// 			};
// 		// リセット
// 		case 'RESET':
// 			return {
// 				message: 'RESET',
// 				data: [],
// 				number: [],
// 				result: 0
// 			};
// 		// デフォルト
// 		default:
// 			return state;
// 	}
// }

// // initStore関数
// export function initStore(state = initial) {
// 	return createStore(calcReducer, state,
// 	applyMiddleware(thunkMiddleware))
// }



// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';

// // ステート初期値
// const initial = {
// 	message: 'START',
// 	count:0
// }

// // レデューサー
// function counterReducer(state = initial, action) {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return {
// 				message: 'INCREMENT',
// 				count: state.count + 1
// 			};
// 		case 'DECREMENT':
// 			return {
// 				message: 'DECREMENT',
// 				count: state.count - 1
// 			};
// 		case 'RESET':
// 			return {
// 				message: 'RESET',
// 				count: initial.count
// 			};
// 		default:
// 			return state;
// 	}
// }

// // initStore関数(redux-store.jsで必要)
// export function initStore(state = initial) {
// 	return createStore(counterReducer, state,
// 	applyMiddleware(thunkMiddleware))
// }
