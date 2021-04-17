import { createAction } from 'redux-actions';
import { UploadFileT } from '../../types';
import { SET_CHOICED_IMAGE } from '../types';

export const productActionsCreator = {
  setChoicedImages: createAction<{ images: UploadFileT[] }>(SET_CHOICED_IMAGE),
};
