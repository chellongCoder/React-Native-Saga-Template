import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Color from 'color';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useModalStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: Platform.deviceWidth,
          height: Platform.deviceHeight,
          backgroundColor: Color(COLORS.BLACK, 'hex').alpha(0.2).toString(),
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          backgroundColor: COLORS.WHITE,
          width: Platform.SizeScale(300),
          maxHeight: Platform.SizeScale(300),
          borderRadius: Platform.SizeScale(5),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,

          elevation: 5,
        },
        cancel: {
          position: 'absolute',
          top: -Platform.SizeScale(5),
          right: -Platform.SizeScale(5),
          width: Platform.SizeScale(20),
          height: Platform.SizeScale(20),
          borderRadius: Platform.SizeScale(10),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.BLACK,
        },
        txtCancel: {
          color: COLORS.WHITE,
        },
      }),
    [],
  );
};
