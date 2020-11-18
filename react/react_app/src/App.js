import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/Sampledata';
import firebase from "firebase";

// Firebaseの設定
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

// Firebaseの初期化
firebase.initializeApp(config);

// Appコンポーネント
class App extends Component {

  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

// export default App;



// import React, { Component } from 'react';
// import Rect from './Rect';
// import './App.css';
// import { render } from 'react-dom';
// import { connect } from 'react-redux';
// import Memo from './memo/Memo';
// import AddForm from './memo/AddForm';
// import FindForm from './memo/FindForm';
// import DelForm from './memo/DelForm';
// import PersistForm from './memo/PersistForm';

// // Appコンポーネント
// class App extends Component {
//   td = {
//     width:"250px"
//   }

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Memo</h1>
//         <AddForm />
//         <hr />
//         <table><tbody><tr>
//           <td style={this.td}><FindForm /></td>
//           <td style={this.td}><DelForm /></td>
//           <td style={this.td}><PersistForm /></td>
//         </tr></tbody></table>
//         <Memo />
//       </div>
//     );
//   }
// }




// // Appコンポーネント
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Redux</h1>
//         <Message />
//         <Button />
//       </div>
//     );
//   }
// }

// // ストアのコネクト
// App = connect()(App);

// // メッセージ表示のコンポーネント
// class Message extends Component {
//   style = {
//     fontSize: "20pt",
//     padding:"20px 5px"
//   }

//   render() {
//     return (
//       <p style={this.style}>
//         {this.props.message}: {this.props.counter}
//       </p>
//     );
//   }
// }

// // ストアのコネクト
// Message = connect((state) => state)(Message);

// // ボタンのコンポーネント
// class Button extends Component {
//   style = {
//     fontSize: "16pt",
//     padding:"5px 10px"
//   }

//   constructor(props) {
//     super(props);
//     this.doAction = this.doAction.bind(this);
//   }

//   // ボタンクリックでディスパッチを実行
//   doAction(e) {
//     if (e.shiftKey) {
//       this.props.dispatch({ type: 'DECREMENT' });
//     } else if (e.ctrlKey) {
//       this.props.dispatch({ type: 'RESET' });
//     } else {
//       this.props.dispatch({ type: 'INCREMENT' });
//     }
//   }

//   render() {
//     return (
//       <button style={this.style}
//         onClick={this.doAction}>
//         click
//       </button>
//     );
//   }
// }

// // ストアのコネクト
// Button = connect()(Button);






// // Appコンポーネント
// class App extends Component {
//   td = {
//     width:"250px"
//   }

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Memo</h1>
//         <AddForm />
//         <hr />
//         <table><tbody><tr>
//           <td style={this.td}><FindForm /></td>
//           <td style={this.td}><DelForm /></td>
//         </tr></tbody></table>
//         <Memo />
//       </div>
//     );
//   }
// }




// // ステートのマッピング
// function mappingState(state) {
//   return state;
// }

// // Appコンポーネント
// class App extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Redux</h1>
//         <Message />
//         <Button />
//       </div>
//     );
//   }
// }

// // ストアのコネクト
// App = connect()(App);

// // メッセージ表示のコンポーネント
// class Message extends Component {
//   style = {
//     fontSize: "20pt",
//     padding:"20px 5px"
//   }

//   render() {
//     return (
//       <p style={this.style}>
//         {this.props.message}: {this.props.counter}
//       </p>
//     );
//   }
// }

// // ストアのコネクト
// Message = connect(mappingState)(Message);

// //
// class Button extends Component {
//   style = {
//     fontSize: "16pt",
//     padding:"5px 10px"
//   }

//   constructor(props) {
//     super(props);
//     this.doAction = this.doAction.bind(this);
//   }

//   // ボタンクリックでディスパッチを実行
//   doAction(e) {
//     if (e.shiftKey) {
//       this.props.dispatch({ type: 'DECREMENT' });
//     } else {
//       this.props.dispatch({ type: 'INCREMENT' });
//     }
//   }

//   render() {
//     return (
//       <button style={this.style}
//         onClick={this.doAction}>
//         click
//       </button>
//     );
//   }
// }

// // ストアのコネクト
// Button = connect() (Button);



// let theme = {
//   light: {
//     backgroundColor: "#eef",
//     color: "#006",
//     padding: "10px",
//   },
//   dark: {
//     backgroundColor: "#006",
//     color: "#eef",
//     padding: "10px",
//   }
// };

// const ThemeContext = React.createContext(theme.light); // light <-> dark

// class App extends Component {
//   static contextType = ThemeContext;

//   render() {
//     return (
//       <div style={this.context}>
//         <Title value="content page" />
//         <Message value="This is Content sample." />
//         <Message value="※これはテーマのサンプルです。" />
//       </div>
//     );
//   }
// }

// class Title extends Component {
//   static contextType = ThemeContext;

//   render() {
//     return (
//       <h2 style={this.context}>{this.props.value}</h2>
//     );
//   }
// }

// class Message extends Component {
//   static contextType = ThemeContext;

//   render() {
//     return (
//       <p style={this.context}>{this.props.value}</p>
//     );
//   }
// }





// let data = {
//   title: 'Title',
//   message: 'this is sample message.'
// };

// const SampleContext = React.createContext(data);

// class App extends Component {
//   newdata = {
//     title: '新しいタイトル',
//     message: 'これは新しいメッセージです。'
//   };

//   render() {
//     return (
//       <div>
//         <h1>Context</h1>
//         <Title />
//         <Message />
//         <SampleContext.Provider value={this.newdata}>
//           <Title />
//           <Message />
//         </SampleContext.Provider>
//         <Title />
//         <Message />
//       </div>
//     );
//   }
// }

// class Title extends Component {
//   static contextType = SampleContext;

//   render() {
//     return (
//       <div>
//         <h2>{this.context.title}</h2>
//       </div>
//     );
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext;

//   render() {
//     return (
//       <div>
//         <p>{this.context.message}</p>
//       </div>
//     );
//   }
// }





// let data = {
//   title: 'Title',
//   message: 'this is sample message.'
// };

// const SampleContext = React.createContext(data);

// class App extends Component {

//   render() {
//     return (
//       <div>
//         <h1>Context</h1>
//         <Title />
//         <Message />
//       </div>
//     );
//   }
// }

// class Title extends Component {
//   static contextType = SampleContext;

//   render() {
//     return (
//       <div>
//         <h2>{this.context.title}</h2>
//       </div>
//     );
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext;

//   render() {
//     return (
//       <div>
//         <p>{this.context.message}</p>
//       </div>
//     );
//   }
// }




// class App extends Component {
//   input = '';

//   msgStyle = {
//     fontSize: "20pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding:"5px",
//   }


//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'type your name:'
//     };
//     this.doCheck = this.doCheck.bind(this);
//   }

//   doCheck(event) {
//     alert(event.target.value +
//       "は長すぎます。（最大10文字）");
//   }

//   render() {
//     return <div>
//       <h1>React</h1>
//       <h2>{this.state.message}</h2>
//       <Message maxlength="10" onCheck={this.doCheck} />
//     </div>;
//   }
// }

// class Message extends Component {
//   inputStyle = {
//     fontSize: "12pt",
//     padding:"5px"
//   }

//   constructor(props) {
//     super(props);
//     this.doChange = this.doChange.bind(this);
//   }

//   doChange(e) {
//     if (e.target.value.length > this.props.maxlength) {
//       this.props.onCheck(e);
//       e.target.value =
//         e.target.value.substr(0, this.props.maxlength);
//     }
//   }

//   render() {
//     return <input type="text" style={this.inputStyle}
//       onChange={this.doChange} />
//   }
// }





// class App extends Component {
//   input = '';

//   msgStyle = {
//     fontSize:"20pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding:"5px",
//   }
//   inputStyle = {
//     fontSize: "12pt",
//     padding:"5px"
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'type your name:'
//     };
//     this.doChange = this.doChange.bind(this);
//     this.doSubmit = this.doSubmit.bind(this);
//   }

//   doChange(event) {
//     this.input = event.target.value;
//   }

//   doSubmit(event) {
//     this.setState({
//       message: 'Hello, ' + this.input + '!!'
//     });
//     event.preventDefault();
//   }
//   render() {
//     return <div>
//       <h1>React</h1>
//       <h2>{this.state.message}</h2>
//       <form onSubmit={this.doSubmit}>
//         <label>
//           <span style={this.inputStyle}></span>Message:
//           {/* <input type="text" style={this.inputStyle}
//             onChange={this.doChange} /> */}
//           <input type="text" style={this.inputStyle}
//           onChange={this.doChange}
//           required pattern="[A-Za-z _,l]+"
//         />
//         </label>
//         <input type="submit" style={this.inputStyle} value="Click" />
//       </form>
//     </div>
//   }
// }






// class App extends Component {
//   input = '';

//   msgStyle = {
//     fontSize: "20pt",
//     color: "#900",
//     margin: "20px 0px",
//     padding:"5px",
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'type your name:'
//     };
//     this.doChange = this.doChange.bind(this);
//     this.doSubmit = this.doSubmit.bind(this);
//   }

//   doChange(event) {
//     this.input = event.target.value;
//   }

//   doSubmit(event) {
//     this.setState({
//       message: 'Hello, ' + this.input + '!!'
//     });
//     event.preventDefault();
//   }
//   render() {
//     return <div>
//       <h1>React</h1>
//       <Message title="Children!">
//         これはコンポーネント内のコンテンツです。
//         マルでテキストを分割し、リストにして表示します。
//         改行は必要ありません。
//       </Message>
//     </div>
//   }
// }

// class Message extends Component {
//   li = {
//     fontSize: "16pt",
//     color: "#06",
//     margin:"0px",
//   }

//   render() {
//     let content = this.props.children;
//     let arr = content.split('。');
//     let arr2 = [];
//     for (let i = 0;i< arr.length;i++) {
//       if (arr[i].trim() != '') {
//         arr2.push(arr[i]);
//       }
//     }
//     let list = arr2.map((value, key) => (
//       <li style={this.li} key={key}>{value}.</li>
//     ));
//     return <div>
//       <h2>{this.props.title}</h2>
//       <ol>{list}</ol>
//     </div>
//   }
// }


// class App extends Component {
//   data =[
//     "This is list sample.",
//     "これはリストのサンプルです。",
//     "配列をリストに変換します。"
//   ];

//   magStyle = {
//     fontSize: "20pt",
//     color: "#90",
//     margin: "20px 0px",
//     padding:"5px",
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: this.data
//     };
//   }

//   render() {
//     return <div>
//       <h1>React</h1>
//       <h2 style={this.msgStyle}>show list.</h2>
//       <List title="サンプル・リスト" data={this.data} />
//     </div>;
//   }
// }

// class List extends Component {
//   number = 1;

//   title = {
//     fontSize: "20pt",
//     fontWeight: "bold",
//     color: "blue",
//   };

//   render() {
//     let data = this.props.data;
//     return (
//       <div>
//         <p style={this.title}>{this.props.title}</p>
//         <ul>
//           {data.map((item) =>
//             <Item number={this.number++} value={item}
//               key={this.number} />
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// class Item extends Component {
//   li = {
//     listStyleType: "square",
//     fontSize: "16pt",
//     color: "#06",
//     margin: "0px",
//     padding: "0px",
//   }
//   num = {
//     fontWeight: "bold",
//     color:"red"
//   }

//   render() {
//     return (
//       <li style={this.li}>
//         <span style={this.num}>[{this.props.number}]</span>
//         {this.props.value}
//       </li>
//     )
//   }
// }


  // data = [];

  // msgStyle = {
  //   fontSize: "20pt",
  //   color: "#900",
  //   margin: "20px 0px",
  //   padding:"5px",
  // }
  // area = {
  //   width: "500px",
  //   height: "500px",
  //   border:"1px solid blue"
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: this.data
  //   };
  //   this.doAction = this.doAction.bind(this);
  // }

  // doAction(e) {
  //   let x = e.pageX;
  //   let y = e.pageY;
  //   this.data.push({ x: x, y: y });
  //   this.setState({
  //     list: this.data
  //   });
  // }

  // draw(d) {
  //   let s = {
  //     position: "absolute",
  //     left: (d.x - 25) + "px",
  //     top: (d.y - 25) + "px",
  //     width: "50px",
  //     height:"50px",
  //     backgroundColor: "#66f3",
  //   };
  //   return <div style={s}></div>;
  // }

  // render() {
  //   return <div>
  //     <h1>React</h1>
  //     <h2 style={this.msgStyle}>show rect.</h2>
  //     <div style={this.area} onClick={this.doAction}>
  //       {this.data.map((value) => this.draw(value))}
  //     </div>
  //   </div>;
  // }


  // msgStyle = {
  //   fontSize:"24pt",
  //   color:"#900",
  //   margin:"20px 0px",
  //   padding: "5px",
  //   borderBottom:"2px solid #900"
  // }
  // msgStyle2 = {
  //   fontSize:"20pt",
  //   color: "white",
  //   backgroundColor:"#909",
  //   margin:"20px 0px",
  //   padding: "5px",
  //   borderBottom:"2px solid #900"
  // }
  // btnStyle = {
  //   fontSize:"16pt",
  //   padding:"10px"
  // }


  // constructor(props){
  //   super(props);
  //   this.state = {
  //     counter:0,
  //     msg: 'count start!',
  //     flg:true,
  //   };
  //   this.doAction = this.doAction.bind(this);
  //   // let timer = setInterval(()=>{
  //   //   this.setState((state)=>({
  //   //     msg: state.msg + "!"
  //   //   }));
  //   // }, 10000);
  // }
  // doAction() {
  //   this.setState((state) => ({
  //     counter: state.counter + 1,
  //     msg: 'count: ' + state.counter,
  //     flg: !state.flg
  //   }));
  // }

  // render(){
  //   return <div>
  //     <h1>React</h1>
  //     {this.state.flg ?
  //       <p style={this.msgStyle}>{this.state.msg}</p>
  //       :
  //       <p style={this.msgStyle2}>{this.state.msg}です。</p>
  //     }
  //     <button style={this.btnStyle} onClick={this.doAction}>Click</button>
  //     {/* <p style={this.msgStyle}>{this.state.msg}</p>
  //     <p style={this.msgStyle}>{this.props.msg}</p> */}
  //     {/* <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />	</div>;
  //     <Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />	
  //     <Rect x="100" y="150" w="150" h="150" c="#6669" r="25" /> */}
  //   </div>;
  // }
//}


export default App;
