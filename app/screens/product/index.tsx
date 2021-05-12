import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { AppBars, Banner, ListFullOption, SearchBar, Text } from '../../components';
import ElementItem from '../../components/home-component/ElementItem';
import { mapListProductMore } from '../../helpers/product.helper';
import { homeActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { screens } from '../../config';
import { useLoadingGlobal } from '../../hooks';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import { productActionsCreator } from '../../redux/actions/product.action';
import { useProductStyle } from './styles';
import { ProductProps, ProductPropsScreen } from './types';

export const ProductScreen = ({ route }: ProductPropsScreen) => {
  const { categoryId, title } = route.params;
  const styles = useProductStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { productsMore, isLoading, sliders } = useSelector((state: RootState) => state.HomeData);
  const data = useMemo(() => mapListProductMore(productsMore), [productsMore]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const loading = useLoadingGlobal();

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
      category_id: categoryId.toString(),
      page: paging,
      search_name: searchText,
    };
    if (searchText) {
      dispatch(productActionsCreator.loadmoreSearchDataMoreRequest(payload));
    } else {
      dispatch(homeActionsCreator.getDataMoreLoadMoreRequest(payload));
    }
    setPage(paging);
  }, [categoryId, dispatch, page, searchText]);

  const getDataMoreRequest = useCallback(() => {
    const payload = {
      access_token: '',
      params: {
        category_id: categoryId,
        page: 1,
      },
    };
    dispatch(homeActionsCreator.getDataMoreRequest(payload));
    setPage(1);
  }, [categoryId, dispatch]);

  const onSearch = _.debounce(
    (text) => {
      setSearchText(text);
      dispatch(
        productActionsCreator.searchDataMoreRequest({
          access_token: '',
          category_id: categoryId.toString(),
          page: 1,
          search_name: text,
        }),
      );
    },
    400,
    { leading: false, trailing: true },
  );

  const renderEmpty = useCallback(() => {
    return (
      !isLoading && (
        <View style={styles.styWrapEmpty}>
          <Text>Không có dữ liệu :(</Text>
        </View>
      )
    );
  }, [isLoading, styles.styWrapEmpty]);

  const ListHeaderComponent = useCallback(() => {
    return <Banner />;
  }, []);

  useEffect(() => {
    getDataMoreRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
      loading.onShow();
    } else {
      loading.onHide();
    }
  }, [isLoading, loading]);

  return (
    <View style={styles.container}>
      <AppBars title={title} hasRightIcons={false} onPressLeft={onBack} />
      <SearchBar onChangeText={onSearch} />
      <BannerAdvertisement style={styles.viewBanner} data={sliders} />

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
          onLoadMore,
          loadMore: true,
          refreshing: isLoading,
        }}
        // {...{ ListHeaderComponent }}
      />
    </View>
  );
};
