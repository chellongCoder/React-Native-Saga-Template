import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles'

const _HomeScreen = ({}) => {
const navigation = useNavigation();
const styles = useHomeStyle();

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);