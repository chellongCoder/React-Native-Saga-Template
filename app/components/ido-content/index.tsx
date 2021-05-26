import React, { memo } from 'react';
import { View } from 'react-native';
import { Text } from '..';
import { useIdoContentStyle } from './styles';

const _IdoContent = ({}) => {
  const styles = useIdoContentStyle();
  return (
    <View>
      <Text>IdoContent</Text>
    </View>
  );
};

export const IdoContent = memo(_IdoContent);
