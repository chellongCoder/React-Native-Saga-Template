import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import ApiSauce from './ApiSauceHandler';
const { API_URL_DEV, SERVER_KEY, HOST_PROVINCE } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

// const getUserInfo = (params: any) =>
//   api.post(API_CONFIG.USER_INFO, {
//     ...params,
//     server_key: SERVER_KEY,
//   });

const getListProvince = () =>
  fetch(`${HOST_PROVINCE}api/province`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json());

const getListDistrict = (province_id: string) =>
  fetch(`${HOST_PROVINCE}api/province/district/${province_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json());

const updateInfo = (params: any) =>
  api.post(`${api_url}${API_CONFIG.UPDATE_INFO}?token=${params.token}`, {
    ...params,
    server_key: SERVER_KEY,
  });

const getDataPolicy = (params: any) =>
  api.post(`${api_url}${API_CONFIG.POLICY}`, {
    ...params,
    server_key: SERVER_KEY,
  });

export const AccountAPI = {
  getListProvince,
  getListDistrict,
  updateInfo,
  getDataPolicy,
};
