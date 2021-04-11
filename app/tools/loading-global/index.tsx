import React, { useCallback, useMemo, useState } from 'react';
import { LoadingGlobal } from '../../components';
import { LoadingGlobalContext } from './context';
import { LoadingGlobalContextValue, LoadingGlobalProps } from './types';

const LoadingGlobalProvider = ({ children }: LoadingGlobalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const onShow = useCallback(() => {
    setIsLoading(true);
  }, []);
  const onHide = useCallback(() => {
    setIsLoading(false);
  }, []);
  const contextValue = useMemo<LoadingGlobalContextValue>(
    () => ({
      onShow,
      onHide,
    }),
    [onHide, onShow],
  );
  return (
    <>
      <LoadingGlobalContext.Provider value={contextValue}>{children}</LoadingGlobalContext.Provider>
      {isLoading && <LoadingGlobal />}
    </>
  );
};

export default LoadingGlobalProvider;
