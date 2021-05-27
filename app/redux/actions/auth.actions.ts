import { createAction } from 'redux-actions';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../types';
import { LOGIN_PARAMS } from '../../services/types';

export const authActionsCreator = {
  loginRequest: createAction<LOGIN_PARAMS>(LOGIN_REQUEST),
  loginSuccess: createAction(LOGIN_SUCCESS),
  loginError: createAction(LOGIN_ERROR),
};
