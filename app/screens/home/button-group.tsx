import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components';
import { CommonStyle } from '../../constants';
import { Platform } from '../../theme';

const _ButtonGroup = () => {
  return (
    <View style={styles.container}>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.buttonGroup]}>
        <AppButton mr={Platform.SizeScale(5)} style={styles.button1} title={'Vào làm'} />
        <AppButton ml={Platform.SizeScale(5)} style={styles.button1} title={'Ra về'} />
      </View>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.buttonGroup]}>
        <AppButton style={styles.button1} title={'ra ngoài'} />
        <AppButton style={styles.button1} mr={Platform.SizeScale(10)} ml={Platform.SizeScale(10)} title={'xin nghỉ'} />
        <AppButton style={styles.button1} title={'làm thêm'} />
      </View>
    </View>
  );
};

export const ButtonGroup = memo(_ButtonGroup);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.SizeScale(20),
  },
  button1: {
    flex: 1,
  },
  buttonGroup: {
    paddingTop: Platform.SizeScale(20),
  },
});
