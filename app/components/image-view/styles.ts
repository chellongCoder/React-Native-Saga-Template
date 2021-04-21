import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from '../../theme';

export const useImageViewStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          margin: 0,
          justifyContent: 'flex-end',
        },
        content: {
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
        },
      }),
    [],
  );
};
