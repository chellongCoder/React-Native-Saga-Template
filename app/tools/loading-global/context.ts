import { createContext } from 'react';
import { LoadingGlobalContextValue } from './types';

const NOOP = () => {};

export const LoadingGlobalContext = createContext<LoadingGlobalContextValue>({
  onShow: NOOP,
  onHide: NOOP,
});
