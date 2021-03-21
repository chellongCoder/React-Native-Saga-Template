import { call, fork } from '@redux-saga/core/effects';
import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';
import ApiSauce from '../../services/ApiSauceHandler';

const apiService = ({ dispatch }: { dispatch: Dispatch }) => (next: any) => (action: any) => {
  console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------------`);
  console.log(`🛠 LOG: 🚀 --> ~ file: middleware.ts ~ line 6 ~ apiService ~ action`, action);
  console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------------`);
  const result = Array.isArray(action) ? action.filter(Boolean).map(dispatch) : next(action);
  if (!action.meta) {
    return result;
  }

  const { payload, apiEndPoint, callApi } = action.meta;
  console.log('====================================');
  console.log(payload, apiEndPoint);
  console.log('====================================');
  // fork(handleApi(callApi, payload));
  return ApiSauce.getInstance()
    .fetch('GET', payload, apiEndPoint)
    .then((res: ApiResponse<unknown, unknown>) => handleResponse(res, action, next))
    .catch((err: ApiResponse<unknown, unknown>) => handleErrors(err, action, next));
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
