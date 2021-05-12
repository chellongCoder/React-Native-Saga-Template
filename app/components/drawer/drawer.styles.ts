import { StyleSheet } from 'react-native';
import { COLORS, textStyle } from '../../constants';
import { Platform, theme } from '../../theme';
import fontFamily from '../../theme/font-family';

const { colors } = theme;

export default StyleSheet.create({
  container: { height: '100%', backgroundColor: COLORS.WHITE },
  image: {
    width: Platform.SizeScale(100),
    height: Platform.SizeScale(100),
    borderRadius: Platform.SizeScale(50),
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingLeft: 15,
    alignItems: 'center',
  },
  itemText: {
    color: colors.primary,
    paddingLeft: 10,
  },
  scrollViewContainer: { paddingTop: 30 },
  userInfo: {},
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
});
