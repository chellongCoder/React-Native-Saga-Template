import { put, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { newsDetailActionsCreator } from '../actions';
import { NewsDetailApi } from '../../services';
import { callSafe } from './common.saga';

function* getDataNewsDetailNotification() {
  try {
    const response: ApiResponse<any, any> = yield callSafe(NewsDetailApi.getNewsNotification, {});
    if (response.status === 200) {
      yield put(newsDetailActionsCreator.getNewsDetailNotificationSuccess(response));
    } else {
      yield put(newsDetailActionsCreator.getNewsDetailNotificationFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(newsDetailActionsCreator.getNewsDetailNotificationFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(newsDetailActionsCreator.getNewsDetailNotificationRequest, getDataNewsDetailNotification);
}
