import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import QrCodeScreen from '../screens/qr_code';
import AuthStack from './auth-stack';
import DrawerStack from './drawer-stack';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={screens.authStack} component={AuthStack} />
      <RootStack.Screen options={{ gestureEnabled: false }} name={screens.drawerStack} component={DrawerStack} />
      <RootStack.Screen name={screens.qrcode} component={QrCodeScreen} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
