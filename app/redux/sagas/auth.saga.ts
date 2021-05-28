import { all, call, Effect, fork, put, take } from 'redux-saga/effects';
import { AuthApi } from '../../services';
import { LOGIN_PARAMS, ResponseT } from '../../services/types';
import { authActionsCreator } from '../actions';
import { callSafe } from './common.saga';

function* loginSaga(action: Effect<string, LOGIN_PARAMS>) {
  try {
    const response: ResponseT<any> = yield callSafe(AuthApi.login, action.payload);
    yield put(authActionsCreator.loginSuccess(response));
  } catch (err) {
    yield put(authActionsCreator.loginError(err ? err : 'User Login Failed!'));
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
