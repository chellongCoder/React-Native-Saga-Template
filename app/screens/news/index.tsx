import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newsActionsCreator } from '../../redux/actions';
import { Platform } from '../../theme';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import { ItemNew, ItemNewCategory, ListFullOption, SearchBar, Text } from '../../components';
import { RootState } from '../../redux/reducers';
import { mapperNewsByCategory, mapperNewsCategory } from '../../helpers/news.helper';
import { useLoadingGlobal } from '../../hooks';
import { useNewsStyle } from './styles';
import { NewCategoryT, NewsByCategoryT } from './types';

const _NewsScreen = () => {
  const { isLoading, newCategories: _newCategories, news: _news } = useSelector((state: RootState) => state.NewData);
  const { sliders } = useSelector((state: RootState) => state.HomeData);

  const loading = useLoadingGlobal();
  const newCategories = useMemo(() => mapperNewsCategory(_newCategories), [_newCategories]);
  const news = useMemo(() => mapperNewsByCategory(_news), [_news]);
  console.log('news', news, newCategories);

  const styles = useNewsStyle();
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const onChangeTab = useCallback((index: number) => {
    setActive(index);
  }, []);

  const getNewCategoryRequest = useCallback(() => {
    dispatch(newsActionsCreator.getNewCategoryRequest());
  }, [dispatch]);

  useEffect(() => {
    getNewCategoryRequest();
  }, [dispatch, getNewCategoryRequest]);

  useEffect(() => {
    if (isLoading) {
      loading.onShow();
    } else {
      loading.onHide();
    }
  }, [isLoading, loading]);

  const renderItemTypeExeTitle = (item: NewCategoryT, index: number) => {
    return <ItemNewCategory key={index} {...{ item, index, active, onChangeTab }} />;
  };
  const renderItemContent = (item: NewsByCategoryT) => {
    return <ItemNew {...{ item }} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar style={styles.viewSearchBar} />
      <View style={styles.viewBanner}>
        <BannerAdvertisement data={sliders} />
      </View>
      <View style={styles.viewCate}>{newCategories.map(renderItemTypeExeTitle)}</View>

      <ListFullOption
        data={news}
        showsVerticalScrollIndicator={false}
        renderSubItem={renderItemContent}
        style={{ paddingHorizontal: Platform.SizeScale(20) }}
        // ListEmptyComponent={renderEmpty}
        onRefreshEvent={getNewCategoryRequest}
        listFooterComponent={<View style={{ height: Platform.SizeScale(25) }} />}
        {...{
          // onLoadMore,
          loadMore: true,
          refreshing: isLoading,
        }}

        // {...{ ListHeaderComponent }}
      />
    </View>
  );
};

export const NewsScreen = memo(_NewsScreen);
