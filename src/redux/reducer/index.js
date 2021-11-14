import {combineReducers} from 'redux';
import LogIn from './NTD/LogIn';
import Token from './flc/token';
const rootReducer = combineReducers({
  LOGIN: LogIn,
  Token: Token,
});

export default (state, action) => rootReducer(state, action);
