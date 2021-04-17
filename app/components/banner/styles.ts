import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '../../theme';

export const useStyleBanner = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        imageContainer: {
          width: Platform.deviceWidth - Platform.SizeScale(20),
          height: Platform.SizeScale(100),
          alignSelf: 'center',
          borderRadius: Platform.SizeScale(10),
          overflow: 'hidden',
        },
      }),
    [],
  );
};
