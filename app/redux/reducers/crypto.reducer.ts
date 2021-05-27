import {
CRYPTO_REQUEST, CRYPTO_SUCCESS , CRYPTO_FAILED 
} from '../types';

const initialState = {
  isLoading: false,
  error: null,
  Cryptos: [],
    success: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CRYPTO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    }
    case CRYPTO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Cryptos: payload.data,
      };
    }
    case CRYPTO_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
}
