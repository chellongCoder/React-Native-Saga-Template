import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import QrCodeScreen from '../screens/qr_code';
import { ProductDetailScreen } from '../screens';
import LoginScreen from '../screens/login';
import AuthStack from './auth-stack';
import AppStack from './app-stack';
import DrawerStack from './drawer-stack';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={screens.authStack} component={AuthStack} />
      <RootStack.Screen name={screens.appStack} component={AppStack} />
      <RootStack.Screen name={screens.drawerStack} component={DrawerStack} />
      <RootStack.Screen name={screens.qrcode} component={QrCodeScreen} />
      <RootStack.Screen name={screens.product_detail} component={ProductDetailScreen} />
      <RootStack.Screen name={screens.login} component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
