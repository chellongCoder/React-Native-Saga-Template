import { StyleSheet } from 'react-native';
import { COLORS, textStyle } from '../../constants';
import { Platform, theme } from '../../theme';
import fontFamily from '../../theme/font-family';

const { colors } = theme;

export default StyleSheet.create({
  container: { height: '100%', backgroundColor: 'white' },
  image: {
    width: '100%',
    height: 200,
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
    ...textStyle.heading,
  },
  scrollViewContainer: { paddingTop: 30 },
  userInfo: {
    position: 'absolute',
    bottom: 0,
  },
  txtUserInfo: {
    color: COLORS.WHITE,
    fontFamily: fontFamily.fontBold,
    fontSize: Platform.SizeScale(20),
  },
});
