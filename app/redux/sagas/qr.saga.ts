import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ApiResponse } from 'apisauce';
import { qrActionsCreator } from '../actions';
import { ApiQr } from '../../services';

function* getDataScanQr({ payload }: Action<{ url_scan: number; callback: any }>) {
  try {
    const response: ApiResponse<any, any> = yield ApiQr.getDataScanQR({ url_scan: payload.url_scan });
    if (response.status === 200) {
      yield put(qrActionsCreator.getDataScanSuccess(response));
      payload.callback(response);
    } else {
      yield put(qrActionsCreator.getDataScanFaild({ error: response.originalError || 'User Login Failed!' }));
    }
  } catch (err) {
    yield put(qrActionsCreator.getDataScanFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(qrActionsCreator.getDataScanRequest, getDataScanQr);
}
