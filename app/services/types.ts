export enum HTTP_PROTOCOL {
  POST,
  GET,
  DELETE,
}

export type LOGIN_PARAMS = {
  user_id: string;
  password: string;
  device_id: string;
  token: string;
  url: string;
};

export type LOGOUT_PARAMS = {
  token: string;
  url: string;
};

export type SIGNUP_PARAMS = {
  server_key?: string;
  device_token: string;
  email: string;
  phone: string;
  name: string;
  password: string;
  re_password: string;
  device_type?: string;
};

export interface ResponseT<T> {
  data: T;
  message: string;
  status_code: number;
  error?: any;
}

export type USER_INFO_PARAMS = {
  server_key?: string;
  token: string;
};

export interface ResponseProvinceT {
  results: {
    province_id: number;
    province_name: string;
    province_type: string;
  }[];
}

export type UPDATE_INFO_PARAMS = {
  token: string | null;
  name: string;
  address: string;
  birth_date: string;
  phone: string;
  email: string;
  avatar: any;
};
