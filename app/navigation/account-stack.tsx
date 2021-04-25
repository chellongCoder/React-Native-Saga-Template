import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import ChangeInfo from '../screens/ChangeInfo/index';
import Account from '../screens/account';

const AccountStack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <AccountStack.Navigator headerMode="none" initialRouteName={screens.profile}>
      <AccountStack.Screen name={screens.profile} component={Account} />
      <AccountStack.Screen name={screens.changeInfo} component={ChangeInfo} />
    </AccountStack.Navigator>
  );
}
