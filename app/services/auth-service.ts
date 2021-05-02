import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';
import { LOGIN_PARAMS, LOGOUT_PARAMS, SIGNUP_PARAMS } from './types';

const { API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const login = (params: LOGIN_PARAMS) =>
  api.post(API_CONFIG.SAHATHA_LOGIN, {
    ...params,
    server_key: params.server_key || SERVER_KEY,
  });

const logout = (params: LOGOUT_PARAMS) =>
  api.post(API_CONFIG.SAHATHA_LOGOUT + `?token=${params.token}`, {
    server_key: SERVER_KEY,
  });

const getUserInfo = (params: any) =>
  api.post(API_CONFIG.USER_INFO, {
    ...params,
    server_key: SERVER_KEY,
  });

const signup = (params: SIGNUP_PARAMS) =>
  api.post(API_CONFIG.SAHATHA_SIGNUP, {
    server_key: SERVER_KEY,
    ...params,
  });

export const AuthAPI = {
  login,
  logout,
  getUserInfo,
  signup,
};
