import { useContext } from 'react';
import { ModalContext } from '../tools/modal/context';

export const useModal = () => {
  const payload = useContext(ModalContext);
  if (!payload) {
    throw new Error('useModal must be use within ModalProvider.');
  }
  return payload;
};
