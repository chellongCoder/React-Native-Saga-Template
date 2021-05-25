import { put, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { Action } from 'redux-actions';
import { cryptoActionsCreator } from '../actions';
import { CryptoApi } from '../../services';
import { callSafe } from './common.saga';

function* getCryptos() {
  try {
    const response: ApiResponse<any, any> = yield callSafe(CryptoApi.getDataCrypto, {});
    if (response.status === 200) {
      yield put(cryptoActionsCreator.getCryptoSuccess(response));
    } else {
      yield put(cryptoActionsCreator.getCryptoFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(cryptoActionsCreator.getCryptoFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(cryptoActionsCreator.getCryptoRequest, getCryptos);
}
