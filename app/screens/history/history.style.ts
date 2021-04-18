import { StyleSheet } from 'react-native';
import { height, width } from '../../constants';
import { Platform, theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonCircle: {
    width: Platform.SizeScale(40),
    height: Platform.SizeScale(40),
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Platform.SizeScale(320),
    height: Platform.SizeScale(320),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styTxtHeader: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: Platform.SizeScale(20),
    marginBottom: Platform.SizeScale(10),
  },
  styImage: {
    width: Platform.SizeScale(50),
    height: Platform.SizeScale(50),
  },
  styImgStar: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
    marginHorizontal: Platform.SizeScale(3),
  },
  styCouCmt: {
    color: colors.gray,
    fontSize: 14,
    flex: 0.6,
  },
  styRateting: {
    fontSize: 14,
    marginHorizontal: Platform.SizeScale(3),
  },
  styBarCode: {
    color: colors.gray,
    fontSize: 14,
  },
  styVerify: {
    color: colors.green,
    fontSize: 12,
    fontWeight: '400',
    flex: 1,
  },
  styCompany: {
    fontSize: 12,
    flex: 1,
  },
  styWrapElement: {
    backgroundColor: colors.white,
    padding: 7,
    margin: 10,
    borderRadius: 5,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  styWrapEmpty: {
    flex: 1,
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styTxtEmpty: {
    color: theme.colors.gray,
  },
});

export default styles;
