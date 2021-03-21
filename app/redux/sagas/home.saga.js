import { all, fork, put, take, takeEvery } from 'redux-saga/effects';
import { homeActionsCreator } from '../actions';
import Api from '../../services/home-service';
import { GET_DATA_PRODUCT_DETAIL_REQUEST, GET_DATA_PRODUCT_REQUEST, GET_DATA_SLIDER_REQUEST } from '../types';

function* getDataProducts({ payload }) {
  try {
    const response = yield Api.getDataProduct(payload.access_token, payload.params);
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
    const response = yield Api.getDataSliders(payload.access_token, payload.params);
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
