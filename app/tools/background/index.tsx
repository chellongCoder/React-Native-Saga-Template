import React, { useCallback, useMemo, useState } from 'react';
import { Background } from '../../components';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { BackgroundContext } from './context';
import { BackgroundContextValue, BackgroundProps } from './types';

const BackgroundProvider = ({ children }: BackgroundProps) => {
  const [backgroundType, setBackgroundType] = useState<BACKGROUND_TYPE>(BACKGROUND_TYPE.GREEN_GRADIENT);
  const [backgroundTab, setBackgroundTab] = useState<BACKGROUND_TYPE>(BACKGROUND_TYPE.NORMAL_BACKGROUND);
  const changeBackground = useCallback((type: BACKGROUND_TYPE) => {
    setBackgroundType(type);
  }, []);
  const changeBackgroundTab = useCallback((type: BACKGROUND_TYPE) => {
    setBackgroundTab(type);
  }, []);

  const contextValue = useMemo<BackgroundContextValue>(
    () => ({
      changeBackground,
      changeBackgroundTab,
      backgroundTab,
    }),
    [backgroundTab, changeBackground, changeBackgroundTab],
  );
  return (
    <>
      <BackgroundContext.Provider value={contextValue}>{children}</BackgroundContext.Provider>
      {<Background type={backgroundType} />}
    </>
  );
};

export default BackgroundProvider;
