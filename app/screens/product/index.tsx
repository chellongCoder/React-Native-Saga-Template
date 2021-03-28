import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBars, Banner, SearchBar } from '../../components';
import { useProductStyle } from './styles';
export const ProductScreen = ({}) => {
  const styles = useProductStyle();
  const navigation = useNavigation();

  const onNavigateDetailProduct = useCallback(() => {
    navigation.navigate('ProductDetail');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AppBars title="Điện tử, gia dụng" onPressRight={onNavigateDetailProduct} />
      <SearchBar />
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({});
