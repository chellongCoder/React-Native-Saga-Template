import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { screens } from '../config';
import QRCode from '../screens/qr_code';
import Home from '../redux/connects/home.connect';
import History from '../screens/history';
import News from '../screens/news';
import Account from '../screens/account';
import { BottomTab } from '../components';

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
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <BottomTabStack.Screen
        name={screens.history}
        component={History}
        options={{
          tabBarLabel: 'Lịch sử',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="history" color={color} size={size} />,
        }}
      />
      <BottomTabStack.Screen
        name={screens.qrcode}
        component={QRCode}
        options={{
          tabBarLabel: 'Quét mã',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />,
        }}
      />
      <BottomTabStack.Screen
        name={screens.news}
        component={News}
        options={{
          tabBarLabel: 'Tin tức',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="newspaper" color={color} size={size} />,
        }}
      />
      <BottomTabStack.Screen
        name={screens.profile}
        component={Account}
        options={{
          tabBarLabel: 'tài khoản',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
      />
    </BottomTabStack.Navigator>
  );
}
