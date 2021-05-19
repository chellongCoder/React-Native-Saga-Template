import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useBackgroundStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          position: 'absolute',
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundColor: COLORS.BACKGROUND,
        },
      }),
    [],
  );
};
