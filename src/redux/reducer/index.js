import {combineReducers} from 'redux';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';
import ProfileEmployer from './ProfileEmployer';
import AddJob from './AddJob';

const rootReducer = combineReducers({
  Authen: LogIn,
  Forgot: ForgotPassword,
  ProfileEPl: ProfileEmployer,
  AddJob: AddJob,
});

export default (state, action) => rootReducer(state, action);
