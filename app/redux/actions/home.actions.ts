import { createAction } from 'redux-actions';
import { PostCommentParamsT } from '../../screens/product_detail/types';
import {
  GET_DATA_PRODUCT_REQUEST,
  GET_DATA_PRODUCT_SUCCESS,
  GET_DATA_PRODUCT_FAILD,
  GET_DATA_SLIDER_REQUEST,
  GET_DATA_SLIDER_SUCCESS,
  GET_DATA_SLIDER_FAILD,
  GET_DATA_PRODUCT_DETAIL_REQUEST,
  GET_DATA_PRODUCT_DETAIL_SUCCESS,
  GET_DATA_PRODUCT_DETAIL_FAILD,
  GET_DATA_PRODUCT_MORE_REQUEST,
  GET_DATA_PRODUCT_MORE_SUCCESS,
  GET_DATA_PRODUCT_MORE_FAILD,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILED,
} from '../types';

export const homeActionsCreator = {
  // action list products home
  getDataRequest: createAction(GET_DATA_PRODUCT_REQUEST),
  getDataSuccess: createAction(GET_DATA_PRODUCT_SUCCESS),
  getDataFaild: createAction(GET_DATA_PRODUCT_FAILD),
  // action list products more home
  getDataMoreRequest: createAction(GET_DATA_PRODUCT_MORE_REQUEST),
  getDataMoreSuccess: createAction(GET_DATA_PRODUCT_MORE_SUCCESS),
  getDataMoreFaild: createAction(GET_DATA_PRODUCT_MORE_FAILD),

  // action sliders home
  getDataSlidersRequest: createAction(GET_DATA_SLIDER_REQUEST),
  getDataSlidersSuccess: createAction(GET_DATA_SLIDER_SUCCESS),
  getDataSlidersFaild: createAction(GET_DATA_SLIDER_FAILD),

  // action get data product detail
  getDataProductDetailRequest: createAction(GET_DATA_PRODUCT_DETAIL_REQUEST),
  getDataProductDetailSuccess: createAction(GET_DATA_PRODUCT_DETAIL_SUCCESS),
  getDataProductDetailFaild: createAction(GET_DATA_PRODUCT_DETAIL_FAILD),

  // action post comment
  postCommentRequest: createAction<PostCommentParamsT>(POST_COMMENT_REQUEST),
  postCommentSuccess: createAction(POST_COMMENT_SUCCESS),
  postCommentFailed: createAction(POST_COMMENT_FAILED),
};
