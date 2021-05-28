import AsyncStorage from '@react-native-community/async-storage';
import { all, call, Effect, fork, put, take } from 'redux-saga/effects';
import { LOGIN_PARAMS } from '../../services/types';
import { authActionsCreator } from '../actions';

function* loginSaga(action: Effect<string, LOGIN_PARAMS>) {
  try {
    yield put(authActionsCreator.loginSuccess());
  } catch (err) {
    yield put(authActionsCreator.loginError());
  }
}

function* logoutSaga(action: Effect<string>) {
  try {
    yield put(authActionsCreator.logoutSuccess());
  } catch (err) {
    yield put(authActionsCreator.logoutError());
  }
}

function* watchLogin() {
  while (true) {
    const action: Effect = yield take(authActionsCreator.loginRequest);
    yield* loginSaga(action);
  }
}

function* watchLogout() {
  while (true) {
    const action: Effect = yield take(authActionsCreator.logoutRequest);
    yield* logoutSaga(action);
  }
}

export default function* () {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
