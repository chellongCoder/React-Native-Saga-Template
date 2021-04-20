import AsyncStorage from '@react-native-community/async-storage';
import { all, call, Effect, fork, put, take } from 'redux-saga/effects';
import { mapUserLogin } from '../../helpers/auth.helper';
import { UserLoginT } from '../../screens/login/types';
import { AuthAPI } from '../../services';
import { LOGIN_PARAMS, LOGOUT_PARAMS, ResponseT } from '../../services/types';
import { authActionsCreator } from '../actions';
import { login, signUp } from '../api';
import { REGISTER_REQUEST } from '../types';
import { callSafe } from './common.saga';

function* loginSaga(action: Effect<string, LOGIN_PARAMS>) {
  try {
    const response: ResponseT<UserLoginT> = yield callSafe(AuthAPI.login, action.payload);
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

function* logoutSaga(action: Effect<string, LOGOUT_PARAMS>) {
  try {
    const response: ResponseT<UserLoginT> = yield callSafe(AuthAPI.logout, action.payload);

    if (response.status === 200) {
      AsyncStorage.removeItem('@token');
      yield put(authActionsCreator.logoutSuccess());
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

function* watchLogout() {
  while (true) {
    const action: Effect = yield take(authActionsCreator.logoutRequest);
    yield* logoutSaga(action);
  }
}

function* watchSignup() {
  while (true) {
    const action = yield take(REGISTER_REQUEST);
    yield* signupSaga(action);
  }
}

export default function* () {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignup)]);
}
