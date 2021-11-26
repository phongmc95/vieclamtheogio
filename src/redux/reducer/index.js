import {combineReducers} from 'redux';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';
import ProfileEmployer from "./ProfileEmployer";

const rootReducer = combineReducers({
  Authen: LogIn,
  Forgot: ForgotPassword,
  ProfileEPl: ProfileEmployer,
});

export default (state, action) => rootReducer(state, action);
