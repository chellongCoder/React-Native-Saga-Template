import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useCoinProfile1Style = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: COLORS.BACKGROUND,
          paddingHorizontal: Platform.SizeScale(15),
        },
        chart: {
          flex: 1,
        },
        leftBread: {
          alignItems: 'baseline',
        },
        rightBread: {
          backgroundColor: COLORS.BUTON_GREEN,
          paddingVertical: Platform.SizeScale(5),
          paddingHorizontal: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(20),
        },
        txtRightBread: {
          fontSize: Platform.SizeScale(12),
          color: COLORS.WHITE,
          marginRight: Platform.SizeScale(5),
        },
        txtPrice: {
          fontSize: Platform.SizeScale(30),
          marginRight: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
