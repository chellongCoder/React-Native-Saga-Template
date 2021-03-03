import { GET_DATA_PRODUCT_REQUEST, GET_DATA_PRODUCT_SUCCESS, GET_DATA_PRODUCT_FAILD } from '../types';
import { createAction } from './node_modules/redux-actions';

export const homeActionsCreator = {
  getDataRequest: createAction(GET_DATA_PRODUCT_REQUEST),
  getDataSuccess: createAction(GET_DATA_PRODUCT_SUCCESS),
  getDataFaild: createAction(GET_DATA_PRODUCT_FAILD),
};
