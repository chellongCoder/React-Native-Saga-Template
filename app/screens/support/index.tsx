import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSupportStyle } from './styles';

const _SupportScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useSupportStyle();

  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
    </View>
  );
};

export const SupportScreen = memo(_SupportScreen);
