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
  POST_COMMENT_SUCCESS,
  POST_COMMENT_REQUEST,
  POST_COMMENT_FAILED,
  GET_DATA_PRODUCT_MORE_LOADMORE_REQUEST,
  GET_DATA_PRODUCT_MORE_LOADMORE_SUCCESS,
  GET_DATA_PRODUCT_MORE_LOADMORE_FAILD,
} from '../types/index';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  sliders: [],
  productDetail: [],
  productsMore: [],
  success: undefined,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  const isLoading = typeof payload?.isLoading === 'boolean' ? payload?.isLoading : true;
  switch (type) {
    case GET_DATA_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading,
        error: null,
        success: undefined,
      };
    case GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
      };
    case GET_DATA_PRODUCT_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        success: undefined,
      };
    case GET_DATA_SLIDER_REQUEST:
      return {
        ...state,
        isLoading,
        error: null,
        success: undefined,
      };
    case GET_DATA_SLIDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sliders: payload.sliders,
      };
    case GET_DATA_SLIDER_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        success: undefined,
      };
    case GET_DATA_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading,
        error: null,
        success: undefined,
      };
    case GET_DATA_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productDetail: payload.product,
      };
    case GET_DATA_PRODUCT_DETAIL_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        success: undefined,
      };
    case GET_DATA_PRODUCT_MORE_REQUEST:
      return {
        ...state,
        isLoading,
        error: null,
        success: undefined,
      };
    case GET_DATA_PRODUCT_MORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsMore: payload.product,
      };
    case GET_DATA_PRODUCT_MORE_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        success: undefined,
      };
    case GET_DATA_PRODUCT_MORE_LOADMORE_REQUEST:
      return {
        ...state,
        isLoading,
        error: null,
        success: undefined,
      };
    case GET_DATA_PRODUCT_MORE_LOADMORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsMore: [...state.productsMore, ...payload.product],
      };
    case GET_DATA_PRODUCT_MORE_LOADMORE_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        success: undefined,
      };
    case POST_COMMENT_REQUEST:
      return {
        ...state,
        isLoading,
        success: undefined,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload,
      };
    case POST_COMMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
      };
    default:
      return state;
  }
}
