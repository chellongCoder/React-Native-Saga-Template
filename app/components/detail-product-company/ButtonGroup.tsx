import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, CommonStyle } from '../../constants';
import { Platform } from '../../theme';
import { AppButton } from '../button';
const _ButtonGroup = () => {
  return (
    <View style={[CommonStyle.row, styles.container]}>
      <AppButton labelStyles={styles.labelStyles} style={styles.button} title="Đánh giá" />
      <AppButton
        labelStyles={styles.labelStyles}
        style={[styles.button, { backgroundColor: COLORS.blue }]}
        title="Mua tại nhà sx"
      />
    </View>
  );
};

export const ButtonGroup = memo(_ButtonGroup);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: Platform.SizeScale(160),
    paddingVertical: Platform.SizeScale(10),
    marginHorizontal: Platform.SizeScale(10),
    backgroundColor: COLORS.GREEEN,
    borderRadius: Platform.SizeScale(10),
  },
  labelStyles: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: Platform.SizeScale(14),
  },
});
