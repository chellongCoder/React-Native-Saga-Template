import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, theme } from '../../theme';

export const useStyleSlider = () => {
  const insets = useSafeAreaInsets();
  const { colors } = theme;

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: colors.white,
          alignItems: 'center',

          marginBottom: Platform.SizeScale(10),
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: colors.white,
        },
        paging: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          alignSelf: 'center',
          bottom: Platform.SizeScale(10),
          backgroundColor: 'transparent',
        },
        dot: {
          width: Platform.SizeScale(10),
          height: Platform.SizeScale(10),
          marginHorizontal: Platform.SizeScale(5),
        },
      }),
    [colors.white],
  );
};
