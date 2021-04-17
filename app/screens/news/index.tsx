import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newsActionsCreator } from '../../redux/actions';
import { Platform } from '../../theme';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import { COLORS } from '../../constants';
import { ItemNews, SearchBar, Text } from '../../components';
import { RootState } from '../../redux/reducers';
import { mapperNewsCategory } from '../../helpers/news.helper';
import { useNewsStyle } from './styles';
import { dataContent } from './__mocks__/data';
import { NewCategoryT } from './types';

const _NewsScreen = () => {
  const { isLoading, newCategories: _newCategories } = useSelector((state: RootState) => state.NewData);
  const { sliders } = useSelector((state: RootState) => state.HomeData);

  const newCategories = useMemo(() => mapperNewsCategory(_newCategories), [_newCategories]);

  const styles = useNewsStyle();
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const onChangeTab = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    dispatch(newsActionsCreator.getNewCategoryRequest());
  }, [dispatch]);
  const renderItemTypeExeTitle = (item: NewCategoryT, index: number) => {
    return <ItemNews key={index} {...{ item, index, active, onChangeTab }} />;
  };
  const renderItemContent = ({ item }: { item: any; index: number }) => {
    return (
      <TouchableOpacity style={[styles.viewItem, styles.viewItemShadow]} onPress={() => {}}>
        <View style={styles.viewImageWrapper}>
          <Image
            source={{ uri: 'https://cdn.tgdd.vn/2020/09/content/2-800x450-107.jpg' }}
            style={{ resizeMode: 'cover', flex: 1 }}
          />
        </View>

        <View style={styles.viewRight}>
          <View style={styles.viewItemTitle}>
            <View style={styles.viewTextTitle}>
              <Text numberOfLines={1} style={styles.textTitle}>
                {item.title}
              </Text>
            </View>
            <Text style={{ color: COLORS.GRAY }}>{item.time}</Text>
          </View>
          <View style={styles.viewTextContent}>
            <Text numberOfLines={2} style={{ color: COLORS.darkBlue }}>
              {item.content}
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
        style={styles.flatlistContent}
        showsVerticalScrollIndicator={false}
        data={dataContent}
        renderItem={renderItemContent}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export const NewsScreen = memo(_NewsScreen);
