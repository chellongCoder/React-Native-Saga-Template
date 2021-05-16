import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useBasketStyle } from './styles';

const _BasketScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useBasketStyle();

  return (
    <View style={styles.container}>
      <Text>Basket Screen</Text>
    </View>
  );
};

export const BasketScreen = memo(_BasketScreen);
