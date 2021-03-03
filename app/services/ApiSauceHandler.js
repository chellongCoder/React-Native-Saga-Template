import apisauce from 'apisauce';
import { Alert, Platform } from 'react-native';

const messageError = {
  NETWORK_ERROR: 'Không thể kết nối đến máy chủ. Vui lòng thử lại!',
  CLIENT_ERROR: 'Không thể kết nối đến máy chủ. Vui lòng thử lại!',
};

export default class ApiSauce {
  constructor(baseURL) {
    this.apiSauce = apisauce.create({
      baseURL,
      timeout: 60 * 1000 * 5, // 60s * 5
    });
  }

  setHeader = (key, value) => this.apiSauce.setHeader(key, value);

  get = async (url, payload) => {
    return await this.handleResponse(this.apiSauce.get, { url, payload });
  };

  put = async (url, payload) => {
    return await this.handleResponse(this.apiSauce.put, { url, payload });
  };

  post = async (url, payload) => {
    return await this.handleResponse(this.apiSauce.post, { url, payload });
  };

  delete = async (url, payload) => {
    return await this.handleResponse(this.apiSauce.delete, {
      url,
      payload,
    });
  };

  handleResponse = async (apiRequest, params) => {
    let formdata = new FormData();
    formdata.append('device_type', Platform.OS);
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

  handleError = (res) => {
    if (!res.ok) {
      Alert.alert('Lỗi!', messageError[res.problem]);
    }
    return res.data;
  };
}
