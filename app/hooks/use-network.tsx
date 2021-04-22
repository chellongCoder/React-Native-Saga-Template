import { useContext } from 'react';
import { NetworkContext } from '../tools/network/context';

export const useNetwork = () => {
  const payload = useContext(NetworkContext);
  if (!payload) {
    throw new Error('useNetwork must be use within NetworkProvider.');
  }
  return payload;
};
