import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React from 'react';
import { Drawer } from '../components';
import { screens } from '../config';
import { HomeScreen } from '../screens';
import { BottomTabNavigator } from './bottom-tab-stack';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  const renderContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    return <Drawer {...props} />;
  };
  return (
    <DrawerStack.Navigator statusBarAnimation="slide" drawerType="slide" drawerContent={renderContent}>
      <DrawerStack.Screen options={{ swipeEnabled: true }} name={screens.bottomTabStack} component={HomeScreen} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
