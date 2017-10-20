import React, { Component } from 'react';
import { addTodo,delTodo } from '../redux/actions/actions.js';
import { connect } from 'react-redux';
import '../styles/index.scss'

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
    // `mapStateToProps` 和 `mapDispatchProps` 返回的字段都是 `props`
    return (
      <div>

      </div>
    );
  }
}

export default connect(state=>{
  
  return {
    propName: state.TODO.concat(['我新增的数据','ads'])
  };
}, mapDispatchProps)(App);