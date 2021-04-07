import AppConfig from '../config/app-config';
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

// let's return back our create method as the default.
export const ApiQr = {
  getDataScanQR,
};
