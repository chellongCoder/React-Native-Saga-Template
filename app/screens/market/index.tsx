import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMarketStyle } from './styles'

const _MarketScreen = ({}) => {
const navigation = useNavigation();
const styles = useMarketStyle();

  return (
    <View>
      <Text>Market Screen</Text>
    </View>
  );
};

export const MarketScreen = memo(_MarketScreen);