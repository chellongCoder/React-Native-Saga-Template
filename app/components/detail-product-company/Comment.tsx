import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';
import { Text } from '../text';

const _Comment = () => {
  return (
    <View>
      <View style={styles.topic}>
        <Text style={styles.txtRate}>Đánh giá sản phẩm (1)</Text>
        <Text>Xem tất cả </Text>
      </View>
    </View>
  );
};

export const Comment = memo(_Comment);

const styles = StyleSheet.create({
  topic: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: Platform.SizeScale(10),
    borderColor: COLORS.GRAY,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtRate: {
    fontSize: Platform.SizeScale(16),
    color: COLORS.blue,
    textAlign: 'center',
  },
});
