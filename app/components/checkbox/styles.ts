import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useCheckboxStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        checkboxContainer: {
          width: Platform.SizeScale(20),
          height: Platform.SizeScale(20),
          borderRadius: Platform.SizeScale(10),
          borderWidth: StyleSheet.hairlineWidth,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: COLORS.GRAY,
        },
        checkbox: {
          width: Platform.SizeScale(16),
          height: Platform.SizeScale(16),
          backgroundColor: COLORS.GREEEN,
          borderRadius: Platform.SizeScale(16 / 2),
        },
      }),
    [],
  );
};
