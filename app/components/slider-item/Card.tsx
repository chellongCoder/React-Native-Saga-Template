import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Platform } from '../../theme';
import { CommonStyle } from '../../constants/common-styles';

const MAX_WIDTH_ITEM = Platform.SizeScale(100);
const MAX_WIDTH_IMAGE = Platform.SizeScale(60);

const Card = ({ item }: { item: any }) => {
  console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------`);
  console.log(`🛠 LOG: 🚀 --> ~ file: Card.tsx ~ line 10 ~ Card ~ item`, item);
  console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------`);
  const onPress = useCallback(() => {}, []);
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage resizeMode="cover" style={CommonStyle.image} source={{ uri: item.cover }} />
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {item.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  imageContainer: {},
  text: {
    maxWidth: MAX_WIDTH_ITEM,
    textAlign: 'center',
  },
});
