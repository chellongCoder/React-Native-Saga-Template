import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';
import fontFamily from '../../theme/font-family';

export const useItemNewsStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        textShared: {
          fontSize: Platform.SizeScale(12),
          color: COLORS.darkBlue,
        },
        textFocused: {
          borderBottomWidth: 1,
          borderBottomColor: COLORS.BLACK,
          fontFamily: fontFamily.fontBold,
        },
        textUnFocused: {},
      }),
    [],
  );
};
