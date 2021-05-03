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
        button: {
          paddingVertical: Platform.SizeScale(10),
          marginTop: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(10),
          width: Platform.SizeScale(150),
          alignSelf: 'center',
        },
      }),
    [],
  );
};
