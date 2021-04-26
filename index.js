/* eslint-disable no-unused-vars */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App/index';
import './App/i18next/index';

AppRegistry.registerComponent(appName, () => App);
