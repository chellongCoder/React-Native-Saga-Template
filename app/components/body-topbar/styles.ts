import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { COLORS } from '../../constants';
import { FontFamily } from '../../theme';
import { Platform } from '../../theme/platform';

export const useBodyTopbarStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          marginHorizontal: Platform.SizeScale(15),
          paddingVertical: Platform.SizeScale(5),
        },
        headBar: {
          flexDirection: 'row',
          marginHorizontal: Platform.SizeScale(5),
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          height: Platform.SizeScale(45),
        },
        bubbleDot: {
          width: Platform.SizeScale(10),
          height: Platform.SizeScale(10),
          backgroundColor: COLORS.WHITE,
          borderRadius: 5,
          marginLeft: Platform.SizeScale(13),
          marginRight: Platform.SizeScale(5),
          marginBottom: Platform.SizeScale(5),
        },
        thinking: {
          backgroundColor: COLORS.WHITE,
          width: '90%',
          height: Platform.SizeScale(45),
          borderRadius: Platform.SizeScale(30),
          justifyContent: 'center',
          alignItems: 'center',
        },
        messThinking: {
          paddingHorizontal: Platform.SizeScale(20),
          paddingVertical: Platform.SizeScale(5),
          fontFamily: FontFamily.fontLight,
        },
        bottomBar: {
          marginHorizontal: Platform.SizeScale(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        leftBar: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        avatar: {
          borderWidth: Platform.SizeScale(2),
          borderRadius: Platform.SizeScale(18),
          borderColor: COLORS.WHITE,
          width: Platform.SizeScale(35),
          height: Platform.SizeScale(35),
        },
        name: {
          marginHorizontal: Platform.SizeScale(5),
          color: COLORS.WHITE,
          fontSize: Platform.SizeScale(18),
          textTransform: 'uppercase',
          fontFamily: FontFamily.fontLight,
          fontWeight: 'bold',
        },
        rightBar: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        btnFeature: {
          marginLeft: Platform.SizeScale(30),
        },
        feature: {
          width: Platform.SizeScale(18),
          height: Platform.SizeScale(18),
        },
      }),
    [],
  );
};
