import { createAction } from 'redux-actions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../types';
import { LOGIN_PARAMS } from '../../services/types';

export const authActionsCreator = {
  loginRequest: createAction<LOGIN_PARAMS>(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_SUCCESS),
  loginError: createAction(LOGIN_ERROR),

  logoutRequest: createAction(LOGOUT_REQUEST),
  logoutSuccess: createAction(LOGOUT_SUCCESS),
  logoutError: createAction(LOGOUT_ERROR),
};
