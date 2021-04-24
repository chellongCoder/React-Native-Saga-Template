import { StyleSheet } from 'react-native';
import { Platform, theme } from '../../theme';
const { colors } = theme;
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    position: 'relative',
  },
  wrapHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Platform.deviceWidth,
    height: Platform.deviceHeight * 0.3,
    borderBottomRightRadius: 20,
  },
  styTxtHeader: {
    fontSize: Platform.SizeScale(16),
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: Platform.SizeScale(20),
    marginBottom: Platform.SizeScale(10),
  },
  styTxtHeaderName: {
    fontSize: Platform.SizeScale(16),
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: Platform.SizeScale(10),
  },
  styWrapContent: {
    paddingVertical: Platform.SizeScale(50),
    flex: 1,
  },
  styFlatlist: {
    paddingHorizontal: Platform.SizeScale(20),
  },
  styIconSetting: {
    width: Platform.SizeScale(20),
    height: Platform.SizeScale(20),
    marginHorizontal: Platform.SizeScale(10),
  },
  styIconRow: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
  styTxtName: {
    flex: 1,
    color: colors.black,
    fontWeight: 'bold',
  },
  styWrapElement: {
    backgroundColor: '#FFF',
    marginVertical: Platform.SizeScale(10),
    padding: Platform.SizeScale(8),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  styAvatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});

export default styles;
