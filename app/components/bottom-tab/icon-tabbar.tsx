import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Images } from '../../constants';
import { Platform } from '../../theme';
import { IconTabProps } from './types';

export const IconTabbar = ({ name, styleImageContainer }: IconTabProps) => {
  return (
    <View style={[styles.icon, styleImageContainer]}>
      <FastImage style={styles.image} source={Images[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: Platform.SizeScale(28),
    height: Platform.SizeScale(28),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
