import React, { Component } from 'react';
import { addTodo,delTodo } from '../redux/actions/actions.js';
import { connect } from 'react-redux';
import '../styles/index.scss'

import NavLink from '../components/NavLink.js';

import {
  Route,
  Link
} from 'react-router-dom';
//import store from '../redux/store/store.js'
// function mapStateToProps(state) {
//   store.dispatch(delTodo(0));
//   return {
//     propName: state.TODO.concat(['我新增的数据','ads'])
//   };
// }
var imgs=require('../images/yeoman.jpg');

function mapDispatchProps(dispatch) {
  return {
    someAction: (fn,arg) =>{
      dispatch(fn(arg));
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var links=[{
      name:'Events',
      child:[{
        name:'FSSIC2011',
        url:'FSSIC2011',
      },{
        name:'FSSIC2013',
        url:'FSSIC2013',
      }]
    },{
      name:'publications',
      url:'publications'
    },{
      name:'committees',
      url:'committees',
    },{
      name:'about',
      url:'about'
    }];
    // `mapStateToProps` 和 `mapDispatchProps` 返回的字段都是 `props`
    return (
      <div className='main'>
        <NavLink links={links} />
        <div>asdsda</div>
      </div>
    );
  }
}

export default connect(state=>{
  
  return {
    propName: state.TODO.concat(['我新增的数据','ads'])
  };
}, mapDispatchProps)(App);