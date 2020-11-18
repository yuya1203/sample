import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';


class Address extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    this.logined = this.logined.bind(this);
  }


  // login,logout処理
  logined(){
    this.getFireData();
  }
  logouted(){
    Router.push('/address');
  }


  // Firebaseからデータを取得
  getFireData(){
    if (this.props.email == undefined ||
      this.props.email == ''){ return; }
    let email = Lib.encodeEmail(this.props.email);
    let db = firebase.database();
    let ref = db.ref('address/');
    let self = this;
    ref.orderByKey()
      .equalTo(email)
      .on('value', (snapshot)=>{
        let d = Lib.deepcopy(snapshot.val());
        this.props.dispatch({
          type:'UPDATE_USER',
          value:{
            login:this.props.login,
            username: this.props.username,
            email: this.props.email,
            data:d,
            items:self.getItem(d)
          }
        });
    });
  }


  // dataを元に表示項目を作成
  getItem(data){
    if (data == undefined){ return; }
    let res = [];
    for (let i in data){
      for(let j in data[i]){
        let email = Lib.decodeEmail(j);
        let s = data[i][j]['name'];


        res.push(<li key={j} data-tag={email}
          onClick={this.go.bind(null, email)}>
          {data[i][j]['check'] == true ?
            <b>✓</b> : ''}{s} ({email})
        </li>);
      }
      break;
    }
    return res;
  }


  // データ表示ページの移動
  go(email){
    Router.push('/address_show?email=' + email);
  }


  // レンダリング
  render(){
    return (
      <div>
        <Account onLogined={this.logined}
          onLogouted={this.logouted} />
        <ul>
          {this.props.items == []
          ?
          <li key="0">no item.</li>
          :
          this.props.items
          }
        </ul>
      </div>
    )
  }
}


Address = connect((state)=> state)(Address);
export default Address;
