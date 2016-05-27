'use strict';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import InputContainer from './container/InputContainer';
import ResultPage from './components/ResultPage';
import store, { history } from './store';
import APILandingPage from './components/APILandingPage';
import styles from './components/componentStyles/Main.scss';

const router = (
  <Provider store = { store }>
    <Router history = { history }>
      <Route path = '/' component = { App } >
      	<IndexRoute component = { InputContainer } />
      </Route>
      	<Route path = '/results' component = { ResultPage } />
        <Route path = '/api' component = { APILandingPage } />
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.querySelector('#root')
)
