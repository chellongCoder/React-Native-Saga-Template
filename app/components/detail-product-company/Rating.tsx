import React, { memo, useCallback } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, CommonStyle } from '../../constants';
import { useBottomSheet } from '../../hooks/use-bottom.sheet';
import { mocksData } from '../../screens/product_detail/__mocks__/data';
import { Platform } from '../../theme';
import { AppButton } from '../button';
import { Text } from '../text';
import { TextField } from '../text-field';
import { Stars } from './Stars';

const _Rating = () => {
  const bottomSheet = useBottomSheet();

  const onShowChoiceImage = useCallback(() => {
    bottomSheet.onShowActionSheet();
  }, [bottomSheet]);

  const renderRightAccessory = useCallback(() => {
    return (
      <View style={styles.capture}>
        <TouchableOpacity onPress={onShowChoiceImage}>
          <Image style={CommonStyle.normalIcon} source={{ uri: 'product_detail_2_10' }} />
        </TouchableOpacity>
      </View>
    );
  }, [onShowChoiceImage]);
  return (
    <View>
      <View style={styles.topic}>
        <Text style={styles.txtTopic}>Đánh giá của bạn sẽ giúp ích cho cộng đồng</Text>
      </View>
      <View style={styles.starContainer}>
        {mocksData.ratings.map((value) => {
          return (
            <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.stars]}>
              <View style={[CommonStyle.row, styles.startLeft]}>
                <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
                <Text numberOfLines={1} style={styles.txtStar}>
                  {value.name}
                </Text>
              </View>
              <View style={[CommonStyle.row]}>
                <Stars {...{ value }} />
              </View>
            </View>
          );
        })}
      </View>
      <View>
        <TextField
          inputStyle={styles.inputStyle}
          style={styles.inpuRateStyle}
          placeholder="Viết đánh giá"
          multiline={true}
          numberOfLines={4}
          {...{ renderRightAccessory }}
        />
      </View>
      <AppButton labelStyles={styles.labelStyles} style={styles.button} title="Đăng đánh giá" />
    </View>
  );
};

export const Rating = memo(_Rating);

const styles = StyleSheet.create({
  icon3: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
  starContainer: {
    padding: Platform.SizeScale(15),
  },
  txtStar: {
    marginLeft: Platform.SizeScale(10),
    maxWidth: Platform.baseScreenWith / 3,
  },
  stars: {
    marginBottom: Platform.SizeScale(10),
  },
  startLeft: {},
  topic: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: Platform.SizeScale(10),
    borderColor: COLORS.GRAY,
    alignItems: 'center',
  },
  txtTopic: {
    color: COLORS.darkBlue,
    textAlign: 'center',
  },
  inpuRateStyle: {
    borderRadius: Platform.SizeScale(5),
    height: Platform.SizeScale(140),
    flexDirection: 'column',
    marginHorizontal: Platform.SizeScale(15),
    borderColor: COLORS.GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'flex-start',
  },
  inputStyle: {
    justifyContent: 'flex-start',
    height: Platform.SizeScale(100),
    paddingTop: Platform.SizeScale(10),
  },
  capture: {
    width: Platform.deviceWidth - Platform.SizeScale(50),
    borderTopColor: COLORS.GRAY,
    paddingVertical: Platform.SizeScale(10),
    borderTopWidth: StyleSheet.hairlineWidth,
    alignSelf: 'center',
  },
  button: {
    width: Platform.deviceWidth - Platform.SizeScale(30),
    backgroundColor: COLORS.GREEEN,
    borderRadius: Platform.SizeScale(5),
    alignSelf: 'center',
    marginVertical: Platform.SizeScale(20),
  },
  labelStyles: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: Platform.SizeScale(14),
  },
});
