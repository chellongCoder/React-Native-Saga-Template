import { all, fork } from 'redux-saga/effects';
import AuthSaga from './auth.saga';
import HomeSaga from './home.saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(HomeSaga)]);
}
