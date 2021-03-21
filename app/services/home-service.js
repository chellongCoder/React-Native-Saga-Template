import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';

const { API_URL, API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = new ApiSauce(api_url);
//get data products home screen
const getDataProduct = (access_token, params) =>
  api.post(`api/products?access_token=${access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });
//get data sliders home screen
const getDataSliders = (access_token, params) =>
  api.post(`api/sliders?access_token=${access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

const getDataProductDetail = (access_token, params) =>
  api.post(`api/product_by_id?access_token=${access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

// let's return back our create method as the default.
export default {
  getDataProduct,
  getDataSliders,
  getDataProductDetail,
};
