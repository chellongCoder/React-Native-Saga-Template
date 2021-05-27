import { createAction } from 'redux-actions';
import { CRYPTO_REQUEST, CRYPTO_SUCCESS , CRYPTO_FAILED } from '../types';

export const cryptoActionsCreator = {
  // action get scan api
  getCryptoRequest: createAction(CRYPTO_REQUEST),
  getCryptoSuccess: createAction(CRYPTO_SUCCESS),
  getCryptoFailed: createAction(CRYPTO_FAILED),
};
