import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';
const { width } = Dimensions.get('window');
const { colors } = theme;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  buttonContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  styBorder: {
    width: width + 200,
    marginLeft: -100,
    marginTop: -190,
    borderWidth: 150,
    borderColor: 'transparent',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    zIndex: -1,
  },
  contaiMenu: {
    transform: [{ translateY: -100 }],
    flex: 1,
  },
  styWrapMenuMain: {
    borderRadius: 10,
    minHeight: 100,
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10,
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
    fontSize: 16,
  },
  styWrapItem: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  styImg: {
    height: 50,
    width: 50,
  },
  styTxtTitle: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  styWrapMenuContent: {
    minHeight: 200,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default styles;
