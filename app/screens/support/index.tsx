import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CoinBase } from '../../components';
import { useSupportStyle } from './styles';

const _SupportScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useSupportStyle();

  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <CoinBase />
    </View>
  );
};

export const SupportScreen = memo(_SupportScreen);
