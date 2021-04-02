import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useStylesRate = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
        },
        inActive: {
          color: COLORS.BOLD_GRAY,
          fontSize: Platform.SizeScale(12),
          marginHorizontal: Platform.SizeScale(1),
        },
        active: {
          color: COLORS.blue,
          fontSize: Platform.SizeScale(12),
          marginHorizontal: Platform.SizeScale(1),
        },
        star: {
          width: Platform.SizeScale(10),
          height: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
