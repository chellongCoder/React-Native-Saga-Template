import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTab } from '../components';
import { screens } from '../config';
import Home from '../screens/home/index';
import History from '../screens/history/history';
import QRCode from '../screens/qr_code/qr_code';
import News from '../screens/news/news';
import Account from '../screens/account/account';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTabStack = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <BottomTabStack.Navigator
      headerMode="none"
      // tabBar={(props) => <BottomTab {...props} />}
      activeColor={'#f0edf6'}
      inactiveColor={'red'}
      barStyle={styles.barStyle}>
      <BottomTabStack.Screen
        name={screens.appStack}
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name={'appStack'}
        component={History}
        options={{
          tabBarLabel: 'Lịch sử',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name={'qrCode'}
        component={QRCode}
        options={{
          tabBarLabel: 'Quyét mã',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name={'news'}
        component={News}
        options={{
          tabBarLabel: 'Tin tức',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={size} />
          ),
        }}
      />
      <BottomTabStack.Screen
        name={'account'}
        component={Account}
        options={{
          tabBarLabel: 'tài khoản',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTabStack.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: { backgroundColor: '#694fad' },
});
