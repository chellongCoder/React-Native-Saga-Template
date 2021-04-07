import { createAction } from 'redux-actions';
import { GET_DATA_SCAN_REQUEST, GET_DATA_SCAN_SUCCESS, GET_DATA_SCAN_FAILD } from '../types';

export const qrActionsCreator = {
  // action get scan api
  getDataScanRequest: createAction(GET_DATA_SCAN_REQUEST),
  getDataScanSuccess: createAction(GET_DATA_SCAN_SUCCESS),
  getDataScanFaild: createAction(GET_DATA_SCAN_FAILD),
};
