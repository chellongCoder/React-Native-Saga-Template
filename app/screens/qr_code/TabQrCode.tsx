import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { screens } from '../../config';

interface Props {
  navigation: StackNavigationProp<any>;
}

const TabQrCode = ({ navigation }: Props) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      navigation.navigate(screens.qrcode);
    });
    return unsubscribe;
  }, [navigation]);
  return <View />;
};

export default TabQrCode;
