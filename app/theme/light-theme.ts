import { Dimensions } from 'react-native';
import LightThemeColors from './light-theme-colors';

const { width, height } = Dimensions.get('screen');

export default {
  button: {
    backgroundColor: LightThemeColors.primary,
  },
  header: {
    backgroundColor: LightThemeColors.primary,
  },
  colors: {
    ...LightThemeColors,
  },
  screen: {
    width,
    height,
  },
  gradientGreen: ['#0A4742', '#058075'],
};
