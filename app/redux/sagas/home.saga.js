import { all, fork, put, take } from 'redux-saga/effects';
import { homeActionsCreator } from '../actions';
import Api from '../../services/home-service';
import { GET_DATA_PRODUCT_SUCCESS, GET_DATA_PRODUCT_FAILD, GET_DATA_PRODUCT_REQUEST } from '../types';

function* getDataProducts({ payload }) {
  try {
    const response = yield Api.getDataProduct(payload.access_token, payload.params);
    if (response.success) {
      yield put(homeActionsCreator.getDataSuccess(GET_DATA_PRODUCT_SUCCESS, response));
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
}

export default function* () {
  yield all([fork(watchHome)]);
}
