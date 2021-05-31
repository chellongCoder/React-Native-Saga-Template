import { all, fork } from 'redux-saga/effects';
import AuthSaga from './auth.saga';
import MasterDataSaga from './master-data.saga';
import TimekeepSaga from './timekeep.saga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(MasterDataSaga), fork(TimekeepSaga)]);
}
