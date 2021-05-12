import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform, theme } from '../../theme';

export const useStylesTextField = () => {
  const { colors } = theme;

  return useMemo(
    () =>
      StyleSheet.create({
        content: {
          borderRadius: Platform.SizeScale(10),
          borderColor: colors.gray,
          borderWidth: 1,
          height: Platform.SizeScale(40),
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: Platform.SizeScale(6),
          backgroundColor: colors.white,
        },
        input: {
          flexGrow: 1,
          padding: Platform.SizeScale(6),
          ...Platform.textBase,
          color: colors.black,
        },
        vLabel: {
          position: 'absolute',
          backgroundColor: colors.white,
          paddingHorizontal: Platform.SizeScale(6),
          left: '8%',
        },
        label: {
          color: colors.black,
        },
        prefix: {
          color: colors.black,
          marginLeft: Platform.SizeScale(6),
        },
        borderFocus: {
          color: colors.black,
        },
        iconHidden: {
          fontSize: Platform.SizeScale(18),
          color: colors.black,
          marginRight: Platform.SizeScale(3),
        },
      }),
    [colors],
  );
};
