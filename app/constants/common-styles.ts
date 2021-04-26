import { Dimensions, Platform, StyleSheet } from 'react-native';

export const os = Platform.OS;

export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('screen');

const DESIGN_DIMENSIONS = { width: 375, height: 812 };

export const getPercentageHeight = (heightParam) => {
  return Platform.select({
    ios: height * (heightParam / DESIGN_DIMENSIONS.height),
    android: heightParam,
  });
};

export const getPercentageWidth = (widthParam) => {
  return Platform.select({
    ios: width * (widthParam / DESIGN_DIMENSIONS.width),
    android: widthParam,
  });
};

export const textStyle = {
  small: {
    fontSize: 2,
    fontWeight: '200',
  },
  medium: {
    fontSize: 14,
    fontWeight: '300',
  },
  normal: {
    fontSize: 16,
    fontWeight: '400',
  },
  heading: {
    fontSize: 18,
    fontWeight: '100',
  },
};

export const CommonStyle = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  paddingTop: {
    paddingTop: getPercentageWidth(5),
  },
  smallIcon: {
    width: getPercentageWidth(10),
    height: getPercentageWidth(10),
  },
  normalIcon: {
    width: getPercentageWidth(20),
    height: getPercentageWidth(20),
  },
  largeIcon: {
    width: getPercentageWidth(40),
    height: getPercentageWidth(40),
  },
  paddingTop10: {
    paddingTop: getPercentageWidth(10),
  },
});
