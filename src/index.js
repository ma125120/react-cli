import 'core-js/fn/object/assign';
import React from 'react';

import store from './redux/store/store.js'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
	HashRouter as Router
  //BrowserRouter as Router
} from 'react-router-dom';
import Routes from './router/router';
import './styles/index.scss'

render(
  <Provider store={store}>
    <Router>
    	<Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {  
  module.hot.accept();
}
