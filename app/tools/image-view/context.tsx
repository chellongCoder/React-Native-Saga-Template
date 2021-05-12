import { createContext } from 'react';
import { ImageViewContextValue } from './types';
const NOOP = () => {};

export const ImageViewContext = createContext<ImageViewContextValue>({
  dismiss: NOOP,
  show: NOOP,
});
