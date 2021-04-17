import { StyleSheet } from 'react-native';
import { COLORS, CommonStyle, textStyle } from '../../constants';
import { Platform, theme } from '../../theme';

const { colors } = theme;

export default StyleSheet.create({
  container: {
    paddingHorizontal: Platform.SizeScale(20),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: Platform.SizeScale(60),
    backgroundColor: colors.white,
    zIndex: 999,
    ...CommonStyle.shadow,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.deviceWidth / 5,
  },
  tabText: { color: colors.gray, fontSize: Platform.SizeScale(10), paddingTop: Platform.SizeScale(3) },
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
    width: Platform.SizeScale(60),
    height: Platform.SizeScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.SizeScale(30),
    backgroundColor: COLORS.GREEEN,
    borderWidth: 4,
    borderColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -Platform.SizeScale(15),
    },
    shadowOpacity: 0.04,
    shadowRadius: 10,

    elevation: 6,
  },
  buttonQrcode: {
    width: Platform.SizeScale(35),
    height: Platform.SizeScale(35),
  },
});
