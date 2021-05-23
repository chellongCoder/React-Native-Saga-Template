import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useSliderNewsStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {},
        wrapItem: {
          width: Platform.SizeScale(50),
          height: Platform.deviceHeight / 3,
          backgroundColor: COLORS.BACKGROUND,
        },
        nextSlide: {
          position: 'absolute',
          top: Platform.SizeScale(60),
          bottom: Platform.SizeScale(60),
          right: 0,
          justifyContent: 'center',
          paddingVertical: 10,
          alignItems: 'flex-end',
        },
        icoArrow: {
          width: Platform.SizeScale(25),
          height: Platform.SizeScale(25),
        },
      }),
    [],
  );
};
