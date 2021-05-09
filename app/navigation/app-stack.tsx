import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import Home from '../redux/connects/home.connect';
import HomeDetail from '../redux/connects/HomeDetailContainer';
import { ProductScreen } from '../screens';
import History from '../screens/history';
import SearchScreen from '../screens/search/index';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={screens.home} component={Home} />
      <MainStack.Screen name={screens.homeDetail} component={HomeDetail} />
      <MainStack.Screen name={screens.product} component={ProductScreen} />
      <MainStack.Screen name={screens.historyScanCode} component={History} />
      <MainStack.Screen name={screens.search} component={SearchScreen} />
    </MainStack.Navigator>
  );
}
