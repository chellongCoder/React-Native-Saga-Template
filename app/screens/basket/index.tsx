import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RainBow } from '../../components';
import { useBackground } from '../../hooks';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { useBasketStyle } from './styles';

const _BasketScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useBasketStyle();

  const background = useBackground();

  useEffect(() => {
    navigation.addListener('focus', () => {
      background.changeBackground(BACKGROUND_TYPE.NORMAL_BACKGROUND);
    });
    return () => {
      navigation.removeListener('focus', () => {});
    };
  }, [background, navigation]);

  return (
    <View style={styles.container}>
      <Text>Basket Screen</Text>
      <RainBow />
    </View>
  );
};

export const BasketScreen = memo(_BasketScreen);
