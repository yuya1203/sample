import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 表示をレンダリング
ReactDOM.render(
  <App /> ,
  document.getElementById('root')
);



// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// // import MemoStore from './memo/Store'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { persistGate } from 'redux-persist/integration/react'
// import MemoStore, { memoReducer } from './memo/Store'

// // Redux Persistの設定
// const persistConfig = {
//   key: 'memo',
//   storage: storage,
//   blacklist: ['message', 'mode', 'fdata'],
//   whitelist:['data']
// };

// // パーシスとレデューサーの作成
// const persistedReducer = persistReducer(persistConfig, memoReducer);

// // ストア、パーシスターの作成
// let store = createStore(persistedReducer);
// let pstore = persistStore(store);

// // 表示をレンダリング
// ReactDOM.render(
//   <Provider store={store}>
//     <persistGate loading={<p>loading...</p>}
//       persistor={pstore}>
//       <App />
//     </persistGate>
//   </Provider>,
//   document.getElementById('root')
// );

// export default pstore;

// // ステートの値
// let state_value = {
//   counter: 0,
//   message:"COUNTER"
// }

// // レデューサー
// function counter(state = state_value, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         counter: state.counter + 1,
//         message: "INCREMENT"
//       };
//     case 'DECREMENT':
//       return {
//         counter: state.counter - 1,
//         message: "DECREMENT"
//       };
//     case 'RESET':
//       return {
//         counter: 0,
//         message: "RESET"
//       };
//     default:
//       return state;
//   }
// }

// // Redux Persistの設定
// const persistConfig = {
//   key: 'root',
//   storage,
// }

// // パーシストレデューサーの作成
// const persistedReducer = persistReducer(persistConfig, counter)

// // ストア、パーシスターの作成
// let store = createStore(persistedReducer)
// let pstore = persistStore(store)

// // 表示をレンダリング
// ReactDOM.render(
//   <Provider store={store}>
//     {/* <PersistGate loading={<p>loading...</p>}
//       persistor={pstore}> */}
//       <App />
//     {/* </PersistGate> */}
//   </Provider>,
//   document.getElementById('root')
// );






// // 表示をレンダリング
// ReactDOM.render(
//   <Provider store={MemoStore}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );





// // ステートの値
// let state_value = {
//   counter: 0,
//   message:"COUNTER"
// }

// // レデューサー
// function counter(state = state_value, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         counter: state.counter + 1,
//         message: "INCREMENT"
//       };
//     case 'DECREMENT':
//       return {
//         counter: state.counter - 1,
//         message: "DECREMENT"
//       };
//     default:
//       return state;
//   }
// }

// // ストアを作成
// let store = createStore(counter);

// // 表示レンダリング
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );




// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
