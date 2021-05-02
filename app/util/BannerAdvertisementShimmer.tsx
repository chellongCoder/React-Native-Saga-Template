import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { Platform } from '../theme';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const { deviceWidth } = Platform;
const width_img_product = deviceWidth - 40;
const height_img_product = ((deviceWidth - 40) / 1030) * 328;

const BannerAdvertisementShimmer = () => {
  return (
    <View style={[styles.wrapContain, { width: deviceWidth }]}>
      <ShimmerPlaceHolder visible={false} style={styles.styImage} />
    </View>
  );
};

export default BannerAdvertisementShimmer;

const styles = StyleSheet.create({
  wrapContain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.SizeScale(20),
  },
  styImage: {
    width: width_img_product,
    height: height_img_product,
    alignContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
