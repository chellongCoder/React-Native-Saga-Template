import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CandlestickChart } from '../../components';
import { useHomeStyle } from './styles';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View style={styles.container}>
      <CandlestickChart />
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
