import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';
import { LOGIN_PARAMS } from './types';

const { API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const login = (params: LOGIN_PARAMS) =>
  api.post(API_CONFIG.SAHATHA_LOGIN, {
    ...params,
    server_key: params.server_key || SERVER_KEY,
  });

const logout = (params: any) =>
  api.post(API_CONFIG.SAHATHA_LOGOUT, {
    ...params,
    server_key: SERVER_KEY,
  });

export const AuthAPI = {
  login,
  logout,
};
