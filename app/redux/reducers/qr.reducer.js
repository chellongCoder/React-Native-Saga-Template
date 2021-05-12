import {
  GET_DATA_SCAN_REQUEST,
  GET_DATA_SCAN_SUCCESS,
  GET_DATA_SCAN_FAILD,
  CHANGE_INPUT_VERIFY,
  VERIFY_PRODUCT_REQUEST,
  VERIFY_PRODUCT_SUCCESS,
  VERIFY_PRODUCT_FAILED,
  ACTIVE_PRODUCT_REQUEST,
  ACTIVE_PRODUCT_SUCCESS,
  ACTIVE_PRODUCT_FAILED,
  RESET,
} from '../types/index';

const initialState = {
  product: {},
  isLoading: false,
  error: null,
  idMaHoa: '',
  inputVerify: '',
  verifySuccess: undefined,
  verifyError: undefined,
  activeSuccess: undefined,
  activeError: undefined,
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
        idMaHoa: payload.id_mahoa,
      };
    case GET_DATA_SCAN_FAILD:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        idMaHoa: '',
      };
    case CHANGE_INPUT_VERIFY:
      return {
        ...state,
        inputVerify: payload,
      };
    case VERIFY_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        verifyError: undefined,
        verifySuccess: undefined,
      };
    case VERIFY_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        verifySuccess: payload,
      };
    case VERIFY_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        verifyError: payload.error,
      };
    case ACTIVE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        activeError: undefined,
        activeSuccess: undefined,
      };
    case ACTIVE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activeSuccess: payload,
      };
    case ACTIVE_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        activeError: payload.error,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
