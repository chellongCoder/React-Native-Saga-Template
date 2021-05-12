import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { Modal } from '../../components';
import { ModalContext } from './context';
import { ModalContextValue, ModalProps } from './types';

const ModalProvider = ({ children }: ModalProps) => {
  const [isShow, setIsShow] = useState(false);
  const [component, setComponent] = useState<ReactNode>();

  const onShow = useCallback((child: ReactNode) => {
    setComponent(child);
    setIsShow(true);
  }, []);

  const onHide = useCallback(() => {
    setIsShow(false);
  }, []);

  const contextValue = useMemo<ModalContextValue>(
    () => ({
      onShow,
      onHide,
    }),
    [onHide, onShow],
  );
  return (
    <>
      <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
      {isShow && <Modal {...{ component, onHide }} />}
    </>
  );
};

export default ModalProvider;
