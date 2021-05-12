import { ReactNode } from 'react';

export interface BottomSheetProps {
  children: ReactNode;
}

export interface BottomSheetContextValue {
  onShowActionSheet: () => void;
}
