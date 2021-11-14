import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['LOGIN'], // or blacklist to exclude specific reducers
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
const persistor = persistStore(store);
export {persistor, store};
