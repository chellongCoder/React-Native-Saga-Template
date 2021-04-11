import React, { useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheet } from '../../components';
import { BottomSheetContext } from './context';
import { BottomSheetContextValue, BottomSheetProps } from './types';

const BottomSheetProvider = ({ children }: BottomSheetProps) => {
  const refActionSheet: any = useRef();

  const onActionSelected = useCallback((index: number) => {}, []);
  const onShowActionSheet = useCallback(() => {
    refActionSheet?.current.show();
  }, []);

  const contextValue = useMemo<BottomSheetContextValue>(
    () => ({
      onShowActionSheet,
    }),
    [onShowActionSheet],
  );

  return (
    <>
      <BottomSheetContext.Provider value={contextValue}>{children}</BottomSheetContext.Provider>
      {
        <BottomSheet
          ref={refActionSheet}
          {...{ onActionSelected }}
          title={'Chọn ảnh'}
          actions={['Chụp hình...', 'Chọn từ thư viện...', 'Huỷ']}
        />
      }
    </>
  );
};

export default BottomSheetProvider;
