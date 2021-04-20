import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { DetailProductT } from '../../screens/product_detail/types';
import { Platform } from '../../theme';
import { Text } from '../text';

const _AboutProduct = ({ productDetail }: { productDetail?: DetailProductT }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin sản phẩm </Text>
      <View style={styles.content}>
        <Text isViewHtml>{productDetail?.description}</Text>
      </View>
    </View>
  );
};

export const AboutProduct = memo(_AboutProduct);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.SizeScale(10),
  },
  title: {
    fontSize: Platform.SizeScale(14),
    fontFamily: 'RobotoMono-Regular',
    fontWeight: 'bold',
    paddingLeft: Platform.SizeScale(20),
  },
  content: {
    marginTop: Platform.SizeScale(10),
    width: Platform.deviceWidth - Platform.SizeScale(20),
    alignSelf: 'center',
  },
});
