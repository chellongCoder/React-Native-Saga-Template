import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import LoginScreen from '../screens/login';
import WalkThrough from '../screens/walkthrough';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={screens.walkthrough} component={WalkThrough} />
      <AuthStack.Screen name={screens.login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
}
