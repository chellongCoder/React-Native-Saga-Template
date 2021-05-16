import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CandlestickChart, CoinProfileEntryInfo } from '../../components';
import { useCoinProfile1Style } from './styles';

const _CoinProfile1Screen = ({}) => {
  const navigation = useNavigation();
  const styles = useCoinProfile1Style();

  return (
    <View style={styles.container}>
      <CandlestickChart />
      <CoinProfileEntryInfo />
    </View>
  );
};

export const CoinProfile1Screen = memo(_CoinProfile1Screen);
