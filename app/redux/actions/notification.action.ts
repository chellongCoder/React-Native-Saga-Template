import { createAction } from 'redux-actions';
import { NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, NOTIFICATION_FAILED } from '../types';

export const notificationActionsCreator = {
  // action get scan api
  getNotificationRequest: createAction(NOTIFICATION_REQUEST),
  getNotificationSuccess: createAction(NOTIFICATION_SUCCESS),
  getNotificationFailed: createAction(NOTIFICATION_FAILED),
};
