import { ReactNode } from 'react';
import { BACKGROUND_TYPE } from '../../components/background/types';

export interface BackgroundProps {
  children: ReactNode;
}

export interface BackgroundContextValue {
  changeBackground: (type: BACKGROUND_TYPE) => void;
  backgroundTab: BACKGROUND_TYPE;
  changeBackgroundTab: (type: BACKGROUND_TYPE) => void;
}
