import React, { memo } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CommonStyle, Images } from '../../constants';
import { useStyleBanner } from './styles';
const _Banner = () => {
  const styles = useStyleBanner();
  return (
    <>
      <View style={styles.imageContainer}>
        <FastImage style={CommonStyle.image} resizeMode="contain" source={Images.banner_product} />
      </View>
    </>
  );
};

export const Banner = memo(_Banner);
