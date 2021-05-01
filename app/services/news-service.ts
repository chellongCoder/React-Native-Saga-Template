import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import { CategoryByIdParamsT } from '../screens/news/types';
import ApiSauce from './ApiSauceHandler';

const { API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const getNewCategory = (params: any) =>
  api.post(API_CONFIG.NEWS_CATEGORY, {
    ...params,
    server_key: SERVER_KEY,
  });

const getNewByCategory = (params: CategoryByIdParamsT) =>
  api.post(API_CONFIG.NEWS_BY_CATEGORY, {
    ...params,
    server_key: SERVER_KEY,
  });

const getNewsNotification = (params: any) =>
  api.post(API_CONFIG.NEWS_NOTIFICATION_DETAIL, {
    ...params,
    server_key: SERVER_KEY,
  });

export const NewsApi = {
  getNewCategory,
  getNewByCategory,
  getNewsNotification,
};
