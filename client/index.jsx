import React from 'react';
import ReactDOM from 'react-dom';
import css from './dist/style.css';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/tweets' component={Tweets}></Route>
        <Route path='/settings' component={Settings}></Route>
        <Route path='/profile' component={Profile}></Route>

      </Route>
    </Router>
  </Provider>

)




ReactDOM.render(router, document.getElementById('app'));
