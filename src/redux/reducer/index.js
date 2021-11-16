import {combineReducers} from 'redux';
import LogIn from './LogIn';

const rootReducer = combineReducers({
  Authen: LogIn,
});

export default (state, action) => rootReducer(state, action);
