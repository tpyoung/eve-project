import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard.js';
import store, { history } from './store';

const router = (
  <Provider store = { store }>
    <Router history = { history }>
      <Route path = '/' component = { Dashboard }>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
