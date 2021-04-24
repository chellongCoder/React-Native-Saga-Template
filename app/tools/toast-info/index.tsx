import { Toast } from 'native-base';
import React, { useMemo } from 'react';
import { ToastInfo } from '../../components';
import { ToastInfoContext } from './context';
import { ToastInfoContextValue, ToastInfoProps } from './types';

const ToastInfoProvider = ({ children }: ToastInfoProps) => {
  const showInfo = (text: string) => {
    Toast.show({
      text,
      buttonText: '',
      duration: 2000,
    });
  };
  const showError = (text: string) => {
    Toast.show({
      text,
      buttonText: '',
      type: 'warning',
      duration: 2000,
    });
  };
  const showSucess = (text: string) => {
    Toast.show({
      text,
      buttonText: '',
      type: 'success',
      duration: 2000,
    });
  };
  const contextValue = useMemo<ToastInfoContextValue>(
    () => ({
      showInfo,
      showError,
      showSucess,
    }),
    [],
  );
  return (
    <>
      <ToastInfoContext.Provider value={contextValue}>{children}</ToastInfoContext.Provider>
      {<ToastInfo />}
    </>
  );
};

export default ToastInfoProvider;
