import { all, fork, put, take, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { homeActionsCreator } from '../actions';
import Api from '../../services/home-service';
import { GET_DATA_PRODUCT_SUCCESS, GET_DATA_PRODUCT_FAILD, GET_DATA_PRODUCT_REQUEST } from '../types';

function* getDataProducts({ payload }) {
  try {
    const response = yield Api.getDataProduct(payload.access_token, payload.params);
    console.log('🚀 ~ file: home.saga.js ~ line 10 ~ function*getDataProducts ~ response', response);
    if (response.success) {
      yield put(homeActionsCreator.getDataSuccess(response));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataFaild(GET_DATA_PRODUCT_FAILD, { error: err ? err : 'User Login Failed!' }));
  }
}

function* watchHome() {
  while (true) {
    const action = yield take(GET_DATA_PRODUCT_REQUEST);
    yield* getDataProducts(action);
  }
  // yield takeEvery(GET_DATA_PRODUCT_REQUEST, getDataProducts);
}

export default function* () {
  yield all([fork(watchHome)]);
}
