import {combineReducers} from 'redux';
import LogIn from './LogIn';

const rootReducer = combineReducers({
  LOGIN: LogIn,
});

export default (state, action) => rootReducer(state, action);
