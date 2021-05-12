import { StyleSheet } from 'react-native';
import { FontFamily, Platform, theme } from '../theme';
const { colors } = theme;
const styles = StyleSheet.create({
  contain: {
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    paddingVertical: 3,
  },
  styWrapHeader: {
    justifyContent: 'space-between',
    marginTop: 15,
  },
  stySearch: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 8 : 0,
    marginHorizontal: 10,
    borderColor: colors.white,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  styInput: {
    color: colors.black,
    marginHorizontal: 5,
    fontFamily: FontFamily.fontRegular,
    flex: 1,
  },
});

export default styles;
