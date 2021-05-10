import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ApiResponse } from 'apisauce';
import { qrActionsCreator } from '../actions';
import { ApiQr } from '../../services';
import { mapDetailProduct } from '../../helpers/product.helper';
import { ActiveProductT, VerifyProductT } from '../../screens/product_scan/types';
import { callSafe } from './common.saga';

function* getDataScanQr({
  payload,
}: Action<{
  url_scan: string;
  callback: any;
  user_id: string | number;
  device_id: string | null;
  hideMessage: boolean;
}>) {
  try {
    const response: ApiResponse<any, any> = yield callSafe(ApiQr.getDataScanQR, {
      url_scan: payload.url_scan,
      user_id: payload.user_id,
      device_id: payload.device_id,
      hideMessage: payload.hideMessage,
    });
    if (response.status === 200) {
      yield put(qrActionsCreator.getDataScanSuccess(response));
      payload.callback(mapDetailProduct(response.product));
    } else if (response.status === 203) {
      yield put(qrActionsCreator.getDataScanFaild({ error: response.message }));
    }
  } catch (err) {
    yield put(qrActionsCreator.getDataScanFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

function* verifyProduct({ payload }: Action<VerifyProductT>) {
  try {
    const response: ApiResponse<any, any> = yield callSafe(ApiQr.verifyProduct, payload);
    if (response.status === 200) {
      yield put(qrActionsCreator.verifyProductSuccess(response));
    } else {
      yield put(qrActionsCreator.verifyProductFaild({ error: response.originalError }));
    }
  } catch (err) {
    yield put(qrActionsCreator.verifyProductFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

function* activeProduct({ payload }: Action<ActiveProductT>) {
  try {
    const response: ApiResponse<any, any> = yield callSafe(ApiQr.activeProduct, payload);
    if (response.status === 200) {
      yield put(qrActionsCreator.activeProductSuccess(response));
    } else {
      yield put(qrActionsCreator.activeProductFaild({ error: response.originalError }));
    }
  } catch (err) {
    yield put(qrActionsCreator.activeProductFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(qrActionsCreator.getDataScanRequest, getDataScanQr);
  yield takeEvery(qrActionsCreator.verifyProductRequest, verifyProduct);
  yield takeEvery(qrActionsCreator.activeProductRequest, activeProduct);
}
