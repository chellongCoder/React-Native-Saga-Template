import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useMarketWatchStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          marginTop: Platform.SizeScale(15),
        },
        wrapAllTab: {
          flexDirection: 'row',
          borderTopLeftRadius: Platform.SizeScale(10),
          marginTop: Platform.SizeScale(10),
        },
        headerTab: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: Platform.SizeScale(10),
        },
        headerTabOverlay: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: Platform.SizeScale(20),
          backgroundColor: COLORS.TRANSPARENT,
          zIndex: 1,
        },
        tabOverlayActive: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: Platform.SizeScale(20),
          backgroundColor: COLORS.WHITE,
          borderTopLeftRadius: Platform.SizeScale(10),
          borderTopRightRadius: Platform.SizeScale(10),
          zIndex: 30,
        },
        textHeader: {},
        overlayTab: {
          position: 'absolute',
          flexDirection: 'row',
          borderTopLeftRadius: Platform.SizeScale(10),
        },
        contentTab: {
          height: Platform.deviceHeight / 3.3,
          backgroundColor: COLORS.WHITE,
          borderBottomLeftRadius: Platform.SizeScale(10),
        },
      }),
    [],
  );
};
