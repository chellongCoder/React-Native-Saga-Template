import { combineReducers } from 'redux';
import AuthData from './auth.reducer';
import HomeData from './home.reducer';
import QRData from './qr.reducer';
const RootReducer = combineReducers({
  AuthData,
  HomeData,
  QRData,
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
