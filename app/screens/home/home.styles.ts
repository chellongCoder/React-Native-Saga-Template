import { StyleSheet, Dimensions } from 'react-native';
import { Platform, theme } from '../../theme';
const { width, height } = Dimensions.get('window');
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
  },
  buttonCircle: {
    width: Platform.SizeScale(40),
    height: Platform.SizeScale(40),
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: Platform.SizeScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Platform.SizeScale(320),
    height: Platform.SizeScale(320),
  },
  buttonContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  styBorder: {
    width: width + 200,
    marginLeft: Platform.SizeScale(-100),
    marginTop: Platform.SizeScale(-190),
    borderWidth: Platform.SizeScale(150),
    borderColor: 'transparent',
    borderBottomRightRadius: Platform.SizeScale(300),
    borderBottomLeftRadius: Platform.SizeScale(300),
    zIndex: -1,
  },
  contaiMenu: {
    transform: [{ translateY: Platform.SizeScale(-100) }],
    flex: 1,
  },
  styWrapMenuMain: {
    borderRadius: 10,
    minHeight: Platform.SizeScale(100),
    backgroundColor: '#FFF',
    paddingHorizontal: Platform.SizeScale(10),
    margin: Platform.SizeScale(10),
    marginBottom: Platform.SizeScale(-20),
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  styTextMeMai: {
    flex: 1,
    fontSize: Platform.SizeScale(16),
  },
  styWrapItem: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: Platform.SizeScale(10),
  },
  styImg: {
    height: Platform.SizeScale(50),
    width: Platform.SizeScale(50),
  },
  styTxtTitle: {
    fontSize: Platform.SizeScale(12),
    color: '#333',
    textAlign: 'center',
  },
  styWrapMenuContent: {
    minHeight: Platform.SizeScale(200),
    paddingVertical: Platform.SizeScale(10),
    marginVertical: Platform.SizeScale(10),
  },
  styWrapHeader: {
    backgroundColor: colors.green,
    flex: 1,
    borderBottomRightRadius: Platform.SizeScale(20),
  },
  styFooter: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF',
    width,
    height: (height * 1) / 3,
    zIndex: -999,
  },
  styWrapErr: {
    flex: 1,
    height: height / 2,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styTxtReload: {
    textDecorationLine: 'underline',
  },
});

export default styles;
