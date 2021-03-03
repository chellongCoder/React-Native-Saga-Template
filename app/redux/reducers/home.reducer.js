import { GET_DATA_PRODUCT_REQUEST, GET_DATA_PRODUCT_SUCCESS, GET_DATA_PRODUCT_FAILD } from '../types/index';

const initialState = {
  products: null,
  isLoading: false,
  error: null,
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
        products: payload.data,
      };
    case GET_DATA_PRODUCT_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      break;
  }
}
