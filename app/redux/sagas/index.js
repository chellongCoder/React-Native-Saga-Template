import { all, fork } from 'redux-saga/effects';
import AuthSaga from './auth.saga';
import HomeSaga from './home.saga';
import QrSaga from './qr.saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(HomeSaga), fork(QrSaga)]);
}
