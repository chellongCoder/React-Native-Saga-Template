import AsyncStorage from '@react-native-community/async-storage';
import { all, call, Effect, fork, put, take } from 'redux-saga/effects';
import { mapUserLogin } from '../../helpers/auth.helper';
import { UserLoginT } from '../../screens/login/types';
import { AuthAPI } from '../../services';
import { LOGIN_PARAMS, ResponseT, USER_INFO_PARAMS, LOGOUT_PARAMS, SIGNUP_PARAMS } from '../../services/types';
import { authActionsCreator } from '../actions';
import { login, signUp } from '../api';
import { REGISTER_REQUEST, USER_INFO_REQUEST } from '../types';
import { callSafe } from './common.saga';

function* loginSaga(action: Effect<string, LOGIN_PARAMS>) {
  try {
    const response: ResponseT<UserLoginT> = yield callSafe(AuthAPI.login, action.payload);
    if (response.status === 200) {
      const mapperData = mapUserLogin(response.data);
      AsyncStorage.setItem('@token', mapperData.accessToken);
      const user = mapperData;
      yield put(authActionsCreator.loginSuccess({ user, remember: action.payload.remember }));
    } else {
      authActionsCreator.loginError({
        error: response,
      });
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

function* signupSaga(action: Effect<string, SIGNUP_PARAMS>) {
  try {
    const response: ResponseT<UserLoginT> = yield callSafe(AuthAPI.signup, action.payload);
    if (response.status === 200) {
      const mapperData = mapUserLogin(response.data);
      AsyncStorage.setItem('@token', mapperData.accessToken);
      const user = mapperData;
      yield put(authActionsCreator.registerSuccess({ user }));
    } else {
      authActionsCreator.loginError({
        error: response,
      });
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
    const action: Effect = yield take(authActionsCreator.logoutRequest);
    yield* logoutSaga(action);
  }
}

function* watchSignup() {
  while (true) {
    const action: Effect = yield take(authActionsCreator.registerRequest);
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
