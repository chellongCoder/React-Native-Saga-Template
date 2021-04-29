import { GET_DATA_SCAN_REQUEST, GET_DATA_SCAN_SUCCESS, GET_DATA_SCAN_FAILD } from '../types/index';

const initialState = {
  product: {},
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  console.log('🚀 ~ file: qr.reducer.js ~ line 11 ~ payload', payload);
  switch (type) {
    case GET_DATA_SCAN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_DATA_SCAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload.product,
        error: null,
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
