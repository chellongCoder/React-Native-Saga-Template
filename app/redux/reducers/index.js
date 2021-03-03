import { combineReducers } from 'redux';
import AuthData from './auth.reducer';
import HomeData from './home.reducer';
const RootReducer = combineReducers({
  AuthData,
  HomeData,
});

export default RootReducer;
