import { StyleSheet, Dimensions } from 'react-native';
import { theme, FontFamily, Platform } from '../../theme';
const { width, height } = Dimensions.get('window');
const width_img_product = width / 1.9;
const height_img_product = (width - 80) / 2;
const { colors } = theme;

const styles = StyleSheet.create({
  contain: {
    paddingHorizontal: Platform.SizeScale(20),
    paddingVertical: Platform.SizeScale(10),
  },
  styLabel: {
    flex: 1,
    fontFamily: FontFamily.fontRegular,
    fontSize: Platform.SizeScale(16),
    color: colors.gray,
  },
  styTxtMore: {
    fontSize: Platform.SizeScale(16),
    fontFamily: FontFamily.fontRegular,
    color: colors.gray,
  },
  styWrapElement: {
    width: width_img_product,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Platform.SizeScale(20),
    marginVertical: Platform.SizeScale(10),
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
    marginTop: Platform.SizeScale(10),
    fontFamily: FontFamily.fontRegular,
    fontSize: Platform.SizeScale(14),
    minHeight: 35,
  },
  styStar: {
    width: Platform.SizeScale(12),
    height: Platform.SizeScale(12),
    marginHorizontal: Platform.SizeScale(2),
    marginVertical: Platform.SizeScale(5),
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
    marginBottom: Platform.SizeScale(5),
    fontSize: Platform.SizeScale(14),
  },
  styTxtRate: {
    color: '#a7b1bf',
    fontFamily: FontFamily.fontRegular,
    fontSize: Platform.SizeScale(12),
    marginHorizontal: Platform.SizeScale(5),
  },
  styImgVer: {
    width: Platform.SizeScale(15),
    height: Platform.SizeScale(15),
  },
  styTxtVerify: {
    color: '#019444',
    fontSize: Platform.SizeScale(12),
    fontFamily: FontFamily.fontRegular,
    marginHorizontal: Platform.SizeScale(5),
  },
  styWrapInfo: {
    padding: Platform.SizeScale(5),
    alignSelf: 'flex-start',
  },
  styWrapEmpty: {
    height: height / 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
