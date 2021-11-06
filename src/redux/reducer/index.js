import {combineReducers} from 'redux';
import Token_LogIn from './NTD/LogIn';
import Token from './flc/token';
const rootReducer = combineReducers({
  LOGIN: Token_LogIn,
  Token: Token,
});

export default (state, action) => rootReducer(state, action);
