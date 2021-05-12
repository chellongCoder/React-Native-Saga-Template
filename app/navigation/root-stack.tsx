import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import QrCodeScreen from '../screens/qr_code';
import { CommentScreen, ProductDetailScreen, ProductScanScreen, RegisterScreen } from '../screens';
import LoginScreen from '../screens/login';
import { NewsScreenDetail } from '../screens/news_detail';
import AppStack from './app-stack';
import DrawerStack from './drawer-stack';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={screens.drawerStack} component={DrawerStack} />
      <RootStack.Screen name={screens.appStack} component={AppStack} />
      <RootStack.Screen name={screens.qrcode} component={QrCodeScreen} />
      <RootStack.Screen name={screens.product_detail} component={ProductDetailScreen} />
      <RootStack.Screen name={screens.comment} component={CommentScreen} />
      <RootStack.Screen name={screens.login} component={LoginScreen} />
      <RootStack.Screen name={screens.register} component={RegisterScreen} />
      <RootStack.Screen name={screens.newsDetail} component={NewsScreenDetail} />
      <RootStack.Screen name={screens.product_scan} component={ProductScanScreen} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
