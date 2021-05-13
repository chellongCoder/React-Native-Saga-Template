import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useBodyTopbarStyle } from './styles'

const _BodyTopbar = ({}) => {
    const styles = useBodyTopbarStyle();
  return (
    <View>
      <Text>BodyTopbar</Text>
    </View>
  );
};

export const BodyTopbar = memo(_BodyTopbar);