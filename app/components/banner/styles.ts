import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '../../theme';

export const useStyleBanner = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        imageContainer: {
          width: Platform.baseScreenWith,
          height: Platform.SizeScale(100),
        },
      }),
    [],
  );
};
