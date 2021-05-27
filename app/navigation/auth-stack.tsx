import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES, screens } from '../config';
import { LoginScreen, RegisterScreen } from '../screens';
import WalkThrough from '../screens/walkthrough';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator headerMode="none">
      {/* <AuthStack.Screen name={ROUTES.walkthrough} component={WalkThrough} /> */}
      <AuthStack.Screen name={ROUTES.login} component={LoginScreen} />
      <AuthStack.Screen name={ROUTES.register} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
