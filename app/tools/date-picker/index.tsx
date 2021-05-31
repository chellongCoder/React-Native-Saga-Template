import React, { useCallback, useMemo, useState } from 'react';
import { DatePicker } from '../../components';
import { DatePickerContext } from './context';
import { DatePickerContextValue, DatePickerProps } from './types';

const DatePickerProvider = ({ children }: DatePickerProps) => {
  const contextValue = useMemo<DatePickerContextValue>(() => ({}), []);
  return (
    <>
      <DatePickerContext.Provider value={contextValue}>{children}</DatePickerContext.Provider>
      {<DatePicker />}
    </>
  );
};

export default DatePickerProvider;
