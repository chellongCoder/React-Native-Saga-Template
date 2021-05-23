import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { FontFamily, Platform } from '../../theme';

export const useItemNewStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        viewItem: {
          flexDirection: 'row',
          height: Platform.SizeScale(170),
          marginTop: 10,
          backgroundColor: COLORS.GREEEN,
          borderRadius: Platform.SizeScale(20),
          paddingTop: Platform.SizeScale(40),
        },
        viewImageWrapper: {
          width: Platform.deviceWidth * 0.25,
          overflow: 'hidden',
          borderTopLeftRadius: Platform.SizeScale(8),
          borderBottomLeftRadius: Platform.SizeScale(8),
        },
        viewContent: {
          flex: 1,
          paddingHorizontal: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(15),
        },
        viewItemTitle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
        viewTextTitle: {
          padding: Platform.SizeScale(6),
          width: '60%',
        },
        viewDescription: { paddingTop: Platform.SizeScale(4), marginRight: Platform.SizeScale(10) },
        textTitle: {
          fontSize: Platform.SizeScale(18),
          fontWeight: '700',
          color: COLORS.WHITE,
          paddingHorizontal: Platform.SizeScale(15),
        },
        textDescription: {
          fontSize: Platform.SizeScale(13),
          paddingHorizontal: Platform.SizeScale(15),
          fontWeight: '400',
          fontFamily: FontFamily.fontLight,
          color: COLORS.WHITE,
        },
        viewMore: {
          alignItems: 'flex-end',
        },
        textMore: {
          color: COLORS.WHITE,
          fontSize: Platform.SizeScale(13),
          padding: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
