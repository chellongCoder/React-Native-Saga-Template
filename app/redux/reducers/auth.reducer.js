import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_ERROR,
} from '../types';

const initialState = {
  requesting: false,
  error: undefined,
  success: null,
  data: undefined,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: undefined,
        success: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: payload.user,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: undefined,
        success: null,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: payload.user,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
}
