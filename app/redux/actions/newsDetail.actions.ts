import { createAction } from 'redux-actions';
import {
  NEWS_NOTIFICATION_FAILED,
  NEWS_NOTIFICATION_REQUEST,
  NEWS_NOTIFICATION_SUCCESS,
} from '../types/newsDetail.type';

export const newsDetailActionsCreator = {
  // action getNewsDetailCategory
  getNewsDetailNotificationRequest: createAction(NEWS_NOTIFICATION_REQUEST),
  getNewsDetailNotificationSuccess: createAction(NEWS_NOTIFICATION_SUCCESS),
  getNewsDetailNotificationFailed: createAction(NEWS_NOTIFICATION_FAILED),
};
