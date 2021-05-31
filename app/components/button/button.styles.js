import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform, theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  label: { ...Platform.textBase, color: COLORS.WHITE, marginLeft: Platform.SizeScale(5) },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Platform.SizeScale(20),
  },
  button: {
    borderRadius: Platform.SizeScale(5),
  },
});

export default styles;
