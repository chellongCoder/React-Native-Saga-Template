import { createAction } from 'redux-actions';
import { VerifyProductT } from '../../screens/product_scan/types';
import {
  GET_DATA_SCAN_REQUEST,
  GET_DATA_SCAN_SUCCESS,
  GET_DATA_SCAN_FAILD,
  VERIFY_PRODUCT_REQUEST,
  VERIFY_PRODUCT_SUCCESS,
  VERIFY_PRODUCT_FAILED,
} from '../types';

export const qrActionsCreator = {
  // action get scan api
  getDataScanRequest: createAction(GET_DATA_SCAN_REQUEST),
  getDataScanSuccess: createAction(GET_DATA_SCAN_SUCCESS),
  getDataScanFaild: createAction(GET_DATA_SCAN_FAILD),

  // action verify product
  verifyProductRequest: createAction<VerifyProductT>(VERIFY_PRODUCT_REQUEST),
  verifyProductSuccess: createAction(VERIFY_PRODUCT_SUCCESS),
  verifyProductFaild: createAction(VERIFY_PRODUCT_FAILED),
};
