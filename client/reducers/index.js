import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import allCarsReducer from './allCarsReducer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({allCarsReducer, vehicleReducer, routing: routerReducer});

export default rootReducer;