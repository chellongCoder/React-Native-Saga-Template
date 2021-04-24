import { ReactNode } from 'react';

export interface ToastInfoProps {
  children: ReactNode;
}

export interface ToastInfoContextValue {
  showInfo: (text: string) => void;
  showError: (text: string) => void;
}
