import React, { memo, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newsActionsCreator } from '../../redux/actions';
import { Platform } from '../../theme';
import BannerAdvertisement from '../../util/BannerAdvertisement';
import { COLORS } from '../../constants';
import { SearchBar, Text } from '../../components';
import { RootState } from '../../redux/reducers';
import { useNewsStyle } from './styles';
import { dataCate, dataContent } from './__mocks__/data';

const _NewsScreen = () => {
  const { sliders } = useSelector((state: RootState) => state.HomeData);

  const styles = useNewsStyle();
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  useEffect(() => {
    dispatch(newsActionsCreator.getNewCategoryRequest());
  }, [dispatch]);
  const renderItemTypeExeTitle = (item: { title: any }, index: React.SetStateAction<number>) => {
    const { title } = item;
    return (
      <TouchableOpacity
        onPress={() => {
          setActive(index);
        }}>
        <Text style={[styles.textShared, active === index ? styles.textFocused : styles.textUnFocused]}>{title}</Text>
      </TouchableOpacity>
    );
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
      <View style={styles.viewCate}>{dataCate.map(renderItemTypeExeTitle)}</View>
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
