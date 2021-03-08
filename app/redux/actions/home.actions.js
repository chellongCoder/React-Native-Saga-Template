import { createAction } from 'redux-actions';
import {
  GET_DATA_PRODUCT_REQUEST,
  GET_DATA_PRODUCT_SUCCESS,
  GET_DATA_PRODUCT_FAILD,
  GET_DATA_SLIDER_REQUEST,
  GET_DATA_SLIDER_SUCCESS,
  GET_DATA_SLIDER_FAILD,
} from '../types';

export const homeActionsCreator = {
  // action list products home
  getDataRequest: createAction(GET_DATA_PRODUCT_REQUEST),
  getDataSuccess: createAction(GET_DATA_PRODUCT_SUCCESS),
  getDataFaild: createAction(GET_DATA_PRODUCT_FAILD),
  // action sliders home
  getDataSlidersRequest: createAction(GET_DATA_SLIDER_REQUEST),
  getDataSlidersSuccess: createAction(GET_DATA_SLIDER_SUCCESS),
  getDataSlidersFaild: createAction(GET_DATA_SLIDER_FAILD),
};
