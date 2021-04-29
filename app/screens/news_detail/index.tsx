import React, { memo, useEffect, useMemo, useState } from 'react';
import { View, ImageBackground, FlatList, Image, ListRenderItem, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../constants';
import { newsDetailActionsCreator } from '../../redux/actions';
import { Platform } from '../../theme';
import { Text } from '../../components';
import navigationService from '../../navigation/navigation-service';
import { mapperNewsByCategory } from '../../helpers/news.helper';
import { RootState } from '../../redux/reducers';
import { useImageView } from '../../hooks';
import { useNewsStyle } from './styles';
// import { dataCate } from './__mocks__/data';

const _NewsScreenDetail = ({ route }) => {
  const dataRoute = route.params.item;
  const scrollElementHeightPercent = 20;
  const styles = useNewsStyle();
  const dispatch = useDispatch();
  const { news: _news } = useSelector((state: RootState) => state.NewData);
  const news = useMemo(() => mapperNewsByCategory(_news), [_news]);

  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const scrollPerc = (contentOffset.x / (contentSize - scrollViewHeight)) * (100 - scrollElementHeightPercent);
  useEffect(() => {
    dispatch(newsDetailActionsCreator.getNewsDetailNotificationRequest());
  }, [dispatch]);
  const imageViewer = useImageView();
  const renderItemHorizontal: ListRenderItem<{
    id: number;
    title: string;
    image: string;
  }> = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <TouchableOpacity
          onPress={() => {
            imageViewer.show([item.image]);
          }}
          style={styles.itemViewImage}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
        </TouchableOpacity>
        <Text style={styles.itemText} numberOfLines={3}>
          {item.title}
        </Text>
      </View>
    );
  };
  const onBack = () => {
    navigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={'stretch'}
        imageStyle={{
          // flex: 1,
          height: undefined,
          width: undefined,
        }}
        style={styles.imageBackground}
        source={{ uri: dataRoute.image }}>
        <View style={styles.viewImageWrapper}>
          <View style={styles.viewHeader}>
            <TouchableOpacity onPress={onBack} style={styles.btnHeader}>
              <Icon name={'arrow-back'} size={Platform.SizeScale(36)} color={COLORS.WHITE} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHeader}>
              <FontAwesome name={'home'} size={Platform.SizeScale(36)} color={COLORS.WHITE} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewUnder}>
            <View style={styles.viewIcon}>
              <View style={styles.share}>
                <FontAwesome name={'share-square-o'} size={Platform.SizeScale(18)} color={COLORS.BLACK} />
              </View>
              <View style={styles.share}>
                <FontAwesome name={'heart-o'} size={Platform.SizeScale(18)} color={COLORS.RED} />
              </View>
            </View>
            <Text style={styles.textUnder}>Apple có kế hoạch mang nhiều tính năng IOS hơn cho Mac</Text>
            <Text style={styles.timeUnder}>02:21 PM</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1, marginTop: Platform.SizeScale(8), paddingHorizontal: Platform.SizeScale(12) }}>
        <Text isViewHtml>{dataRoute.content}</Text>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.viewTextWrapper}>
          <Text fontType="fontBold" style={styles.textNews}>
            Các tin tức liên quan
          </Text>
        </View>
        <FlatList
          style={{ marginHorizontal: Platform.SizeScale(20) }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onLayout={(e) => {
            setScrollViewHeight(e.nativeEvent.layout.width);
          }}
          onScroll={(e) => {
            setContentOffset(e.nativeEvent.contentOffset);
          }}
          onContentSizeChange={(width) => {
            setContentSize(width);
          }}
          horizontal
          keyExtractor={(item) => item.title + item.id}
          renderItem={renderItemHorizontal}
          data={news}
        />
        <View style={styles.viewSliderWrapper}>
          <View
            style={[
              styles.dotSlider,
              { left: `${Number(scrollPerc || 0).toFixed(0)}%`, width: `${scrollElementHeightPercent}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export const NewsScreenDetail = memo(_NewsScreenDetail);
