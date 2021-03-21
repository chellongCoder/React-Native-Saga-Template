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
      width: 1,
      height: -0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
