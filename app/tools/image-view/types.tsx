import { ReactNode } from 'react';

export interface ImageViewProps {
  children: ReactNode;
}

export interface ImageViewContextValue {
  show: (urls: string[]) => void;
  dismiss: () => void;
}

export interface ImageViewComponentProps {
  isVisible: boolean;
  urls: string[];
  handleDismiss: () => void;
}
