import { MASTER_DATA_REQUEST, MASTER_DATA_SUCCESS, MASTER_DATA_FAILED } from '../types';

const initialState = {
  isLoading: false,
  error: null,
  masterDatas: null,
  success: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case MASTER_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    }
    case MASTER_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        masterDatas: payload.data,
      };
    }
    case MASTER_DATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    default:
      return state;
  }
}
