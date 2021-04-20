import { useContext } from 'react';
import { ToastInfoContext } from '../tools/toast-info/context';

export const useToastInfo = () => {
  const payload = useContext(ToastInfoContext);
  if (!payload) {
    throw new Error('useToastInfo must be use within ToastInfoProvider.');
  }
  return payload;
};
