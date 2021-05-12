import { createAction } from 'redux-actions';
import { ProductSearchPramsT } from '../../screens/product/types';
import { UploadFileT } from '../../types';
import {
  LOADMORE_SEARCH_DATA_PRODUCT_FAILED,
  LOADMORE_SEARCH_DATA_PRODUCT_REQUEST,
  LOADMORE_SEARCH_DATA_PRODUCT_SUCCESS,
  SEARCH_DATA_PRODUCT_FAILED,
  SEARCH_DATA_PRODUCT_REQUEST,
  SEARCH_DATA_PRODUCT_SUCCESS,
  SET_CHOICED_IMAGE,
} from '../types';

export const productActionsCreator = {
  setChoicedImages: createAction<{ images: UploadFileT[] }>(SET_CHOICED_IMAGE),

  // action list products more home
  searchDataMoreRequest: createAction<ProductSearchPramsT>(SEARCH_DATA_PRODUCT_REQUEST),
  searchDataMoreSuccess: createAction(SEARCH_DATA_PRODUCT_SUCCESS),
  searchDataMoreFailed: createAction(SEARCH_DATA_PRODUCT_FAILED),

  // action list products more home
  loadmoreSearchDataMoreRequest: createAction<ProductSearchPramsT>(LOADMORE_SEARCH_DATA_PRODUCT_REQUEST),
  loadmoreSearchDataMoreSuccess: createAction(LOADMORE_SEARCH_DATA_PRODUCT_SUCCESS),
  loadmoreSearchDataMoreFailed: createAction(LOADMORE_SEARCH_DATA_PRODUCT_FAILED),
};
