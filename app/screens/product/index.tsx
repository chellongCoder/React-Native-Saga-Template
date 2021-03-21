import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppBars, Banner, SearchBar } from '../../components';
import { homeActionsCreator } from '../../redux/actions';
import { useProductStyle } from './styles';
export const ProductScreen = () => {
  const styles = useProductStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActionsCreator.getDataProductDetailRequest({ product_id: 2624 }));
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <AppBars title="Điện tử, gia dụng" />
      <SearchBar />
      <Banner />
    </View>
  );
};

const styles = StyleSheet.create({});
