import { Appearance } from 'react-native';
import LightTheme from './light-theme';
import DarkTheme from './dark-theme';
import FontFamily from './font-family';

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;
console.log('====================================');
console.log('colorScheme', colorScheme);
console.log('====================================');
export { theme, FontFamily };
export * from './platform';
export * from './font-family';
