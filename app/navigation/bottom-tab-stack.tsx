import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ROUTES, screens } from '../config';
import { BottomTab } from '../components';
import { BasketScreen, CoinProfile1Screen, HomeScreen, MarketScreen, NewsScreen, SupportScreen } from '../screens';

const BottomTabStack = createBottomTabNavigator();

export const tabBar = (props: any) => <BottomTab {...props} />;

export const BottomTabNavigator = () => {
  return (
    <BottomTabStack.Navigator {...{ tabBar, initialRouteName: screens.home }}>
      <BottomTabStack.Screen name={ROUTES.news} component={NewsScreen} />
      <BottomTabStack.Screen name={ROUTES.market} component={MarketScreen} />
      <BottomTabStack.Screen name={ROUTES.home} component={HomeScreen} />
      <BottomTabStack.Screen name={ROUTES.basket} component={BasketScreen} />
      <BottomTabStack.Screen name={ROUTES.support} component={SupportScreen} />
    </BottomTabStack.Navigator>
  );
};
