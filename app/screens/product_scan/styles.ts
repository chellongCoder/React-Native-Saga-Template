import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '../../theme';

export const useProductDetailStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        content: {
          paddingHorizontal: Platform.SizeScale(20),
        },
      }),
    [],
  );
};
