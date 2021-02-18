import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Drawer } from '../components';
import { screens } from '../config';
import LoginScreen from '../screens/login';
import BottomTabStack from './bottom-tab-stack';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  const renderContent = (props: any) => {
    return <Drawer {...props} />;
  };
  return (
    <DrawerStack.Navigator headerMode="none" drawerContent={renderContent}>
      <DrawerStack.Screen name={screens.bottomTabStack} component={BottomTabStack} />
      <DrawerStack.Screen name={screens.login} component={LoginScreen} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
