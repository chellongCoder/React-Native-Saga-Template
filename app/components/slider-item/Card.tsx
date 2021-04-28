import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CommonStyle } from '../../constants/common-styles';

const Card = ({ item, onPress }: { item: any; onPress: () => void }) => {
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
