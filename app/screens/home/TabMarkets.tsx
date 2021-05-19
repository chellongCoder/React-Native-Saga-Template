import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles';

const _TabMarkets = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View>
      <Text>tab markets</Text>
    </View>
  );
};

export const TabMarkets = memo(_TabMarkets);
