import { createAction } from 'redux-actions';
import { ApiParamsT } from '../../types';
import {
  CHECKIN_CHECKOUT_REQUEST,
  CHECKIN_CHECKOUT_SUCCESS,
  CHECKIN_CHECKOUT_FAILED,
  WORKOUT_REGISTER_REQUEST,
  WORKOUT_REGISTER_SUCCESS,
  WORKOUT_REGISTER_FAILED,
} from '../types';

export const timekeepActionsCreator = {
  // action get scan api
  postCheckinCheckoutRequest: createAction<ApiParamsT>(CHECKIN_CHECKOUT_REQUEST),
  postCheckinCheckoutSuccess: createAction(CHECKIN_CHECKOUT_SUCCESS),
  postCheckinCheckoutFailed: createAction(CHECKIN_CHECKOUT_FAILED),

  workoutRegistrationRequest: createAction<ApiParamsT>(WORKOUT_REGISTER_REQUEST),
  workoutRegistrationSuccess: createAction(WORKOUT_REGISTER_SUCCESS),
  workoutRegistrationFailed: createAction(WORKOUT_REGISTER_FAILED),
};
