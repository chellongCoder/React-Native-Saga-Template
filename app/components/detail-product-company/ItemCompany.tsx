import React, { memo, useCallback } from 'react';
import { Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, CommonStyle } from '../../constants';
import { ShopT } from '../../screens/product_detail/types';
import { Platform } from '../../theme';
import { Text } from '../text';

const _ItemCompany = ({ shop }: { shop?: ShopT }) => {
  const openMail = useCallback(() => {
    Linking.openURL(`mailto:${shop?.mail}`);
  }, [shop?.mail]);

  const openURL = useCallback(() => {
    Linking.openURL(`${shop?.website}`);
  }, [shop?.website]);

  return (
    <>
      <View style={styles.container}>
        <View style={[CommonStyle.row, CommonStyle.spaceBetween]}>
          <View style={[CommonStyle.row]}>
            <Image style={styles.icon} source={{ uri: 'product_detail_28' }} />
            <View style={styles.info}>
              <Text fontType="fontBold" isLongText numberOfLines={1} style={styles.txtInfo}>
                {shop?.name}
              </Text>
              <Text isLongText numberOfLines={1} style={styles.txtRole}>
                {shop?.subTitle}
              </Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Image style={styles.icon2} source={{ uri: 'product_detail_31' }} />
          </View>
        </View>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop]}>
        <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
        <Text style={styles.txtNumberPhone}>{shop?.phone}</Text>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop]}>
        <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
        <Text style={styles.txtAddress}>{shop?.address}</Text>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop]}>
        <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
        <Text style={styles.txtAddress}>
          Mã số thuế:{' '}
          <Text fontType="fontItalic" style={styles.txtTax}>
            {shop?.taxNumber ? shop.taxNumber : `Đang cập nhật`}
          </Text>
        </Text>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop, styles.mailContainer]}>
        <TouchableOpacity onPress={openMail} style={[CommonStyle.row, styles.mail]}>
          <Image style={styles.iconMail} source={{ uri: 'product_detail_43' }} />
          <Text style={styles.txtMail}>Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openURL} style={[CommonStyle.row, styles.mail]}>
          <Image style={styles.iconMail} source={{ uri: 'product_detail_40' }} />
          <Text style={styles.txtMail}>Website</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const ItemCompany = memo(_ItemCompany);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREEEN,
    padding: Platform.SizeScale(10),
    borderRadius: Platform.SizeScale(2),
    marginTop: Platform.SizeScale(20),
  },
  icon: {
    width: Platform.SizeScale(40),
    height: Platform.SizeScale(40),
    borderRadius: Platform.SizeScale(2),
  },
  info: {
    marginLeft: Platform.SizeScale(5),
  },
  iconContainer: {
    backgroundColor: COLORS.GREEN2,
    padding: Platform.SizeScale(5),
    borderRadius: Platform.SizeScale(2),
  },
  icon2: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
  icon3: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
  iconMail: {
    width: Platform.SizeScale(20),
    height: Platform.SizeScale(20),
  },
  txtInfo: {
    color: COLORS.WHITE,
    maxWidth: Platform.SizeScale(250),
  },
  txtRole: {
    color: COLORS.WHITE,
  },
  txtNumberPhone: {
    color: COLORS.blue,
    marginLeft: Platform.SizeScale(5),
    fontSize: Platform.SizeScale(14),
  },
  txtAddress: {
    fontSize: Platform.SizeScale(14),
    marginLeft: Platform.SizeScale(5),
  },
  txtTax: {
    color: COLORS.GRAY,
    fontSize: Platform.SizeScale(14),
  },
  mailContainer: {
    paddingTop: Platform.SizeScale(10),
  },
  mail: {
    borderWidth: 0.5,
    padding: Platform.SizeScale(5),
    borderRadius: Platform.SizeScale(5),
    marginRight: Platform.SizeScale(10),
    borderColor: COLORS.GRAY,
  },
  txtMail: {
    color: COLORS.BOLD_GRAY,
    marginLeft: Platform.SizeScale(5),
  },
});
