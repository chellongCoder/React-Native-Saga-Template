import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
}

export interface ModalContextValue {
  onShow: (child: ReactNode) => void;
  onHide: () => void;
}
