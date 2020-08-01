import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Switch, Route } from 'react-router'

import 'assets/css/index.css';
import App from 'views/App';
import * as serviceWorker from 'components/support/serviceWorker';



import { createBrowserHistory } from 'history';

var hist = createBrowserHistory()

ReactDOM.render(
  // <App/>,
  <Router history={hist}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
