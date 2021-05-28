import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';
import { LOGIN_PARAMS } from './types';
const { API_URL, API_URL_DEV } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const login = (params: LOGIN_PARAMS) => {
  const API = new ApiSauce(params.url);
  const { url, ...data } = params;
  return API.post(API_CONFIG.LOGIN, {
    ...data,
  });
};

export const AuthApi = {
  login,
};
