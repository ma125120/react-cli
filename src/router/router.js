import React from 'react'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import App from '../pages/Main.js';

var Routes=()=>(
		<div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr/>
      <Route path="/" component={App} />
    </div>
);

export default Routes;