import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { FontFamily, Platform } from '../../theme';

export const useNotficationStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1, backgroundColor: COLORS.WHITE },
        viewSearchBar: { paddingBottom: 0, marginVertical: Platform.SizeScale(10) },
      }),
    [],
  );
};
