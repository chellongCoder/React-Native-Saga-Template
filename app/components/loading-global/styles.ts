import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from '../../theme';

export const useLoadingGlobalStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.baseScreenWith,
          height: Platform.baseScreenHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        imageContainer: {
          width: Platform.SizeScale(100),
          height: Platform.SizeScale(100),
        },
      }),
    [],
  );
};
