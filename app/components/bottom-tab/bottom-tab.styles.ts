import { StyleSheet } from 'react-native';
import { COLORS, CommonStyle, textStyle } from '../../constants';
import { Platform, theme } from '../../theme';

const { colors } = theme;

export default StyleSheet.create({
  container: {
    height: Platform.SizeScale(100),
    paddingTop: Platform.SizeScale(20),
    // backgroundColor: COLORS.BACKGROUND,
    zIndex: 999,
  },
  contentTab: {
    flexDirection: 'row',
    width: '90%',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignSelf: 'center',
    borderRadius: Platform.SizeScale(20),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: Platform.SizeScale(60),
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.deviceWidth / 5,
  },
  tabText: { color: COLORS.GREEN3, fontSize: Platform.SizeScale(10), paddingTop: Platform.SizeScale(3) },
  borderTab: {
    width: Platform.SizeScale(32),
    height: Platform.SizeScale(4),
    backgroundColor: colors.white,
    marginBottom: Platform.SizeScale(0),
    position: 'absolute',
    top: -5,
  },
  qrCodeContainer: {
    marginBottom: Platform.SizeScale(30),
    alignItems: 'center',
  },
  qrcodeButton: {
    width: Platform.SizeScale(55),
    height: Platform.SizeScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: Platform.SizeScale(30),
  },
  buttonQrcode: {
    width: Platform.SizeScale(50),
    height: Platform.SizeScale(50),
  },
});
