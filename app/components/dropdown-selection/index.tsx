import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useDropdownSelectionStyle } from './styles'

const _DropdownSelection = ({}) => {
    const styles = useDropdownSelectionStyle();
  return (
    <View>
      <Text>DropdownSelection</Text>
    </View>
  );
};

export const DropdownSelection = memo(_DropdownSelection);