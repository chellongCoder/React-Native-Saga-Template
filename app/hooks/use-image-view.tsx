import { useContext } from 'react';
import { ImageViewContext } from '../tools/image-view/context';

export const useImageView = () => {
  const payload = useContext(ImageViewContext);
  if (!payload) {
    throw new Error('useImageView must be use within ImageViewProvider.');
  }
  return payload;
};
