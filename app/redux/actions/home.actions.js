import { createAction } from 'redux-actions';
import { GET_DATA_PRODUCT_REQUEST, GET_DATA_PRODUCT_SUCCESS, GET_DATA_PRODUCT_FAILD } from '../types';

export const homeActionsCreator = {
  getDataRequest: createAction(GET_DATA_PRODUCT_REQUEST),
  getDataSuccess: createAction(GET_DATA_PRODUCT_SUCCESS),
  getDataFaild: createAction(GET_DATA_PRODUCT_FAILD),
};
