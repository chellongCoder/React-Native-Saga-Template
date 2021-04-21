import AsyncStorage from '@react-native-community/async-storage';
import { all, call, Effect, fork, put, take } from 'redux-saga/effects';
import { mapUserLogin } from '../../helpers/auth.helper';
import { UserLoginT } from '../../screens/login/types';
import { AuthAPI } from '../../services';
import { LOGIN_PARAMS, ResponseT, USER_INFO_PARAMS } from '../../services/types';
import { authActionsCreator } from '../actions';
import { login, signUp } from '../api';
import { REGISTER_REQUEST, USER_INFO_REQUEST } from '../types';
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

function* logoutSaga() {
  try {
    const response: ResponseT<UserLoginT> = yield callSafe(AuthAPI.logout, {});
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

function* userInfoSaga(action: Effect<string, USER_INFO_PARAMS>) {
  try {
    const response: ResponseT<any> = yield callSafe(AuthAPI.getUserInfo, action.payload);
    if (response.status === 200) {
      yield put(authActionsCreator.userInfoSuccess(response));
    }
  } catch (error) {
    yield put(
      authActionsCreator.userInfoError({
        error: error ? error : 'User Login Failed!',
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
    yield take(authActionsCreator.logoutRequest);
    yield* logoutSaga();
  }
}

function* watchSignup() {
  while (true) {
    const action: Effect = yield take(REGISTER_REQUEST);
    yield* signupSaga(action);
  }
}

function* watchUserInfo() {
  while (true) {
    const action: Effect = yield take(USER_INFO_REQUEST);
    yield* userInfoSaga(action);
  }
}

export default function* () {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignup), fork(watchUserInfo)]);
}
