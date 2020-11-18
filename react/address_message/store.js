import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebase設定
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

// Firebase初期化
var fireapp;
try {
	fireapp = firebase.initializeApp(config);
} catch (error) {
	console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
	login: false,
	username: '(click here!',
	email: '',
	data: [],
	items:[]
}

// レデューサー
function fireReducer(state = initial, action) {
	switch (action.type) {
		// ダミー
		case 'UPDATE_USER':
			return action.value;
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
