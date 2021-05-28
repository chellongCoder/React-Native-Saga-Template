import { put, takeEvery } from 'redux-saga/effects';
import { masterDataActionsCreator } from '../actions';
import { MasterDataApi } from '../../services';
import { ResponseT } from '../../services/types';
import { callSafe } from './common.saga';

function* getMasterDatas() {
  try {
    const response: ResponseT<any> = yield callSafe(MasterDataApi.getDataMasterData, {});
    yield put(masterDataActionsCreator.getMasterDataSuccess(response));
  } catch (err) {
    yield put(masterDataActionsCreator.getMasterDataFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(masterDataActionsCreator.getMasterDataRequest, getMasterDatas);
}
