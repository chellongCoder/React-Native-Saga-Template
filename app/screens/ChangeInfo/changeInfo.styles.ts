import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform, theme } from '../../theme';
const { colors } = theme;
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  styHeader: {
    width: Platform.deviceWidth,
    height: Platform.deviceHeight / 5,
  },
  styWrapContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    top: -50,
    paddingHorizontal: 20,
    zIndex: 99,
  },
  styAva: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
  },
  styWrapAva: {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 80,
    overflow: 'hidden',
    top: -40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  styEdit: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 50,
    right: 0,
  },
  styWrapAcc: {
    alignSelf: 'center',
  },
  styTxtLabel: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: Platform.SizeScale(14),
    flex: 1,
  },
  styWrapBtn: {
    borderWidth: 1,
    borderColor: COLORS.GREEEN,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.GREEEN,
    marginTop: 50,
  },
});

export default styles;
