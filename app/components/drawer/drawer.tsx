import React, { useCallback } from 'react';
import { I18nManager, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { drawerIcons } from '../../helpers';
import { screens } from '../../config';
import { Text } from '../text';
import { authActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import styles from './drawer.styles';

function Drawer({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const { data: userInfo, tempData }: any = useSelector((state: RootState) => state.AuthData);

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
    dispatch(authActionsCreator.logoutRequest({ token: tempData?.accessToken || userInfo?.accessToken }));
  }, [dispatch, tempData?.accessToken, userInfo?.accessToken]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <FastImage
          resizeMode="contain"
          source={{ uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' }}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text fontType="fontBold" style={styles.txtUserInfo}>
            name: {tempData?.name || userInfo?.name}
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {!userInfo && (
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            style={styles.itemContainer}
            onPress={navigateToLogin}>
            {drawerIcons.language}
            <Text style={styles.itemText}>{i18('Drawer.login')}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          style={styles.itemContainer}
          onPress={navigateToRegister}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.register')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          onPress={onLogout}
          style={styles.itemContainer}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.logout')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Drawer };
