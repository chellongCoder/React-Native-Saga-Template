import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { FontFamily, Platform } from '../../theme';

export const useNewsStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1, backgroundColor: '#FFF' },
        textShared: {
          fontSize: Platform.SizeScale(12),
          // marginRight: Platform.SizeScale(20),
          color: COLORS.darkBlue,
        },
        viewItemShadow: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,

          elevation: 5,
        },
        viewItem: {
          flexDirection: 'row',
          borderRadius: 8,
          height: Platform.SizeScale(100),
          marginTop: 10,
          backgroundColor: COLORS.WHITE,
        },
        viewImageWrapper: {
          width: Platform.deviceWidth * 0.25,
          overflow: 'hidden',
          borderTopLeftRadius: Platform.SizeScale(8),
          borderBottomLeftRadius: Platform.SizeScale(8),
        },
        viewRight: { flex: 1, paddingLeft: 15, paddingRight: 12, paddingVertical: 8 },
        viewItemTitle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
        textFocused: {
          borderBottomWidth: 1,
          borderBottomColor: 'blue',
        },
        textUnFocused: {},
        viewTextTitle: {
          padding: 6,
          backgroundColor: COLORS.GREEEN,
          borderRadius: 4,
          width: '60%',
        },
        flatlistContent: { flex: 1 },
        forwardScroll: {
          right: 0,
        },
        textTitle: {
          color: COLORS.WHITE,
          fontSize: Platform.SizeScale(12),
        },
        viewTextContent: { paddingTop: 4, marginRight: Platform.SizeScale(10) },
        viewCate: {
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: Platform.SizeScale(20),
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        viewSearchBar: { paddingBottom: 0, marginVertical: 10 },
        viewBanner: { backgroundColor: '#FFF', marginTop: 0 },
        arrowShared: {
          backgroundColor: 'rgba(3, 15, 252,0.5)',
          alignSelf: 'center',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 99,
          position: 'absolute',
        },
        styInput: {
          color: '#000',
          marginHorizontal: 5,
          fontFamily: FontFamily.fontRegular,
        },
        styWrapHeader: {
          justifyContent: 'space-between',
          marginTop: 15,
        },
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
