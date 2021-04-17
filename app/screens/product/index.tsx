import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLoadingGlobal } from '../../hooks';
import { AppBars, Banner, SearchBar, Text } from '../../components';
import ElementItem from '../../components/home-component/ElementItem';
import { mapListProduct } from '../../helpers/product.helper';
import { homeActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { useProductStyle } from './styles';
import { ProductProps, ProductPropsScreen } from './types';

export const ProductScreen = ({ route }: ProductPropsScreen) => {
  const { categoryId, title } = route.params;
  const styles = useProductStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productsMore, isLoading } = useSelector((state: RootState) => state.HomeData);
  const data = useMemo(() => mapListProduct(productsMore), [productsMore]);
  const hookLoadingGlobal = useLoadingGlobal();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderEmpty = useCallback(() => {
    return (
      <View style={styles.styWrapEmpty}>
        <Text>Không có dữ liệu :(</Text>
      </View>
    );
  }, [styles.styWrapEmpty]);

  const ListHeaderComponent = useCallback(() => {
    return <Banner />;
  }, []);

  useEffect(() => {
    const payload = {
      access_token: '',
      params: {
        category_id: categoryId,
      },
    };
    dispatch(homeActionsCreator.getDataMoreRequest(payload));
  }, [categoryId, dispatch]);

  useEffect(() => {
    if (isLoading) {
      hookLoadingGlobal.onShow();
    } else {
      hookLoadingGlobal.onHide();
    }
  }, [hookLoadingGlobal, isLoading]);

  return (
    <View style={styles.container}>
      <AppBars title={title} hasRightIcons={false} onPressLeft={onBack} />
      <SearchBar />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: ProductProps }) => (
          <ElementItem item={item} width={Platform.deviceWidth / 2 - Platform.SizeScale(20)} />
        )}
        numColumns={2}
        contentContainerStyle={{ marginHorizontal: Platform.SizeScale(10) }}
        ListEmptyComponent={renderEmpty}
        {...{ ListHeaderComponent }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
