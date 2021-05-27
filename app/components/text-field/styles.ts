import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform, theme } from '../../theme';

export const useStylesTextField = () => {
  const { colors } = theme;

  return useMemo(
    () =>
      StyleSheet.create({
        content: {
          borderRadius: Platform.SizeScale(5),
          borderColor: colors.gray,
          borderWidth: 1,
          height: Platform.SizeScale(40),
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: colors.white,
        },
        input: {
          flexGrow: 1,
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
        leftInput: {
          backgroundColor: COLORS.GRAY,
          height: Platform.SizeScale(38),
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: Platform.SizeScale(10),
          marginRight: Platform.SizeScale(10),
          borderTopLeftRadius: Platform.SizeScale(5),
          borderBottomLeftRadius: Platform.SizeScale(5),
        },
      }),
    [colors],
  );
};
