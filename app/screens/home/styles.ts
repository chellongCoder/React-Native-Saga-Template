import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useHomeStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        containerHome: {
          // backgroundColor: COLORS.BACKGROUND,
        },
        container: {
          flex: 1,
        },
        contentHome: {
          // backgroundColor: COLORS.BACKGROUND,
        },
        body: {
          flex: 1,
          backgroundColor: COLORS.BACKGROUND,
          borderTopLeftRadius: Platform.SizeScale(33),
          borderTopRightRadius: Platform.SizeScale(33),
          paddingTop: Platform.SizeScale(20),
          paddingLeft: Platform.SizeScale(15),
        },
        title: {
          fontSize: Platform.SizeScale(20),
          marginLeft: Platform.SizeScale(15),
          fontWeight: '500',
        },
        wrapSlider: {
          marginTop: Platform.SizeScale(5),
        },
      }),
    [],
  );
};
