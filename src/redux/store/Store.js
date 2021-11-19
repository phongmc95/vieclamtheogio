import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Authen'], // or blacklist to exclude specific reducers
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
const persistor = persistStore(store);
export {persistor, store};
