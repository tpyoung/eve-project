import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import path from 'path'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f  
)

const store = compose(applyMiddleware(thunk), (enhancers))(createStore)(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept(path.resolve(__dirname, './reducers/'), () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;