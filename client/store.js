import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import path from 'path'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f  
)

// Create store
const store = createStore(
  rootReducer, 
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept(path.resolve(__dirname, './reducers/'), () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;