import { createContext } from 'react';
import { ToastInfoContextValue } from './types';

export const ToastInfoContext = createContext<ToastInfoContextValue>({
  showInfo: () => {},
  showError: () => {},
  showSucess: () => {},
});
