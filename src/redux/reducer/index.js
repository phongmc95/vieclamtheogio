import {combineReducers} from 'redux';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';

const rootReducer = combineReducers({
  Authen: LogIn,
  Forgot: ForgotPassword,
});

export default (state, action) => rootReducer(state, action);
