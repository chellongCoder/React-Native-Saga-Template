import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../types';

const initialState = {
  requesting: false,
  isLoggedIn: false,
  userInfo: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        requesting: true,
        isLoggedIn: false,
        userInfo: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        requesting: false,
        isLoggedIn: true,
        userInfo: payload.data,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        requesting: false,
        isLoggedIn: false,
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        requesting: false,
        isLoggedIn: false,
      };
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        requesting: false,
        isLoggedIn: true,
      };
    }
    default:
      return state;
  }
}
