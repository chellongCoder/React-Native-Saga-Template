import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CommonStyle } from '../../constants';
import { useIconStyle } from './styles';

const _Icon = ({ icon, size = 2.5, tintColor }: { icon: number; size?: number; tintColor?: string }) => {
  const styles = useIconStyle();
  return (
    <View
      style={{
        width: size * 10,
        height: size * 10,
      }}>
      <FastImage tintColor={tintColor} resizeMode="contain" style={CommonStyle.image} source={icon} />
    </View>
  );
};

export const Icon = memo(_Icon);
