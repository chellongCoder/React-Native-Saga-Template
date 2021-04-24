import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNetworkStyle } from './styles'

const _Network = ({}) => {
    const styles = useNetworkStyle();
  return (
    <View>
      <Text>Network</Text>
    </View>
  );
};

export const Network = memo(_Network);