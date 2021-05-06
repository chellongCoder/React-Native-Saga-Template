import { createAction } from 'redux-actions';
import { ActiveProductT, VerifyProductT } from '../../screens/product_scan/types';
import {
  GET_DATA_SCAN_REQUEST,
  GET_DATA_SCAN_SUCCESS,
  GET_DATA_SCAN_FAILD,
  VERIFY_PRODUCT_REQUEST,
  VERIFY_PRODUCT_SUCCESS,
  VERIFY_PRODUCT_FAILED,
  CHANGE_INPUT_VERIFY,
  ACTIVE_PRODUCT_REQUEST,
  ACTIVE_PRODUCT_SUCCESS,
  ACTIVE_PRODUCT_FAILED,
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

  // action verify product
  activeProductRequest: createAction<ActiveProductT>(ACTIVE_PRODUCT_REQUEST),
  activeProductSuccess: createAction(ACTIVE_PRODUCT_SUCCESS),
  activeProductFaild: createAction(ACTIVE_PRODUCT_FAILED),

  changeInputVerify: createAction(CHANGE_INPUT_VERIFY),
};
