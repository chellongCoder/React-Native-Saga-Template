/* eslint-disable no-unused-vars */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './app/index';
import './app/i18next/index';

AppRegistry.registerComponent(appName, () => App);
