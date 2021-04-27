import { all, Effect, fork, put, take } from 'redux-saga/effects';
import { AccountAPI } from '../../services';
import { UPDATE_INFO_PARAMS, ResponseT } from '../../services/types';
import { accountActionsCreator } from '../actions';
import { UPDATE_INFO_REQUEST } from '../types';
import { callSafe } from './common.saga';

function* updateInfoSaga(action: Effect<string, UPDATE_INFO_PARAMS>) {
  try {
    const response: ResponseT<any> = yield callSafe(AccountAPI.updateInfo, action.payload);
    if (response.status === 200) {
      yield put(accountActionsCreator.updateInfoSuccess(response));
    }
  } catch (error) {
    yield put(
      accountActionsCreator.updateInfoError({
        error: error ? error : 'User Login Failed!',
      }),
    );
  }
}

function* watchUpdateInfo() {
  while (true) {
    const action: Effect = yield take(UPDATE_INFO_REQUEST);
    yield* updateInfoSaga(action);
  }
}

export default function* () {
  yield all([fork(watchUpdateInfo)]);
}
