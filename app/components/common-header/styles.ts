import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from '../../theme';

export const useCommonHeaderStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingVertical: Platform.SizeScale(10),
        },
        textHeader: {
          fontSize: Platform.SizeScale(20),
          marginLeft: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
