import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBars, Banner, SearchBar } from '../../components';
import { useProductStyle } from './styles';
export const ProductScreen = () => {
  const styles = useProductStyle();
  return (
    <View style={styles.container}>
      <AppBars title="Điện tử, gia dụng" />
      <SearchBar />
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({});
