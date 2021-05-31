import { CHECKIN_CHECKOUT_REQUEST, CHECKIN_CHECKOUT_SUCCESS, CHECKIN_CHECKOUT_FAILED } from '../types';

const initialState = {
  isLoading: false,
  error: null,
  Timekeeps: [],
  success: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CHECKIN_CHECKOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    }
    case CHECKIN_CHECKOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Timekeeps: payload.data,
      };
    }
    case CHECKIN_CHECKOUT_FAILED: {
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
