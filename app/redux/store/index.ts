import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';
// Imports: Redux Root Saga
import rootSaga from '../sagas';
import apiService from './middleware';

const logger = createLogger({
  collapsed: true,
  timestamp: false,
  duration: true,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['AuthData', 'QRData'],
};
// Middleware: Redux Saga
const onError = (error: Error, errorInfo: any) => {
  console.log(`🛠 LOG: 🚀 --> ------------------------------------------------------------------`);
  console.log(`🛠 LOG: 🚀 --> ~ file: index.ts ~ line 25 ~ onError ~ error`, error, errorInfo);
  console.log(`🛠 LOG: 🚀 --> ------------------------------------------------------------------`);
};
const sagaMiddleware = createSagaMiddleware({ onError });
//persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareProduction: any[] = [sagaMiddleware];
if (__DEV__) {
  middlewareProduction.push(logger);
}
middlewareProduction.push(apiService);
// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middlewareProduction));
let persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export { store, persistor };
