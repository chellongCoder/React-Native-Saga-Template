import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHomeStyle } from './styles';

const _SlideNews = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View>
      <Text>slide news</Text>
    </View>
  );
};

export const SlideNews = memo(_SlideNews);
