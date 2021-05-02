import React, { memo, useCallback } from 'react';
import { Image, StyleSheet, View, Share, TouchableOpacity } from 'react-native';
import { CommonStyle } from '../../constants';
import { Platform } from '../../theme';
import { Text } from '../text';
import { COLORS } from '../../constants/colors';
import { DetailProductT } from '../../screens/product_detail/types';
import { Rate } from '../rating';
import { VNDCurrencyFormatting } from '../../Common/Common';

const _InfoProduct = ({ productDetail }: { productDetail?: DetailProductT }) => {
  const onShare = useCallback(async () => {
    try {
      await Share.share({
        message: `${productDetail?.gotoUrl}`,
      });
    } catch (error) {}
  }, [productDetail?.gotoUrl]);

  return (
    <View style={styles.container}>
      <Text>{productDetail?.nameProduct}</Text>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, CommonStyle.paddingTop]}>
        <Text style={styles.txtCost}>{VNDCurrencyFormatting(productDetail?.cost)}</Text>
        {productDetail?.verify ? (
          <View style={CommonStyle.row}>
            <Image style={styles.icon} source={{ uri: 'home_22' }} />
            <Text style={styles.txtVerify}>{'xác thực bởi sahatha'}</Text>
          </View>
        ) : (
          <></>
        )}
      </View>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, CommonStyle.paddingTop]}>
        <View style={[CommonStyle.row]}>
          <Image style={styles.icon} source={{ uri: 'product_detail_13' }} />
          <Text selectable={true} style={styles.txtCode}>
            {productDetail?.codeProduct}
          </Text>
        </View>
        <View style={[CommonStyle.row]}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon2} source={{ uri: 'product_detail_10' }} />
          </View>
          <TouchableOpacity onPress={onShare} style={styles.iconContainer}>
            <Image style={styles.icon2} source={{ uri: 'product_detail_07' }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, CommonStyle.paddingTop]}>
        <View style={[CommonStyle.row]}>
          <Image style={styles.icon} source={{ uri: 'product_detail_18' }} />
          <Text style={styles.txtNation}>Việt Nam</Text>
        </View>
        <View style={[CommonStyle.row]}>
          <Rate percent={3} />
          <Text style={styles.txtMore}>{productDetail?.countComments}</Text>
          <Text style={styles.txtMore}>xem them...</Text>
        </View>
      </View>
    </View>
  );
};

export const InfoProduct = memo(_InfoProduct);

const styles = StyleSheet.create({
  container: {},
  iconContainer: {
    borderWidth: 1,
    borderRadius: Platform.SizeScale(5),
    borderColor: COLORS.GRAY,
    padding: Platform.SizeScale(3),
    marginLeft: Platform.SizeScale(10),
  },
  icon: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
  icon2: {
    width: Platform.SizeScale(15),
    height: Platform.SizeScale(15),
  },
  txtMore: {
    color: COLORS.blue,
    fontSize: Platform.SizeScale(12),
    marginLeft: Platform.SizeScale(5),
  },
  txtNation: {
    color: COLORS.BOLD_GRAY,
    fontSize: Platform.SizeScale(12),
    marginLeft: Platform.SizeScale(10),
  },
  txtVerify: {
    color: COLORS.GREEN,
    marginLeft: Platform.SizeScale(10),
    fontSize: Platform.SizeScale(12),
  },
  txtCost: {
    fontSize: Platform.SizeScale(14),
    color: COLORS.blue2,
  },
  txtCode: {
    fontSize: Platform.SizeScale(14),
    marginLeft: Platform.SizeScale(10),
  },
});
