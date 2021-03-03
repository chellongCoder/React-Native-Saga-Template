import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';
// Imports: Redux Root Saga
import rootSaga from '../sagas';
const logger = createLogger({
  collapsed: true,
  timestamp: false,
  duration: true,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading'],
};
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
//persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareProduction = [sagaMiddleware];
if (__DEV__) {
  middlewareProduction.push(logger);
}
// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middlewareProduction));
let persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export { store, persistor };
