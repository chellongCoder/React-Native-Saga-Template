import { useContext } from 'react';
import { DropdownSelectionContext } from '../tools/dropdown-selection/context';

export const useDropdownSelection = () => {
  const payload = useContext(DropdownSelectionContext);
  if (!payload) {
    throw new Error('useDropdownSelection must be use within DropdownSelectionProvider.');
  }
  return payload;
};
