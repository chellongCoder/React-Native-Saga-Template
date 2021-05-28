import React, { memo } from 'react';
import { View, Text, Image, StyleProp, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CommonStyle } from '../../constants';

const _Icon = ({
  icon,
  size = 2.5,
  tintColor,
  style,
}: {
  icon: number;
  size?: number;
  tintColor?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[
        {
          width: size * 10,
          height: size * 10,
        },
        style,
      ]}>
      <FastImage tintColor={tintColor} resizeMode="contain" style={CommonStyle.image} source={icon} />
    </View>
  );
};

export const Icon = memo(_Icon);
