import { all, fork } from 'redux-saga/effects';
import AuthSaga from './auth.saga';
import HomeSaga from './home.saga';
import QrSaga from './qr.saga';
import NewsSaga from './news.saga';
import NewsDetailSaga from './newsDetail.saga';
import AccountSaga from './account.saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(HomeSaga), fork(NewsSaga), fork(NewsDetailSaga), fork(QrSaga), fork(AccountSaga)]);
}
