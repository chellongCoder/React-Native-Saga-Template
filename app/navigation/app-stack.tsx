import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import Home from '../redux/connects/home.connect';
import HomeDetail from '../redux/connects/HomeDetailContainer';
import TabMain from './bottom-tab-stack';

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name={screens.TabMain} component={TabMain} />
      <MainStack.Screen name={screens.home} component={Home} />
      <MainStack.Screen name={screens.homeDetail} component={HomeDetail} />
    </MainStack.Navigator>
  );
}
