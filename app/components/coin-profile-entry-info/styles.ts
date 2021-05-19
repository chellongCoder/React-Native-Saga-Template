import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useCoinProfileEntryInfoStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          // flexDirection: 'row',
        },
        tab: {
          paddingVertical: Platform.SizeScale(10),
        },
        icon: {
          backgroundColor: COLORS.GREEN2,
          padding: Platform.SizeScale(5),
          borderRadius: Platform.SizeScale(5),
        },
      }),
    [],
  );
};
