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
} from '../types/index';

const initialState = {
  products: null,
  isLoading: false,
  error: null,
  sliders: null,
  productDetail: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_DATA_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.product,
      };
    case GET_DATA_PRODUCT_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case GET_DATA_SLIDER_REQUEST:
      return {
        ...state,
        isLoading: true,
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
      };
    case GET_DATA_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
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
      };
    default:
      return state;
  }
}
