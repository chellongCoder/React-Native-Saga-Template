import React, { memo } from 'react';
import { View } from 'react-native';
import { Text } from '..';
import { useNtfContentStyle } from './styles';

const _NtfContent = ({}) => {
  const styles = useNtfContentStyle();
  return (
    <View>
      <Text>NtfContent</Text>
    </View>
  );
};

export const NtfContent = memo(_NtfContent);
