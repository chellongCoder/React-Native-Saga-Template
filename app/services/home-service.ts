import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';

const { API_URL, API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);
//get data products home screen
const getDataProduct = (access_token: string, params: any) =>
  api.post(`api/get_home_category?access_token=${access_token}`, {
    server_key: SERVER_KEY,
  });

// get data product more
const getDataProductMore = (access_token: string, params: any) =>
  api.post(`api/products?access_token=${access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

const getDataProducts = (params: any) => {
  console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------------`);
  console.log(`🛠 LOG: 🚀 --> ~ file: home-service.ts ~ line 15 ~ getDataProducts ~ params`, params);
  console.log(`🛠 LOG: 🚀 --> -----------------------------------------------------------------------------------`);
};

//get data sliders home screen
const getDataSliders = (access_token: string, params: any) =>
  api.post(`api/sliders?access_token=${access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

const getDataProductDetail = (params: any) =>
  api.post(API_CONFIG.PRODUCT_BY_ID, {
    server_key: SERVER_KEY,
    ...params,
  });

// let's return back our create method as the default.
export const Api = {
  getDataProduct,
  getDataProductMore,
  getDataSliders,
  getDataProductDetail,
  getDataProducts,
};
