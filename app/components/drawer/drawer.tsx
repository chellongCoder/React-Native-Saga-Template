import React, { useCallback } from 'react';
import { I18nManager, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { drawerIcons } from '../../helpers';
import { Images } from '../../constants';
import { screens } from '../../config';
import { Text } from '../text';
import { authActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import styles from './drawer.styles';

function Drawer({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const { data: userInfo }: any = useSelector((state: RootState) => state.AuthData);

  const i18 = (key) => {
    return t(key);
  };

  // this should be called for language that need RTL for example for Arabic
  const changeLanguageWithRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');
    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'vi');
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    } else {
      await AsyncStorage.setItem('language', 'en');
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  };

  const changeLanguageWithoutRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');
    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'fr');
      RNRestart.Restart();
    } else {
      await AsyncStorage.setItem('language', 'en');
      RNRestart.Restart();
    }
  };

  const navigateToLogin = () => {
    navigation.navigate(screens.login);
  };

  const navigateToRegister = () => {
    navigation.navigate(screens.register);
  };

  const onLogout = useCallback(() => {
    dispatch(authActionsCreator.logoutRequest());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FastImage source={Images.icon} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.txtUserInfo}>name: {userInfo?.name}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={changeLanguageWithRTL}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.changeLanguage')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={navigateToLogin}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.login')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={navigateToRegister}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.register')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogout} style={styles.itemContainer}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.logout')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Drawer };
