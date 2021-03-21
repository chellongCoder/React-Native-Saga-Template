import { all, fork, put, take, takeEvery } from 'redux-saga/effects';
import { homeActionsCreator } from '../actions';
import { GET_DATA_PRODUCT_DETAIL_REQUEST, GET_DATA_PRODUCT_REQUEST, GET_DATA_SLIDER_REQUEST } from '../types';
import { Api } from '../../services';

function* getDataProducts({ payload }) {
  try {
    const response: any = yield Api.getDataProduct(payload.access_token, payload.params);
    if (response.status === 200) {
      yield put(homeActionsCreator.getDataSuccess(response));
    } else {
      yield put(homeActionsCreator.getDataFaild({ error: response.message }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

function* getDataSliders({ payload }) {
  try {
    console.log('====================================');
    console.log('asasd');
    console.log('====================================');
    const response = yield Api.getDataSliders(payload.access_token, payload.params);
    console.log(
      `🛠 LOG: 🚀 --> --------------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: home.saga.js ~ line 22 ~ function*getDataSliders ~ response`, response);
    console.log(
      `🛠 LOG: 🚀 --> --------------------------------------------------------------------------------------------`,
    );
    if (response.status === 200) {
      yield put(homeActionsCreator.getDataSlidersSuccess(response));
    } else {
      yield put(homeActionsCreator.getDataSlidersFaild({ error: response.message }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataSlidersFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

function* getDataProductDetail({ payload }) {
  try {
    const response = yield Api.getDataProductDetail(payload.access_token, payload.params);
    if (response.status === 200) {
      yield put(homeActionsCreator.getDataProductDetailSuccess(response));
    } else {
      yield put(homeActionsCreator.getDataProductDetailFaild({ error: response.message }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataProductDetailFaild({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(GET_DATA_PRODUCT_REQUEST, getDataProducts);
  yield takeEvery(GET_DATA_SLIDER_REQUEST, getDataSliders);
  yield takeEvery(GET_DATA_PRODUCT_DETAIL_REQUEST, getDataProductDetail);
}
