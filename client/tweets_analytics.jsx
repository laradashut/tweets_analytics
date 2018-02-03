import React from 'react';
import ReactDOM from 'react-dom';
import css from './dist/style.css';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; //binding to use redux with react
import store, { history } from './store';

import App from './components/App';
import Home from './components/Home';
import Tweets from './components/Tweets';
import Profile from './components/Profile';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/tweets' component={Tweets}></Route>
        <Route path='/profile' component={Profile}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('app'));
