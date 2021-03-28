import React, { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Platform } from '../../theme';

const _InfoProduct = () => {
  return (
    <View>
      <Text>Sony Alpha A5000 KIT 16-50</Text>
      <View>
        <Text>16.880.000 đ</Text>
        <View>
          <Image style={styles.icon} source={{ uri: 'home_22' }} />
          <Text>xác thực bởi sahatha</Text>
        </View>
      </View>
      <View>
        <View>
          <Image style={styles.icon} source={{ uri: 'product_detail_13' }} />
          <Text>2512941412943</Text>
        </View>
        <View>
          <Image style={styles.icon} source={{ uri: 'product_detail_10' }} />
          <Image style={styles.icon} source={{ uri: 'product_detail_07' }} />
        </View>
      </View>
      <View>
        <View>
          <Image style={styles.icon} source={{ uri: 'product_detail_18' }} />
          <Text>Switzerland</Text>
        </View>
        <View>
          <Text>sao</Text>
          <Text>9.0</Text>
          <Text>xem them...</Text>
        </View>
      </View>
    </View>
  );
};

export const InfoProduct = memo(_InfoProduct);

const styles = StyleSheet.create({
  icon: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
});
