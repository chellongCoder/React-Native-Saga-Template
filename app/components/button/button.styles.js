import { StyleSheet } from 'react-native';
import { Platform, theme } from '../../theme';
const { colors } = theme;

const styles = StyleSheet.create({
  label: { ...Platform.textBase },
  container: {
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});

export default styles;
