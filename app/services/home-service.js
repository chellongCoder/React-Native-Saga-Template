import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';

const { API_URL, API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = new ApiSauce(api_url);

const getDataProduct = (access_token, params) =>
  api.post(`api/products?access_token=${access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

// let's return back our create method as the default.
export default {
  getDataProduct,
};
