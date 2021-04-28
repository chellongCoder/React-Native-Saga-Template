import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

export const useNewsStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1, backgroundColor: '#FFF' },
        bottom: {
          backgroundColor: COLORS.GREEEN,
          borderTopLeftRadius: Platform.SizeScale(16),
          borderTopRightRadius: Platform.SizeScale(16),
        },
        imageBackground: {
          height: '35%',
          width: '100%',
        },
        viewItem: {
          flexDirection: 'row',
          borderRadius: 8,
          height: Platform.SizeScale(100),
          marginTop: 10,
          backgroundColor: COLORS.WHITE,
        },

        viewImageWrapper: { flex: 1 },
        viewHeader: { flexDirection: 'row', justifyContent: 'space-between' },
        btnHeader: { margin: Platform.SizeScale(16) },
        viewUnder: {
          position: 'absolute',
          bottom: 0,
          // backgroundColor: 'red',
          alignSelf: 'center',
          alignItems: 'center',
          paddingHorizontal: Platform.SizeScale(10),
        },
        viewIcon: { flexDirection: 'row' },
        share: {
          backgroundColor: COLORS.WHITE,
          padding: Platform.SizeScale(8),
          borderRadius: 100,
          marginHorizontal: Platform.SizeScale(4),
        },
        textUnder: {
          color: COLORS.WHITE,
          fontSize: Platform.SizeScale(18),
          textAlign: 'center',
          marginVertical: Platform.SizeScale(8),
        },
        timeUnder: {
          color: COLORS.GRAY1,
          fontSize: Platform.SizeScale(13),
          textAlign: 'center',
          marginVertical: Platform.SizeScale(16),
        },
        viewTextWrapper: {
          paddingHorizontal: Platform.SizeScale(16),
          paddingVertical: Platform.SizeScale(10),
        },
        textNews: {
          fontSize: Platform.SizeScale(16),
          color: COLORS.WHITE,
        },
        viewSliderWrapper: {
          width: Platform.SizeScale(100),
          height: Platform.SizeScale(12),
          borderRadius: 100,
          backgroundColor: 'rgba(255,255,255,0.3)',
          alignSelf: 'center',
        },
        dotSlider: {
          position: 'absolute',

          borderRadius: 100,
          backgroundColor: COLORS.WHITE,
          height: '100%',
        },
        itemWrapper: { width: Platform.SizeScale(90) },
        itemViewImage: {
          height: Platform.SizeScale(70),
          borderRadius: Platform.SizeScale(12),
          borderWidth: 1,
          borderColor: COLORS.WHITE,
          overflow: 'hidden',
          marginRight: Platform.SizeScale(12),
          marginVertical: Platform.SizeScale(2),
        },
        itemImage: { flex: 1, resizeMode: 'stretch' },
        itemText: { color: COLORS.WHITE, fontSize: Platform.SizeScale(12) },
        stySearch: {
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 8,
          marginHorizontal: 10,
          borderColor: '#FFF',
          backgroundColor: '#FFF',
          flex: 1,
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
      }),
    [],
  );
};
