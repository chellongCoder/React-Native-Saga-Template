import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppBars, Banner, SearchBar } from '../../components';
import { Api } from '../../services';
import { useProductStyle } from './styles';
import { Action } from './types';
export const ProductScreen = () => {
  const styles = useProductStyle();
  const dispatch: ({}: Action) => void = useDispatch();

  useEffect(() => {
    dispatch({
      meta: {
        payload: {},
        apiEndPoint: 'asdasd',
        callApi: Api.getDataProducts,
      },
      type: 'TYPE',
    });
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
