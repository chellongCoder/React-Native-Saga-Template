import {
  PRODUCT_GET_DATA_PRODUCT_FAILD,
  PRODUCT_GET_DATA_PRODUCT_REQUEST,
  PRODUCT_GET_DATA_PRODUCT_SUCCESS,
} from '../types/product.type';

const initialState = {
  products: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case PRODUCT_GET_DATA_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
      };
    case PRODUCT_GET_DATA_PRODUCT_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
