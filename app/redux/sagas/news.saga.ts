import { put, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from 'apisauce';
import { newsActionsCreator } from '../actions';
import { NewsApi } from '../../services';
import { callSafe } from './common.saga';

function* getDataNewsCategory() {
  try {
    const response: ApiResponse<any, any> = yield callSafe(NewsApi.getNewCategory, {});
    console.log(
      `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------------`,
    );
    console.log(`🛠 LOG: 🚀 --> ~ file: news.saga.ts ~ line 10 ~ function*getDataNewsCategory ~ response`, response);
    console.log(
      `🛠 LOG: 🚀 --> -------------------------------------------------------------------------------------------------`,
    );
    if (response.status === 200) {
      yield put(newsActionsCreator.getNewCategorySuccess(response));
    } else {
      yield put(newsActionsCreator.getNewCategoryFailed({ error: response.originalError }));
    }
  } catch (err) {
    yield put(newsActionsCreator.getNewCategoryFailed({ error: err ? err : 'User Login Failed!' }));
  }
}

export default function* () {
  yield takeEvery(newsActionsCreator.getNewCategoryRequest, getDataNewsCategory);
}
