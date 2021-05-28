import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useTableInoutStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        item: {
          backgroundColor: COLORS.WHITE,
          paddingLeft: Platform.SizeScale(10),
        },
        month: {
          position: 'absolute',
          top: Platform.SizeScale(100),
        },
      }),
    [],
  );
};
