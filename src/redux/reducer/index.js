import {combineReducers} from 'redux';
import ForgotPassword from './ForgotPassword';
import LogIn from './LogIn';
import ProfileEmployer from './ProfileEmployer';
import AddJob from './AddJob';
import POSTUPDATEJOB from './UpdateJob';
import Search from './Search';

const rootReducer = combineReducers({
  Authen: LogIn,
  Forgot: ForgotPassword,
  ProfileEPl: ProfileEmployer,
  AddJob: AddJob,
  UpDateJob: POSTUPDATEJOB,
  search: Search,
});

export default (state, action) => rootReducer(state, action);
