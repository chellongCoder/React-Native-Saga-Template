import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '../../theme';

export const useLoadingGlobalStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
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
