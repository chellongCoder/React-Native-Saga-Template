import { StyleSheet } from 'react-native';
import { textStyle } from '../../constants';
import { Platform, theme } from '../../theme';

const { colors } = theme;

export default StyleSheet.create({
  container: {
    paddingHorizontal: Platform.SizeScale(20),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.SizeScale(60),
    backgroundColor: colors.primary,
  },
  tab: { justifyContent: 'center', alignItems: 'center' },
  tabText: { color: colors.white, ...textStyle.medium, paddingTop: Platform.SizeScale(3) },
  borderTab: {
    width: Platform.SizeScale(32),
    height: Platform.SizeScale(4),
    backgroundColor: colors.white,
    marginBottom: Platform.SizeScale(0),
    position: 'absolute',
    top: -5,
  },
});
