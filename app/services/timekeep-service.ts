import { API_CONFIG } from '../config';
import AppConfig from '../config/app-config';
import { WorkoutParamsT } from '../screens/home/types';
import { ApiParamsT } from '../types';
import ApiSauce from './ApiSauceHandler';
const { API_URL, API_URL_DEV } = AppConfig;
const api_url = API_URL_DEV;
const api = ApiSauce.getInstance(api_url);

const postCheckinCheckout = (params: ApiParamsT) => {
  const API = new ApiSauce(params.url);
  const { url, ...data } = params;
  return API.post(API_CONFIG.CHECKIN_CHECKOUT, {
    ...data,
  });
};

const postWorkoutRegistration = (params: WorkoutParamsT) => {
  const API = new ApiSauce(params.url);
  const { url, ...data } = params;
  return API.post(API_CONFIG.SAVE_WORKOUT_REGISTRATION, {
    ...data,
  });
};

export const TimekeepApi = {
  postCheckinCheckout,
  postWorkoutRegistration,
};
