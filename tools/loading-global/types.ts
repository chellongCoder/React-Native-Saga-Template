import { ReactNode } from 'react';

export interface LoadingGlobalProps {
  children: ReactNode;
}

export interface LoadingGlobalContextValue {
  onShow: () => void;
  onHide: () => void;
}
