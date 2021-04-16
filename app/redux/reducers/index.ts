import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import AuthData from './auth.reducer';
import HomeData from './home.reducer';
import QRData from './qr.reducer';
import ProductData from './product.reducer';
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['requesting'],
};

const RootReducer = combineReducers({
  AuthData: persistReducer(authPersistConfig, AuthData),
  HomeData,
  QRData,
  ProductData,
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
