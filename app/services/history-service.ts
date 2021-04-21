import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';

const { API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = new ApiSauce(api_url);

// get data history scan
interface ParamsHistory {
  user_id: string | null;
}
const getDataHistoryScan = (params: ParamsHistory) =>
  api.post(`api/products_history`, {
    server_key: SERVER_KEY,
    ...params,
  });

// let's return back our create method as the default.
export const ApiHistory = {
  getDataHistoryScan,
};
