import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform, theme } from '../../theme';

export const useSliderNewsStyle = () => {
  const insets = useSafeAreaInsets();
  const { colors } = theme;
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
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
