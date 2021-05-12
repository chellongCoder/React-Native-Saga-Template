import { put, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { notificationActionsCreator } from '../actions';
import { NotificationApi } from '../../services';
import { callSafe } from './common.saga';

function* getNotifications() {
  try {
    const response: ApiResponse<any, any> = yield callSafe(NotificationApi.getDataNotification, {});
    if (response.status === 200) {
      yield put(notificationActionsCreator.getNotificationSuccess(response));
    } else {
      yield put(notificationActionsCreator.getNotificationFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(notificationActionsCreator.getNotificationFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(notificationActionsCreator.getNotificationRequest, getNotifications);
}
