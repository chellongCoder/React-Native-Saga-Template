import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';
const { API_URL, API_URL_DEV } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const getDataMasterData = (params: any) =>
  api.get(API_CONFIG.MASTER_DATA, {
    ...params,
  });

export const MasterDataApi = {
  getDataMasterData,
};
