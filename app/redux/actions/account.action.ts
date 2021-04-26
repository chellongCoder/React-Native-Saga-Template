import { createAction } from 'redux-actions';
import { UPDATE_INFO_REQUEST, UPDATE_INFO_SUCCESS, UPDATE_INFO_ERROR } from '../types';
import { UPDATE_INFO_PARAMS } from '../../services/types';

export const accountActionsCreator = {
  updateInfoRequest: createAction<UPDATE_INFO_PARAMS>(UPDATE_INFO_REQUEST),
  updateInfoSuccess: createAction(UPDATE_INFO_SUCCESS),
  updateInfoError: createAction(UPDATE_INFO_ERROR),
};
