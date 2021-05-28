import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useHomeStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        containerHome: {
          // backgroundColor: COLORS.BACKGROUND,
        },
        container: {
          flex: 1,
        },
        contentHome: {
          // backgroundColor: COLORS.BACKGROUND,
        },
        body: {
          flex: 1,
          backgroundColor: COLORS.BACKGROUND,
          borderTopLeftRadius: Platform.SizeScale(33),
          borderTopRightRadius: Platform.SizeScale(33),
          paddingTop: Platform.SizeScale(20),
          paddingLeft: Platform.SizeScale(15),
        },
        title: {
          fontSize: Platform.SizeScale(20),
          marginLeft: Platform.SizeScale(15),
          fontWeight: '500',
        },
        wrapSlider: {
          marginTop: Platform.SizeScale(5),
        },
        marketContainer: {},
        textMore: {},
        wrapMarkets: {},
        wrapHeadMarket: {
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginRight: Platform.SizeScale(15),
        },
        containerTabwork: {
          paddingHorizontal: Platform.SizeScale(20),
          paddingTop: Platform.SizeScale(20),
        },
        tabContainer: {
          borderWidth: StyleSheet.hairlineWidth,
          height: Platform.SizeScale(40),
          backgroundColor: COLORS.GRAY,
          borderRadius: Platform.SizeScale(10),
        },
        tabWorkDateLabel: {
          backgroundColor: COLORS.GRAY,
          flex: 4 / 10,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: Platform.SizeScale(10),
          borderBottomLeftRadius: Platform.SizeScale(10),
        },
        tabWorkDatetime: {
          backgroundColor: COLORS.WHITE,
          alignItems: 'center',
          flex: 6 / 10,
          borderLeftWidth: 1,
          borderRadius: Platform.SizeScale(10),
          height: '100%',
          justifyContent: 'center',
        },
        timerContainer: {
          alignItems: 'center',
          paddingTop: Platform.SizeScale(20),
        },
        captureContainer: {
          paddingHorizontal: Platform.SizeScale(20),
          paddingBottom: Platform.SizeScale(20),
        },
        imageCapture: {
          height: Platform.deviceHeight / 2,
          width: Platform.deviceHeight / 2,
          alignSelf: 'center',
          paddingVertical: Platform.SizeScale(20),
        },
      }),
    [],
  );
};
