import React, { useCallback } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CommonStyle } from '../../constants/common-styles';

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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
});
