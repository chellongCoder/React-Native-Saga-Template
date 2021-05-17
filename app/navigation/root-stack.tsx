import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { ROUTES, screens } from '../config';
import { RootState } from '../redux/reducers';
import { BottomTabNavigator } from './bottom-tab-stack';
import AuthNavigator from './auth-stack';

const Stack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name={ROUTES.bottomTabStack} component={BottomTabNavigator} options={screenOptions} />
  </LoggedInStack.Navigator>
);

export const AppNavigator: React.FC<any> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.AuthData.isLoggedIn);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen name="HomeNavigator" component={LoggedInNavigator} options={screenOptions} />
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} options={screenOptions} />
        )}
      </Stack.Navigator>
    </>
  );
};
