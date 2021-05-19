import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useHomeStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: COLORS.BACKGROUND,
        },
        body: {
          flex: 1,
          backgroundColor: COLORS.BACKGROUND,
          borderTopLeftRadius: Platform.SizeScale(33),
          borderTopRightRadius: Platform.SizeScale(33),
          paddingTop: Platform.SizeScale(20),
          paddingLeft: Platform.SizeScale(20),
        },
      }),
    [],
  );
};
