import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS, CommonStyle } from '../../constants';
import { Platform } from '../../theme';
import { Text } from '../text';

const _ItemCompany = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={[CommonStyle.row, CommonStyle.spaceBetween]}>
          <View style={[CommonStyle.row]}>
            <Image style={styles.icon} source={{ uri: 'product_detail_28' }} />
            <View style={styles.info}>
              <Text style={styles.txtInfo}>Công ty TNHH VIBAN</Text>
              <Text style={styles.txtRole}>CHỦ SỞ HỮU</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Image style={styles.icon2} source={{ uri: 'product_detail_31' }} />
          </View>
        </View>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop]}>
        <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
        <Text style={styles.txtNumberPhone}>+84868177610</Text>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop]}>
        <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
        <Text style={styles.txtAddress}>Place du Port 1 1110 Morges 1</Text>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop]}>
        <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
        <Text style={styles.txtAddress}>
          Mã số thuế: <Text style={styles.txtTax}>Đang cập nhật</Text>
        </Text>
      </View>
      <View style={[CommonStyle.row, CommonStyle.paddingTop, styles.mailContainer]}>
        <View style={[CommonStyle.row, styles.mail]}>
          <Image style={styles.iconMail} source={{ uri: 'product_detail_43' }} />
          <Text style={styles.txtMail}>Mail</Text>
        </View>
        <View style={[CommonStyle.row, styles.mail]}>
          <Image style={styles.iconMail} source={{ uri: 'product_detail_40' }} />
          <Text style={styles.txtMail}>Website</Text>
        </View>
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
    fontWeight: 'bold',
    color: COLORS.WHITE,
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
    fontStyle: 'italic',
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
