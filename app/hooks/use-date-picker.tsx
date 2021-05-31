import { useContext } from 'react';
import { DatePickerContext } from '../tools/date-picker/context';

export const useDatePicker = () => {
  const payload = useContext(DatePickerContext);
  if (!payload) {
    throw new Error('useDatePicker must be use within DatePickerProvider.');
  }
  return payload;
};
