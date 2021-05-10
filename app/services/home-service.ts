import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import { ProductSearchPramsT } from '../screens/product/types';
import { PostCommentParamsT } from '../screens/product_detail/types';
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

// search data product more
const searchDataProductMore = (params: ProductSearchPramsT) =>
  api.post(`api/products?access_token=${params?.access_token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

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

const postComment = (params: PostCommentParamsT) => {
  const { token } = params;
  delete params.token;
  return api.post(API_CONFIG.ADD_COMMENT_PRODUCT + `?token=${token}`, {
    server_key: SERVER_KEY,
    ...params,
  });
};

// let's return back our create method as the default.
export const Api = {
  getDataProduct,
  getDataProductMore,
  getDataSliders,
  getDataProductDetail,
  postComment,
  searchDataProductMore,
};
