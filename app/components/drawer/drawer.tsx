import React from 'react';
import { I18nManager, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
import { drawerIcons } from '../../helpers';
import { images } from '../../constants';
import { screens } from '../../config';
import styles from './drawer.styles';

function Drawer({ navigation }) {
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };

  // this should be called for language that need RTL for example for Arabic
  const changeLanguageWithRTL = async () => {
    let currentLanguage = await AsyncStorage.getItem('language');
    if (currentLanguage == 'en') {
      await AsyncStorage.setItem('language', 'fr');
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

  return (
    <SafeAreaView style={styles.container}>
      <FastImage source={images.icon} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity style={styles.itemContainer} onPress={changeLanguageWithRTL}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.changeLanguage')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={navigateToLogin}>
          {drawerIcons.language}
          <Text style={styles.itemText}>{i18('Drawer.login')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Drawer };
