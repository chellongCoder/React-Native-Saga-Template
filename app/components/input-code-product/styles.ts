import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';
import fontFamily from '../../theme/font-family';

export const useInputCodeProductStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        modal: {
          marginHorizontal: Platform.SizeScale(10),
          paddingVertical: Platform.SizeScale(10),
        },
        inpuCodeStyle: {
          borderWidth: 0,
          marginVertical: Platform.SizeScale(10),
          borderBottomWidth: Platform.SizeScale(0.5),
          borderRadius: 0,
          borderBottomColor: COLORS.CUSTOM_GRAY,
        },
        inputStyles: {
          fontSize: Platform.SizeScale(20),
        },
        buttonVerify: {
          backgroundColor: COLORS.GREEEN,
        },
        txtButtonVerify: {
          fontFamily: fontFamily.fontBold,
        },
        outButton: {
          alignItems: 'center',
          marginTop: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
