import { useContext } from 'react';
import { BackgroundContext } from '../tools/background/context';

export const useBackground = () => {
  const payload = useContext(BackgroundContext);
  if (!payload) {
    throw new Error('useBackground must be use within BackgroundProvider.');
  }
  return payload;
};
