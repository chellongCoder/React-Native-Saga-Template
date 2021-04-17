import React, { forwardRef, memo, useCallback, useImperativeHandle, useRef } from 'react';
import ActionSheet from 'react-native-actionsheet';
import { useBottomSheetStyle } from './styles';
import { BottomSheetPropsT } from './types';

const _BottomSheet = forwardRef(({ title, actions, onActionSelected }: BottomSheetPropsT, ref) => {
  const styles = useBottomSheetStyle();
  const actionSheetSelect: any = useRef();

  const onActionSelectDone = useCallback(
    (index: number) => {
      onActionSelected(index);
    },
    [onActionSelected],
  );

  const show = useCallback(() => {
    actionSheetSelect?.current?.show();
  }, []);

  useImperativeHandle(ref, () => ({
    show,
  }));

  return (
    <>
      <ActionSheet
        ref={actionSheetSelect}
        title={title}
        options={actions}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={onActionSelectDone}
      />
    </>
  );
});

export const BottomSheet = memo(_BottomSheet);
