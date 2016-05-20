import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import InputContainer from './container/InputContainer';
import ResultPage from './components/ResultPage';
import store, { history } from './store';

const router = (
  <Provider store = { store }>
    <Router history = { history }>
      <Route path = '/' component = { App } >
      	<IndexRoute component = { InputContainer } />
      	<Route path = '/results' component = { ResultPage } />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.querySelector('#root')
)
