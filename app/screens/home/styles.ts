import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';

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
          // backgroundColor: COLORS.BACKGROUND,
        },
        contentHome: {
          // backgroundColor: COLORS.BACKGROUND,
        },
      }),
    [],
  );
};
