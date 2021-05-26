import React, { memo } from 'react';
import { View } from 'react-native';
import { Text } from '..';
import { useCoinsContentStyle } from './styles';

const _CoinsContent = ({}) => {
  const styles = useCoinsContentStyle();
  return (
    <View>
      <Text>CoinsContent</Text>
    </View>
  );
};

export const CoinsContent = memo(_CoinsContent);
