import React, { memo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../text';
import { useCoinProfileEntryInfoStyle } from './styles';

const _CoinProfileEntryInfo = ({}) => {
  const navigation = useNavigation();
  const styles = useCoinProfileEntryInfoStyle();

  return (
    <View style={styles.container}>
      <Text>asd </Text>
      <Text>asd </Text>
      <Text>asd </Text>
      <Text>asd </Text>
    </View>
  );
};

export const CoinProfileEntryInfo = memo(_CoinProfileEntryInfo);
