import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNewsStyle } from './styles';

const _NewsScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useNewsStyle();

  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
};

export const NewsScreen = memo(_NewsScreen);
