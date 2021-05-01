import { put, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { Action } from 'redux-actions';
import { newsActionsCreator } from '../actions';
import { NewsApi } from '../../services';
import { CategoryByIdParamsT } from '../../screens/news/types';
import { callSafe } from './common.saga';

function* getDataNewsCategory() {
  try {
    const response: ApiResponse<any, any> = yield callSafe(NewsApi.getNewCategory, {});
    if (response.status === 200) {
      yield put(newsActionsCreator.getNewCategorySuccess(response));
    } else {
      yield put(newsActionsCreator.getNewCategoryFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(newsActionsCreator.getNewCategoryFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

function* getDataNewsByCategory({ payload }: Action<CategoryByIdParamsT>) {
  try {
    const response: ApiResponse<any, any> = yield callSafe(NewsApi.getNewByCategory, payload);
    if (response.status === 200) {
      yield put(newsActionsCreator.getNewByCategorySuccess(response));
    } else {
      yield put(newsActionsCreator.getNewByCategoryFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(newsActionsCreator.getNewByCategoryFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

function* getDataNewsDetailNotification() {
  try {
    const response: ApiResponse<any, any> = yield callSafe(NewsApi.getNewsNotification, {});
    if (response.status === 200) {
      yield put(newsActionsCreator.getNewsDetailNotificationSuccess(response));
    } else {
      yield put(newsActionsCreator.getNewsDetailNotificationFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(newsActionsCreator.getNewsDetailNotificationFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(newsActionsCreator.getNewCategoryRequest, getDataNewsCategory);
  yield takeEvery(newsActionsCreator.getNewByCategoryRequest, getDataNewsByCategory);
  yield takeEvery(newsActionsCreator.getNewsDetailNotificationRequest, getDataNewsDetailNotification);
}
