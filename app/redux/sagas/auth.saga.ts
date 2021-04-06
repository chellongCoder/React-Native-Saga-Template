import AsyncStorage from '@react-native-community/async-storage';
import {
  all,
  call,
  CallEffect,
  Effect,
  fork,
  put,
  SagaReturnType,
  take,
  TakeEffect,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { mapUserLogin } from '../../helpers/auth.helper';
import { UserLoginT } from '../../screens/login/types';
import { AuthAPI } from '../../services';
import { LOGIN_PARAMS, ResponseT } from '../../services/types';
import { authActionsCreator } from '../actions';
import { login, signUp } from '../api';
import { LOGIN_REQUEST, REGISTER_REQUEST } from '../types';

function* callSafe<Fn extends (...args: any[]) => Generator>(fn: Fn, ...args: Parameters<Fn>) {
  const result: CallEffect<SagaReturnType<Fn>> = yield call(fn, ...args);
  return result as Parameters<ReturnType<Fn>['return']>[0];
}

function* loginSaga(action: Effect<string, LOGIN_PARAMS>) {
  try {
    const response: ResponseT<UserLoginT> = yield call(AuthAPI.login, action.payload);
    console.log(
      `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: auth.saga.ts ~ line 16 ~ function*loginSaga ~ response`, response);
    console.log(
      `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------`,
    );
    const mapperData = mapUserLogin(response.data);
    if (response.status === 200) {
      AsyncStorage.setItem('@token', mapperData.accessToken);
      const user = mapperData;
      yield put(authActionsCreator.loginSuccess({ user }));
    }
  } catch (err) {
    yield put(
      authActionsCreator.loginError({
        error: err ? err : 'User Login Failed!',
      }),
    );
  }
}

function* signupSaga({ payload }) {
  try {
    const response = yield call(signUp, payload);
    if (response.success) {
      AsyncStorage.setItem('@token', response.success.token);
      const user = {
        ...response.success.user,
        token: response.success.token,
      };
      yield put(authActionsCreator.registerSuccess({ user }));
    }
  } catch (error) {
    yield put(
      authActionsCreator.registerError({
        error: error ? error : 'User Signup Failed',
      }),
    );
  }
}

function* watchLogin() {
  while (true) {
    const action: Effect = yield take(authActionsCreator.loginRequest);
    yield* loginSaga(action);
  }
}

function* watchSignup() {
  while (true) {
    const action = yield take(REGISTER_REQUEST);
    yield* signupSaga(action);
  }
}

export default function* () {
  yield all([fork(watchLogin), fork(watchSignup)]);
}
