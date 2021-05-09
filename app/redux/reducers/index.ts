import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import { LOGOUT_SUCCESS } from '../types';
import AuthData from './auth.reducer';
import HomeData from './home.reducer';
import QRData from './qr.reducer';
import ProductData from './product.reducer';
import NewData from './news.reducer';
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['requesting', 'tempData'],
};

const RootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT_SUCCESS) {
    console.log('USER_LOGOUT ', state);
    state = {};
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  AuthData: persistReducer(authPersistConfig, AuthData),
  HomeData,
  QRData,
  ProductData,
  NewData,
});
export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
