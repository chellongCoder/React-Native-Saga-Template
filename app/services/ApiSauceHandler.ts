import apisauce, { ApiResponse, ApisauceInstance } from 'apisauce';
import { Method } from 'axios';
import { Alert, Platform } from 'react-native';

const messageError: any = {
  NETWORK_ERROR: 'Không thể kết nối đến máy chủ. Vui lòng thử lại!',
  CLIENT_ERROR: 'Không thể kết nối đến máy chủ. Vui lòng thử lại!',
};

export default class ApiSauce {
  private static instance: ApiSauce;
  apiSauce: ApisauceInstance;
  constructor(baseURL: string) {
    this.apiSauce = apisauce.create({
      baseURL,
      timeout: 60 * 1000 * 5, // 60s * 5
    });
  }

  public static getInstance = (baseURL: string): ApiSauce => {
    if (ApiSauce.instance == null) ApiSauce.instance = new ApiSauce(baseURL);
    return ApiSauce.instance;
  };

  setHeader = (key: string, value: string) => this.apiSauce.setHeader(key, value);

  get = async (url: string, payload: any) => {
    return await this.handleResponse(this.apiSauce.get, { url, payload });
  };

  put = async (url: string, payload: any) => {
    return await this.handleResponse(this.apiSauce.put, { url, payload });
  };

  post = async (url: string, payload: any) => {
    return await this.handleResponse(this.apiSauce.post, { url, payload });
  };

  delete = async (url: string, payload: any) => {
    return await this.handleResponse(this.apiSauce.delete, {
      url,
      payload,
    });
  };

  fetch = async (method: Method, url: string, payload: any) => {
    return await this.apiSauce.any({ method, url, params: payload });
  };

  handleResponse = async (apiRequest: (url: string, payload: any) => Promise<ApiResponse<any, any>>, params: any) => {
    let formdata = new FormData();
    const { payload } = params;
    formdata.append('device_type', Platform.OS);
    for (const key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) {
        const element = payload[key];
        console.log(
          `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------------------`,
        );
        console.log(
          `🛠 LOG: 🚀 --> ~ file: ApiSauceHandler.ts ~ line 57 ~ ApiSauce ~ handleResponse= ~ element`,
          element,
          key,
        );
        console.log(
          `🛠 LOG: 🚀 --> ---------------------------------------------------------------------------------------------------`,
        );
        if (key === 'files') {
          element.forEach((e, index) => {
            const file = {
              uri: e.uri,
              name: e.name,
              type: e.type,
            };
            formdata.append(`files[${index}]`, file);
          });
        } else {
          formdata.append(key, element);
        }
      }
    }
    console.log('formdata', formdata);
    const res = await apiRequest(params.url, formdata);
    console.log(
      '%cHANDLE_RESPONSE',
      res.ok ? 'color:white;background:green' : 'color:red;background:yellow',
      params.url,
      res,
    );
    return this.handleError(res);
  };

  handleError = (res: ApiResponse<any, any>) => {
    if (!res.ok) {
      Alert.alert('Lỗi!', messageError[res.problem]);
      return res;
    }
    return res.data;
  };
}
