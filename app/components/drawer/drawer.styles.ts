import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform, theme } from '../../theme';
import fontFamily from '../../theme/font-family';

const { colors } = theme;

export default StyleSheet.create({
  container: { height: '100%', backgroundColor: COLORS.blue },
  image: {
    width: Platform.SizeScale(100),
    height: Platform.SizeScale(100),
    borderRadius: Platform.SizeScale(50),
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: Platform.SizeScale(15),
  },
  itemText: {
    marginLeft: Platform.SizeScale(10),
  },
  scrollViewContainer: {},
  userInfo: {
    padding: Platform.SizeScale(15),
  },
  txtUserInfo: {
    color: COLORS.WHITE,
    fontFamily: fontFamily.fontBold,
    fontSize: Platform.SizeScale(20),
  },
  avatarContainer: {
    backgroundColor: COLORS.GREEEN,
    height: Platform.SizeScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  hr: {
    height: Platform.SizeScale(0.5),
    width: '100%',
    backgroundColor: COLORS.darkBlue,
  },
});
