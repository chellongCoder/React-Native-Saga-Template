import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React from 'react';
import { Drawer } from '../components';
import { screens } from '../config';
import RegisterScreen from '../screens/register';
import { ProductScanScreen } from '../screens';
import BottomTabStack from './bottom-tab-stack';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  const renderContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    return <Drawer {...props} />;
  };
  return (
    <DrawerStack.Navigator drawerType="slide" drawerContent={renderContent}>
      <DrawerStack.Screen options={{ swipeEnabled: true }} name={screens.bottomTabStack} component={BottomTabStack} />
      <DrawerStack.Screen options={{ swipeEnabled: false }} name={screens.register} component={RegisterScreen} />
      <DrawerStack.Screen options={{ swipeEnabled: false }} name={screens.product_scan} component={ProductScanScreen} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
