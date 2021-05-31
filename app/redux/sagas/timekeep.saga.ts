import { Effect, put, takeEvery } from 'redux-saga/effects';
import { timekeepActionsCreator } from '../actions';
import { TimekeepApi } from '../../services';
import { ApiParamsT } from '../../types';
import { ResponseT } from '../../services/types';
import { alertMessage } from '../../util';
import { WorkoutParamsT } from '../../screens/home/types';
import { callSafe } from './common.saga';

function* postCheckinCheckout(action: Effect<string, ApiParamsT>) {
  try {
    const response: ResponseT<any> = yield callSafe(TimekeepApi.postCheckinCheckout, action.payload);
    if (response.status_code === 200) {
      alertMessage('Thao tác thành công.');
      yield put(timekeepActionsCreator.postCheckinCheckoutSuccess(response));
    } else {
      yield put(timekeepActionsCreator.postCheckinCheckoutFailed({ error: response.error }));
    }
  } catch (err) {
    yield put(timekeepActionsCreator.postCheckinCheckoutFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

function* postWorkoutRegistration(action: Effect<string, WorkoutParamsT>) {
  try {
    const response: ResponseT<any> = yield callSafe(TimekeepApi.postWorkoutRegistration, action.payload);
    if (response.status_code === 200) {
      alertMessage('Thao tác thành công.');
      yield put(timekeepActionsCreator.workoutRegistrationSuccess(response));
    } else {
      yield put(timekeepActionsCreator.workoutRegistrationFailed({ error: response.error }));
    }
  } catch (err) {
    yield put(timekeepActionsCreator.workoutRegistrationFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(timekeepActionsCreator.postCheckinCheckoutRequest, postCheckinCheckout);
  yield takeEvery(timekeepActionsCreator.workoutRegistrationRequest, postWorkoutRegistration);
}
