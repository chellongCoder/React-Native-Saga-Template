import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useCommonButtonStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: Platform.SizeScale(109),
          height: Platform.SizeScale(25),
          borderRadius: Platform.SizeScale(20),
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: COLORS.BUTON_GREEN,
          marginHorizontal: Platform.SizeScale(5),
        },
      }),
    [],
  );
};
