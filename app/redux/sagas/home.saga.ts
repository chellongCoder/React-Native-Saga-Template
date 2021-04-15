import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ApiResponse } from 'apisauce';
import { homeActionsCreator } from '../actions';
import { Api } from '../../services';
import { PostCommentParamsT } from '../../screens/product_detail/types';
import { callSafe } from './common.saga';

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

function* getDataProductsMore({ payload }: Action<any>) {
  try {
    const response: ApiResponse<any, any> = yield Api.getDataProductMore(payload.access_token, payload.params);
    if (response.status === 200) {
      yield put(homeActionsCreator.getDataMoreSuccess(response));
    } else {
      yield put(homeActionsCreator.getDataMoreFaild({ error: response.originalError }));
    }
  } catch (err) {
    yield put(homeActionsCreator.getDataMoreFaild({ error: err ? err : 'User Login Failed!' }));
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
    const response: ApiResponse<any, any> = yield callSafe(Api.getDataProductDetail, payload);
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

function* postComment({ payload }: Action<PostCommentParamsT>) {
  try {
    const response: ApiResponse<any, any> = yield callSafe(Api.postComment, payload);
    if (response.status === 200) {
      yield put(homeActionsCreator.postCommentSuccess(response));
    } else {
      yield put(homeActionsCreator.postCommentFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(homeActionsCreator.postCommentFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(homeActionsCreator.getDataRequest, getDataProducts);
  yield takeEvery(homeActionsCreator.getDataSlidersRequest, getDataSliders);
  yield takeEvery(homeActionsCreator.getDataProductDetailRequest, getDataProductDetail);
  yield takeEvery(homeActionsCreator.getDataMoreRequest, getDataProductsMore);
  yield takeEvery(homeActionsCreator.postCommentRequest, postComment);
}
