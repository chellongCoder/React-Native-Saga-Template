import { put, putResolve, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ApiResponse } from 'apisauce';
import { homeActionsCreator } from '../actions';
import { Api } from '../../services';

function* getDataProducts({ payload }: Action<any>) {
  try {
    const response: ApiResponse<any, any> = yield Api.getDataProduct(payload.access_token, payload.params);
    if (response.status === 200) {
      yield put(homeActionsCreator.getDataSuccess(response));
    } else {
      yield put(homeActionsCreator.getDataFaild({ error: response.originalError }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

function* getDataSliders({ payload }: Action<any>) {
  try {
    const response: ApiResponse<any, any> = yield Api.getDataSliders(payload.access_token, payload.params);

    if (response.status === 200) {
      yield put(homeActionsCreator.getDataSlidersSuccess(response));
    } else {
      yield put(homeActionsCreator.getDataSlidersFaild({ error: response.originalError }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataSlidersFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

function* getDataProductDetail({ payload }: Action<{ product_id: number; callback: any }>) {
  try {
    const response: ApiResponse<any, any> = yield Api.getDataProductDetail(payload);
    if (response.status === 200) {
      yield put(homeActionsCreator.getDataProductDetailSuccess(response));
      payload.callback(response);
    } else {
      yield put(homeActionsCreator.getDataProductDetailFaild({ error: response.originalError }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataProductDetailFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

export function* testGenerator() {
  const response: ApiResponse<any, any> = yield Api.getDataSliders('', {});
  console.log(
    `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------`,
  );
  console.log(`🛠 LOG: 🚀 --> ~ file: home.saga.ts ~ line 49 ~ function*testGenerator ~ response`, response);
  console.log(
    `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------`,
  );
  return response;
}

export default function* () {
  yield takeEvery(homeActionsCreator.getDataRequest, getDataProducts);
  yield takeEvery(homeActionsCreator.getDataSlidersRequest, getDataSliders);
  yield takeEvery(homeActionsCreator.getDataProductDetailRequest, getDataProductDetail);
}
