import { all, fork } from 'redux-saga/effects';
import AuthSaga from './auth.saga';
import HomeSaga from './home.saga';
import QrSaga from './qr.saga';
import NewsSaga from './news.saga';
import AccountSaga from './account.saga';
import NotificationSaga from './notification.saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(HomeSaga), fork(NewsSaga), fork(QrSaga), fork(AccountSaga), fork(NotificationSaga)]);
}
