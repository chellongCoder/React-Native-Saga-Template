import React, { memo } from 'react';
import { View } from 'react-native';
import { Text } from '..';
import { useIcoContentStyle } from './styles';

const _IcoContent = ({}) => {
  const styles = useIcoContentStyle();
  return (
    <View>
      <Text>IcoContent</Text>
    </View>
  );
};

export const IcoContent = memo(_IcoContent);
