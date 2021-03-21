import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommonStyle } from '../../constants';
import { Platform, theme } from '../../theme';

export const useStyleSearch = () => {
  const insets = useSafeAreaInsets();
  const { colors } = theme;

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingHorizontal: Platform.SizeScale(20),
          paddingBottom: Platform.SizeScale(20),
        },
        input: {
          borderColor: 'transparent',
          ...CommonStyle.shadow,
        },
      }),
    [],
  );
};
