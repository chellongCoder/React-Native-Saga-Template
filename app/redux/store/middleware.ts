import { call, fork } from '@redux-saga/core/effects';
import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';
import ApiSauce from '../../services/ApiSauceHandler';

const apiService = ({ dispatch }: { dispatch: Dispatch }) => (next: any) => (action: any) => {
  console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------------`);
  console.log(`🛠 LOG: 🚀 --> ~ file: middleware.ts ~ line 6 ~ apiService ~ action`, action);
  console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------------`);
  return next(action);
};

function* handleApi(callApi: (params: any) => void, payload: any) {
  try {
    const response = yield call(callApi, payload);
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: middleware.ts ~ line 20 ~ apiService ~ result`, response);
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
  } catch (error) {
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: middleware.ts ~ line 30 ~ function*handleApi ~ error`, error);
    console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------------`);
  }
}

function handleResponse(res: ApiResponse<unknown, unknown>, action: any, next: any) {
  next({
    type: `${action.type}_COMPLETED`,
    payload: res,
    meta: action.meta,
  });

  return new Promise((resolve) => resolve(res));
}

function handleErrors(res: ApiResponse<unknown, unknown>, action: any, next: any) {
  next({
    type: `${action.type}_FAILED`,
    payload: res,
    meta: action.meta,
  });
  return new Promise((resolve, reject) => reject(res));
}

export default apiService;
