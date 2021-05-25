import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';
const { API_URL, API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const getDataCrypto = (params: any) =>
  api.post(API_CONFIG.CRYPTO, {
    server_key: SERVER_KEY,
    ...params,
  });

export const CryptoApi = {
  getDataCrypto,
};
