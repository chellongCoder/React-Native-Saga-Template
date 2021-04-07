import { GET_DATA_SCAN_REQUEST, GET_DATA_SCAN_SUCCESS, GET_DATA_SCAN_FAILD } from '../types/index';

const initialState = {
  product: {},
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_DATA_SCAN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SCAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload.product,
      };
    case GET_DATA_SCAN_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
