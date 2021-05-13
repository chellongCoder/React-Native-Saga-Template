import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../types';

const initialState = {
  requesting: false,
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        requesting: true,
        isLoggedIn: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        requesting: false,
        isLoggedIn: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        requesting: false,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
