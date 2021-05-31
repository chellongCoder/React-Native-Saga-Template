import { ApiParamsT } from '../../types';

export interface WorkoutParamsT extends ApiParamsT {
  start_time: string;
  end_time: string;
  reason: string;
  comment: string;
  user_id: string;
  date: string;
}
