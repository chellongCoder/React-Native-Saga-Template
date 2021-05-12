import {
  PRODUCT_GET_DATA_PRODUCT_FAILD,
  PRODUCT_GET_DATA_PRODUCT_REQUEST,
  PRODUCT_GET_DATA_PRODUCT_SUCCESS,
  SET_CHOICED_IMAGE,
} from '../types/product.type';

const initialState = {
  products: null,
  choicedImages: [],
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
    case SET_CHOICED_IMAGE:
      return {
        ...state,
        choicedImages: payload.images,
      };
    default:
      return state;
  }
}
