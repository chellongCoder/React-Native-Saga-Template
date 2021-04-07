import { createAction } from 'redux-actions';
import { NEW_CATEGORY_FAILED, NEW_CATEGORY_REQUEST, NEW_CATEGORY_SUCCESS } from '../types/news.type';

export const newsActionsCreator = {
  // action
  getNewCategoryRequest: createAction(NEW_CATEGORY_REQUEST),
  getNewCategorySuccess: createAction(NEW_CATEGORY_SUCCESS),
  getNewCategoryFailed: createAction(NEW_CATEGORY_FAILED),
};
