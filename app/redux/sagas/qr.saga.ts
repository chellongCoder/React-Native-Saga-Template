import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ApiResponse } from 'apisauce';
import { qrActionsCreator } from '../actions';
import { ApiQr } from '../../services';
import { mapDetailProduct } from '../../helpers/product.helper';

function* getDataScanQr({
  payload,
}: Action<{
  url_scan: string;
  callback: any;
  user_id: string | number;
  device_id: string | null;
}>) {
  try {
    const response: ApiResponse<any, any> = yield ApiQr.getDataScanQR({
      url_scan: payload.url_scan,
      user_id: payload.user_id,
      device_id: payload.device_id,
    });
    if (response.status === 200) {
      yield put(qrActionsCreator.getDataScanSuccess(response));
      payload.callback(mapDetailProduct(response.product));
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
