import { useContext } from 'react';
import { LoadingGlobalContext } from '../tools/loading-global/context';

export const useLoadingGlobal = () => {
  const payload = useContext(LoadingGlobalContext);
  if (!payload) {
    throw new Error('useAddCard must be use within AddCardProvider.');
  }
  return payload;
};
