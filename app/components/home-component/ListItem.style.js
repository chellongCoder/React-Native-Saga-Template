import { StyleSheet, Dimensions } from 'react-native';
import { theme, FontFamily } from '../../theme';
const { width, height } = Dimensions.get('window');
const width_img_product = width / 1.9;
const height_img_product = (width - 80) / 2;
const { colors } = theme;

const styles = StyleSheet.create({
  contain: {
    margin: 20,
  },
  styLabel: {
    flex: 1,
    fontFamily: FontFamily.fontRegular,
    fontSize: 16,
    color: colors.gray,
  },
  styTxtMore: {
    fontSize: 14,
    fontFamily: FontFamily.fontRegular,
    color: colors.gray,
  },
  styWrapElement: {
    width: width_img_product,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  styImage: {
    width: width_img_product,
    height: height_img_product,
    borderRadius: 10,
    overflow: 'hidden',
  },
  styTxtName: {
    textTransform: 'capitalize',
    marginTop: 10,
    fontFamily: FontFamily.fontRegular,
    fontSize: 14,
  },
  styStar: {
    width: 12,
    height: 12,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  styWrapStar: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  styTxtAmount: {
    fontFamily: FontFamily.fontRegular,
    color: '#2095a2',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 14,
  },
  styTxtRate: {
    color: '#a7b1bf',
    fontFamily: FontFamily.fontRegular,
    fontSize: 12,
    marginHorizontal: 5,
  },
  styImgVer: {
    width: 15,
    height: 15,
  },
  styTxtVerify: {
    color: '#019444',
    fontSize: 12,
    fontFamily: FontFamily.fontRegular,
    marginHorizontal: 5,
  },
  styWrapInfo: {
    padding: 5,
    alignSelf: 'flex-start',
  },
});

export default styles;
