import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { CommonButton, Icon, Text } from '../../components';
import { COLORS, CommonStyle, Icons, Images } from '../../constants';
import { Platform } from '../../theme';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={[CommonStyle.row, styles.header]}>
        <View style={{ flex: 2 / 10 }}>
          <View style={styles.avatar}>
            <Image resizeMode="contain" style={CommonStyle.image} source={Images.IMAGE_AVATAR} />
          </View>
        </View>
        <View
          style={{
            flex: 8 / 10,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text fontType="fontBold">PointPay</Text>
            </View>
            <View style={[CommonStyle.row, CommonStyle.spaceBetween]}>
              <View style={styles.active}>
                <Text fontSize={Platform.SizeScale(10)} color={COLORS.WHITE}>
                  Active ICO
                </Text>
              </View>
              <Icon icon={Icons.ICON_TWITTER} size={1.5} />
              <Icon icon={Icons.ICON_FB} size={1.5} />
              <Icon icon={Icons.ICON_TELEGRAM} size={1.5} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text fontSize={Platform.SizeScale(12)}>Blockchain-based Bank Full Eco System WorldWide</Text>
      </View>
      <View style={[CommonStyle.row, styles.buttonGroup]}>
        <CommonButton title={'Whitepaper'} />
        <CommonButton title={'Whitepaper'} />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    padding: Platform.SizeScale(20),
    borderRadius: Platform.SizeScale(20),
  },
  avatar: {
    width: Platform.SizeScale(46),
    height: Platform.SizeScale(46),
  },
  header: {
    paddingHorizontal: Platform.SizeScale(10),
  },
  active: {
    backgroundColor: COLORS.GREEN4,
    paddingHorizontal: Platform.SizeScale(10),
    paddingVertical: Platform.SizeScale(2),
    borderRadius: Platform.SizeScale(10),
  },
  content: {
    alignItems: 'center',
    paddingVertical: Platform.SizeScale(20),
  },
  buttonGroup: {
    alignSelf: 'center',
  },
});
