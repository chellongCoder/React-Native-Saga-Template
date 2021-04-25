import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, theme } from '../../theme';

export const useStyleAppBars = () => {
  const insets = useSafeAreaInsets();
  const { colors } = theme;
  return useMemo(
    () =>
      StyleSheet.create({
        safeArea: {
          backgroundColor: colors.white,
          alignItems: 'center',
        },
        container: {
          width: '90%',
          height: Platform.headerHeight,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        imageContainer: {
          width: Platform.SizeScale(30),
          height: Platform.SizeScale(20),
        },
      }),
    [colors],
  );
};
