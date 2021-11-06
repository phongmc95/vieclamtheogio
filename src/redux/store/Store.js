import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
const middleware = [thunk];

export const Store = createStore(rootReducer, applyMiddleware(...middleware));
