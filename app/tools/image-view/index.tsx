import React, { useCallback, useMemo, useState } from 'react';
import { ImageView } from '../../components';
import { ImageViewContext } from './context';
import { ImageViewContextValue, ImageViewProps } from './types';

const ImageViewProvider = ({ children }: ImageViewProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);

  const handleShow = useCallback((_urls: string[]) => {
    setUrls(_urls);
    setIsVisible(true);
  }, []);

  const handleDismiss = useCallback(() => {
    setUrls([]);
    setIsVisible(false);
  }, []);

  const contextValue = useMemo<ImageViewContextValue>(
    () => ({
      show: handleShow,
      dismiss: handleDismiss,
    }),
    [handleDismiss, handleShow],
  );
  return (
    <>
      <ImageViewContext.Provider value={contextValue}>{children}</ImageViewContext.Provider>
      {<ImageView {...{ isVisible, urls, handleDismiss }} />}
    </>
  );
};

export default ImageViewProvider;
