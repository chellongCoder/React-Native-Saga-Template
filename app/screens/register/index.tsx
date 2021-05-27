import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegisterStyle } from './styles'

const _RegisterScreen = ({}) => {
const navigation = useNavigation();
const styles = useRegisterStyle();

  return (
    <View>
      <Text>Register Screen</Text>
    </View>
  );
};

export const RegisterScreen = memo(_RegisterScreen);