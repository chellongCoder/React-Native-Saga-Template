import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  styWrapContent: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -80,
    overflow: 'hidden',
  },
  styWebView: {
    width: Platform.deviceWidth,
    height: Platform.deviceHeight + 100,
    margin: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
});
export default styles;
