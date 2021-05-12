import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useItemNewStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        viewItem: {
          flexDirection: 'row',
          borderRadius: Platform.SizeScale(8),
          height: Platform.SizeScale(100),
          marginTop: 10,
          backgroundColor: COLORS.WHITE,
        },
        viewItemShadow: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.1,
          shadowRadius: Platform.SizeScale(8),

          elevation: 5,
        },
        viewImageWrapper: {
          width: Platform.deviceWidth * 0.25,
          overflow: 'hidden',
          borderTopLeftRadius: Platform.SizeScale(8),
          borderBottomLeftRadius: Platform.SizeScale(8),
        },
        viewRight: {
          flex: 1,
          paddingLeft: Platform.SizeScale(15),
          paddingRight: Platform.SizeScale(12),
          paddingVertical: Platform.SizeScale(8),
        },
        viewItemTitle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
        viewTextTitle: {
          padding: Platform.SizeScale(6),
          backgroundColor: COLORS.GREEEN,
          borderRadius: Platform.SizeScale(4),
          width: '60%',
        },
        viewTextContent: { paddingTop: Platform.SizeScale(4), marginRight: Platform.SizeScale(10) },
        textTitle: {
          color: COLORS.WHITE,
          fontSize: Platform.SizeScale(12),
        },
      }),
    [],
  );
};
