import { createContext } from 'react';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { BackgroundContextValue } from './types';

export const BackgroundContext = createContext<BackgroundContextValue>({
  changeBackground: () => {},
  changeBackgroundTab: () => {},
  backgroundTab: BACKGROUND_TYPE.NORMAL_BACKGROUND,
});
