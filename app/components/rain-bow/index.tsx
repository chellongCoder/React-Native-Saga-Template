import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './Footer';
import Graph from './Graph';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
const _RainBow = ({}) => {
  return (
    <View style={styles.container}>
      <Graph />
      <Footer />
    </View>
  );
};

export const RainBow = memo(_RainBow);
