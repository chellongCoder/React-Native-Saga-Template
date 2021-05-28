import { createAction } from 'redux-actions';
import { MASTER_DATA_REQUEST, MASTER_DATA_SUCCESS, MASTER_DATA_FAILED } from '../types';

export const masterDataActionsCreator = {
  // action get scan api
  getMasterDataRequest: createAction(MASTER_DATA_REQUEST),
  getMasterDataSuccess: createAction(MASTER_DATA_SUCCESS),
  getMasterDataFailed: createAction(MASTER_DATA_FAILED),
};
