import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { screens } from '../config';
import Home from '../redux/connects/home.connect';
import Notification from '../screens/notification';
import { BottomTab } from '../components';
import TabQrCode from '../screens/qr_code/TabQrCode';
import { NewsScreen } from '../screens';
import AccountStack from './account-stack';
const BottomTabStack = createBottomTabNavigator();

export const tabBar = (props: any) => <BottomTab {...props} />;

export default function TabNavigator() {
  return (
    <BottomTabStack.Navigator {...{ tabBar }}>
      <BottomTabStack.Screen
        name={screens.home}
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      />
      <BottomTabStack.Screen
        name={screens.news}
        component={NewsScreen}
        options={{
          tabBarLabel: 'Tin tức',
        }}
      />
      <BottomTabStack.Screen
        name={screens.tabqrcode}
        component={TabQrCode}
        options={{
          tabBarLabel: 'Quét mã',
        }}
      />
      <BottomTabStack.Screen
        name={screens.notification}
        component={Notification}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />
      <BottomTabStack.Screen
        name={screens.profile}
        component={AccountStack}
        options={{
          tabBarLabel: 'tài khoản',
        }}
      />
    </BottomTabStack.Navigator>
  );
}
