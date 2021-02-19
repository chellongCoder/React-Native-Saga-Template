import { Appearance } from 'react-native';
import LightTheme from './light-theme';
import DarkTheme from './dark-theme';

const colorScheme = Appearance.getColorScheme();
const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;
console.log('====================================');
console.log('colorScheme', colorScheme);
console.log('====================================');
export { theme };
export * from './platform';
