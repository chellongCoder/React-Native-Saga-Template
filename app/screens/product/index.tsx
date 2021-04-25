import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppBars, Banner, ListFullOption, SearchBar, Text } from '../../components';
import ElementItem from '../../components/home-component/ElementItem';
import { mapListProductMore } from '../../helpers/product.helper';
import { homeActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { screens } from '../../config';
import { useProductStyle } from './styles';
import { ProductProps, ProductPropsScreen } from './types';

export const ProductScreen = ({ route }: ProductPropsScreen) => {
  const { categoryId, title } = route.params;
  const styles = useProductStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productsMore, isLoading } = useSelector((state: RootState) => state.HomeData);
  const data = useMemo(() => mapListProductMore(productsMore), [productsMore]);
  const [page, setPage] = useState(1);

  const listFooterComponent = useMemo(() => {
    return (
      <View
        style={{
          height: Platform.SizeScale(30),
          width: Platform.deviceWidth,
        }}>
        <ActivityIndicator />
      </View>
    );
  }, []);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handlerGoToDetail = useCallback(
    (item: ProductProps) => {
      navigation.navigate(screens.product_detail, {
        params: { productId: item.id },
      });
    },
    [navigation],
  );

  const onLoadMore = useCallback(() => {
    const paging = page + 1;
    const payload = {
      access_token: '',
      params: {
        category_id: categoryId,
        page: paging,
      },
    };
    dispatch(homeActionsCreator.getDataMoreLoadMoreRequest(payload));
    setPage(paging);
  }, [categoryId, dispatch, page]);

  const getDataMoreRequest = useCallback(() => {
    const payload = {
      access_token: '',
      params: {
        category_id: categoryId,
        page: 1,
      },
    };
    dispatch(homeActionsCreator.getDataMoreRequest(payload));
  }, [categoryId, dispatch]);

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
    getDataMoreRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <AppBars title={title} hasRightIcons={false} onPressLeft={onBack} />
      <SearchBar />

      <ListFullOption
        data={data}
        renderSubItem={(item: ProductProps) => (
          <ElementItem
            {...{ handlerGoToDetail }}
            item={item}
            width={Platform.deviceWidth / 2 - Platform.SizeScale(20)}
          />
        )}
        numColumns={2}
        style={{ marginHorizontal: Platform.SizeScale(10) }}
        ListEmptyComponent={renderEmpty}
        onRefreshEvent={getDataMoreRequest}
        {...{
          refreshing: isLoading,
          onLoadMore,
          loadMore: true,
          listFooterComponent,
        }}

        // {...{ ListHeaderComponent }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
