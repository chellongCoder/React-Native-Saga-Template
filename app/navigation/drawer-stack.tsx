import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import React from 'react';
import { Drawer } from '../components';
import { screens } from '../config';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import { ProductDetailScreen, ProductScreen } from '../screens';
import BottomTabStack from './bottom-tab-stack';

const DrawerStack = createDrawerNavigator();

const DrawerNavigator = () => {
  const renderContent = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    return <Drawer {...props} />;
  };
  return (
    <DrawerStack.Navigator screenOptions={{ swipeEnabled: false }} drawerContent={renderContent}>
      <DrawerStack.Screen options={{ swipeEnabled: false }} name={screens.bottomTabStack} component={BottomTabStack} />
      <DrawerStack.Screen options={{ swipeEnabled: false }} name={screens.login} component={LoginScreen} />
      <DrawerStack.Screen options={{ swipeEnabled: false }} name={screens.register} component={RegisterScreen} />
      <DrawerStack.Screen options={{ swipeEnabled: false }} name={screens.product} component={ProductScreen} />
      <DrawerStack.Screen
        options={{ swipeEnabled: false }}
        name={screens.product_detail}
        component={ProductDetailScreen}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
