import { createAction } from 'redux-actions';
import { CategoryByIdParamsT } from '../../screens/news/types';
import {
  NEW_CATEGORY_BY_FAILED,
  NEW_CATEGORY_BY_REQUEST,
  NEW_CATEGORY_BY_SUCCESS,
  NEW_CATEGORY_FAILED,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_SUCCESS,
} from '../types/news.type';

export const newsActionsCreator = {
  // action getNewCategory
  getNewCategoryRequest: createAction(NEW_CATEGORY_REQUEST),
  getNewCategorySuccess: createAction(NEW_CATEGORY_SUCCESS),
  getNewCategoryFailed: createAction(NEW_CATEGORY_FAILED),

  // action getNewByCategory
  getNewByCategoryRequest: createAction<CategoryByIdParamsT>(NEW_CATEGORY_BY_REQUEST),
  getNewByCategorySuccess: createAction(NEW_CATEGORY_BY_SUCCESS),
  getNewByCategoryFailed: createAction(NEW_CATEGORY_BY_FAILED),
};
