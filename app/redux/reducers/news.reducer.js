import {
  NEW_CATEGORY_BY_FAILED,
  NEW_CATEGORY_BY_REQUEST,
  NEW_CATEGORY_BY_SUCCESS,
  NEW_CATEGORY_FAILED,
  NEW_CATEGORY_REQUEST,
  NEW_CATEGORY_SUCCESS,
} from '../types/news.type';

const initialState = {
  isLoading: false,
  error: null,
  newCategories: [],
  news: [],
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case NEW_CATEGORY_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    }
    case NEW_CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        newCategories: payload.news_category,
      };
    }
    case NEW_CATEGORY_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }

    case NEW_CATEGORY_BY_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: null,
      };
    }
    case NEW_CATEGORY_BY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        news: payload.news_category,
      };
    }
    case NEW_CATEGORY_BY_FAILED: {
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
