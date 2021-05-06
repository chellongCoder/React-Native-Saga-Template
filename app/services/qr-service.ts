import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import { ActiveProductT, VerifyProductT } from '../screens/product_scan/types';
import ApiSauce from './ApiSauceHandler';

const { API_URL, API_URL_DEV, SERVER_KEY } = AppConfig;
const api_url = API_URL_DEV;
const api = new ApiSauce(api_url);

//get data scan qr code
const getDataScanQR = (params: any) =>
  api.post(`api/get_scan_api`, {
    server_key: SERVER_KEY,
    ...params,
  });

// get data suggest
interface ParamsSuggest {
  product_id: number;
}
const getDataSuggest = (params: ParamsSuggest) =>
  api.post(`api/related_products`, {
    server_key: SERVER_KEY,
    ...params,
  });

const verifyProduct = (params: VerifyProductT) =>
  api.post(API_CONFIG.CHECK_VERIFY_PRODUCT, {
    server_key: SERVER_KEY,
    ...params,
  });

const activeProduct = (params: ActiveProductT) =>
  api.post(API_CONFIG.CHECK_ACTIVE_PRODUCT + `?token=${params.token}`, {
    server_key: SERVER_KEY,
    ...params,
  });

// let's return back our create method as the default.
export const ApiQr = {
  getDataScanQR,
  getDataSuggest,
  verifyProduct,
  activeProduct,
};
