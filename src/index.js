import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Switch, Route } from 'react-router'

import 'assets/css/index.css';
import Home from 'views/Home';
import * as serviceWorker from 'components/support/serviceWorker';



import { createBrowserHistory } from 'history';

var hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
