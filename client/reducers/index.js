import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { allCarsReducer } from './allCarsReducer';

const rootReducer = combineReducers({allCarsReducer, routing: routerReducer});

export default rootReducer;