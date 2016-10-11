import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authReducer } from './Auth/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer
});

export default rootReducer;
