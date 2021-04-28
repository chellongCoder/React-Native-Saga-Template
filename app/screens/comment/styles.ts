import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useCommentStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        avatar: {
          width: Platform.SizeScale(50),
          height: Platform.SizeScale(50),
          borderRadius: Platform.SizeScale(25),
          overflow: 'hidden',
        },
        info: {
          marginLeft: Platform.SizeScale(10),
        },
        date: {
          color: COLORS.BOLD_GRAY,
        },
        txtRatingContent: {
          color: COLORS.lightBlue,
        },
        ratingContent: {
          borderWidth: 1,
          borderColor: COLORS.lightBlue,
          borderRadius: Platform.SizeScale(12),
          paddingHorizontal: Platform.SizeScale(5),
          paddingVertical: Platform.SizeScale(2),
          marginRight: Platform.SizeScale(10),
        },
        infoRateContainer: {
          alignItems: 'flex-start',
        },
        imageContainer: {
          marginTop: Platform.SizeScale(10),
        },
        image: {
          width: Platform.SizeScale(50),
          height: Platform.SizeScale(50),
          borderWidth: StyleSheet.hairlineWidth,
          borderRadius: Platform.SizeScale(5),
          borderColor: COLORS.GRAY,
          marginHorizontal: Platform.SizeScale(5),
        },
        comentContainer: {
          padding: Platform.SizeScale(15),
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: COLORS.GRAY,
        },
      }),
    [],
  );
};
