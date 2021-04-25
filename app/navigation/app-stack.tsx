import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import Home from '../redux/connects/home.connect';
import HomeDetail from '../redux/connects/HomeDetailContainer';
import { ProductScreen } from '../screens';
import HomeMore from '../screens/home-more/HomeMore';
import History from '../screens/history';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={screens.home} component={Home} />
      <MainStack.Screen name={screens.homeDetail} component={HomeDetail} />
      <MainStack.Screen name={screens.homeMore} component={HomeMore} />
      <MainStack.Screen name={screens.product} component={ProductScreen} />
      <MainStack.Screen name={screens.historyScanCode} component={History} />
    </MainStack.Navigator>
  );
}
