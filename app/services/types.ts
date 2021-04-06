export enum HTTP_PROTOCOL {
  POST,
  GET,
  DELETE,
}

export type LOGIN_PARAMS = {
  server_key?: string;
  email: string;
  password: string;
  remember: 0 | 1;
  device_type: 'ANDROID' | 'IOS';
  device_token: string;
};

export interface ResponseT<T> {
  data: T;
  message: string;
  status: number;
}
