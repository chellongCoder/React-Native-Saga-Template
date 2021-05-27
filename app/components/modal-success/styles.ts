import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useModalSuccessStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        modal: {
          marginHorizontal: Platform.SizeScale(10),
          paddingVertical: Platform.SizeScale(10),
        },
        outButton: {
          alignItems: 'center',
          marginTop: Platform.SizeScale(10),
        },
        image: {
          width: Platform.SizeScale(70),
          height: Platform.SizeScale(70),
          alignItems: 'center',
          alignSelf: 'center',
        },
        button: {
          width: Platform.SizeScale(120),
          alignSelf: 'center',
          backgroundColor: COLORS.GREEEN,
        },
        content: {
          alignItems: 'center',
          paddingVertical: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
