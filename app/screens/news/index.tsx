import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newsActionsCreator } from '../../redux/actions';
import { Platform } from '../../theme';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import { COLORS } from '../../constants';
import { ItemNews, SearchBar, Text } from '../../components';
import { RootState } from '../../redux/reducers';
import { mapperNewsByCategory, mapperNewsCategory } from '../../helpers/news.helper';
import { useLoadingGlobal } from '../../hooks';
import { convertTimeToAMPM } from '../../util';
import navigationService from '../../navigation/navigation-service';
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

  useEffect(() => {
    dispatch(newsActionsCreator.getNewCategoryRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      loading.onShow();
    } else {
      loading.onHide();
    }
  }, [isLoading, loading]);

  const renderItemTypeExeTitle = (item: NewCategoryT, index: number) => {
    return <ItemNews key={index} {...{ item, index, active, onChangeTab }} />;
  };
  const renderItemContent = ({ item }: { item: NewsByCategoryT; index: number }) => {
    return (
      <TouchableOpacity
        style={[styles.viewItem, styles.viewItemShadow]}
        onPress={() => {
          navigationService.navigate('NewsDetail', { item });
        }}>
        <View style={styles.viewImageWrapper}>
          <Image source={{ uri: item.image }} style={{ resizeMode: 'cover', flex: 1 }} />
        </View>

        <View style={styles.viewRight}>
          <View style={styles.viewItemTitle}>
            <View style={styles.viewTextTitle}>
              <Text isLongText numberOfLines={1} style={styles.textTitle}>
                {item.title}
              </Text>
            </View>
            <Text style={{ color: COLORS.GRAY }}>{convertTimeToAMPM(item.time.split(' ')[1])}</Text>
          </View>
          <View style={styles.viewTextContent}>
            <Text isLongText numberOfLines={2} style={{ color: COLORS.darkBlue }}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderFooter = () => {
    return <View style={{ height: Platform.SizeScale(25) }} />;
  };
  return (
    <View style={styles.container}>
      <SearchBar style={styles.viewSearchBar} />
      <View style={styles.viewBanner}>
        <BannerAdvertisement data={sliders} />
      </View>
      <View style={styles.viewCate}>{newCategories.map(renderItemTypeExeTitle)}</View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: Platform.SizeScale(20) }}
        style={styles.flatlistContent}
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={renderItemContent}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export const NewsScreen = memo(_NewsScreen);
