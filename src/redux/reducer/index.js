import {combineReducers} from 'redux';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';
import POSTJOB from './AddJob';

const rootReducer = combineReducers({
  Authen: LogIn,
  Forgot: ForgotPassword,
  POSTJOB: POSTJOB,
});

export default (state, action) => rootReducer(state, action);
