import { useContext } from 'react';
import { BottomSheetContext } from '../tools/bottom-sheet/context';

export const useBottomSheet = () => {
  const payload = useContext(BottomSheetContext);
  if (!payload) {
    throw new Error('useAddCard must be use within BottomSheetProvider.');
  }
  return payload;
};
