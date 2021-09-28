import {combineReducers} from 'redux';
import Token_LogIn from './NTD/Token_LogIn';
import Token from './flc/token'
const rootReducer = combineReducers({
  LOGIN: Token_LogIn,
  Token: Token,

});
export default rootReducer;
