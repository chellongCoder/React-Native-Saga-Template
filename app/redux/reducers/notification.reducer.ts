import { NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, NOTIFICATION_FAILED } from '../types';

const initialState = {
  isLoading: false,
  error: null,
  Notifications: [],
  success: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case NOTIFICATION_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    }
    case NOTIFICATION_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Notifications: payload.data,
      };
    }
    case NOTIFICATION_FAILED: {
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
