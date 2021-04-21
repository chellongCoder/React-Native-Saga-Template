import React, { memo, useEffect, useState } from 'react';
import { View, ImageBackground, FlatList, Image, ListRenderItem } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../constants';
import { newsActionsCreator } from '../../redux/actions';
import { Platform } from '../../theme';
import { Text } from '../../components';
import navigationService from '../../navigation/navigation-service';
import { useNewsStyle } from './styles';
import { dataCate } from './__mocks__/data';

const _NewsScreenDetail = () => {
  const scrollElementHeightPercent = 20;
  const styles = useNewsStyle();
  const dispatch = useDispatch();
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const scrollPerc = (contentOffset.x / (contentSize - scrollViewHeight)) * (100 - scrollElementHeightPercent);
  useEffect(() => {
    dispatch(newsActionsCreator.getNewCategoryRequest());
  }, [dispatch]);
  const renderItemHorizontal: ListRenderItem<{
    id: number;
    title: string;
    image: string;
  }> = ({ item }) => {
    return (
      <View style={{ width: Platform.SizeScale(90) }}>
        <View
          style={{
            height: Platform.SizeScale(70),
            // width: Platform.SizeScale(90),
            borderRadius: Platform.SizeScale(12),
            borderWidth: 1,
            borderColor: COLORS.WHITE,
            overflow: 'hidden',
            marginRight: Platform.SizeScale(12),
            marginVertical: Platform.SizeScale(14),

            // backgroundColor: 'red',
          }}>
          <Image style={{ flex: 1, resizeMode: 'stretch' }} source={{ uri: item.image }} />
        </View>
        <Text style={{ color: COLORS.WHITE, fontSize: Platform.SizeScale(12) }} numberOfLines={3}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <ImageBackground
          resizeMode={'stretch'}
          imageStyle={{
            flex: 1,
            height: undefined,
            width: undefined,
          }}
          style={{
            height: '50%',
            width: '100%',

            backgroundColor: 'red',
          }}
          source={{ uri: 'https://genk.mediacdn.vn/2019/1/23/airpower-15482435649941225284688.jpg' }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                onPress={() => {
                  navigationService.goBack();
                }}
                style={{ margin: Platform.SizeScale(16) }}>
                <Icon name={'arrow-back'} size={Platform.SizeScale(36)} color={COLORS.WHITE} />
              </TouchableOpacity>
              <TouchableOpacity style={{ margin: Platform.SizeScale(16) }}>
                <FontAwesome name={'home'} size={Platform.SizeScale(36)} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                // backgroundColor: 'red',
                alignSelf: 'center',
                alignItems: 'center',
                paddingHorizontal: Platform.SizeScale(10),
              }}>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    backgroundColor: COLORS.WHITE,
                    padding: Platform.SizeScale(8),
                    borderRadius: 100,
                    marginHorizontal: Platform.SizeScale(4),
                  }}>
                  <FontAwesome name={'share-square-o'} size={Platform.SizeScale(18)} color={COLORS.BLACK} />
                </View>
                <View
                  style={{
                    backgroundColor: COLORS.WHITE,
                    padding: Platform.SizeScale(8),
                    marginHorizontal: Platform.SizeScale(4),
                    borderRadius: 100,
                  }}>
                  <FontAwesome name={'heart-o'} size={Platform.SizeScale(18)} color={COLORS.RED} />
                </View>
              </View>
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontSize: Platform.SizeScale(18),
                  textAlign: 'center',
                  marginTop: Platform.SizeScale(8),
                }}>
                Apple có kế hoạch mang nhiều tính năng IOS hơn cho Mac
              </Text>
              <Text
                style={{
                  color: COLORS.GRAY1,
                  fontSize: Platform.SizeScale(13),
                  textAlign: 'center',
                  marginVertical: Platform.SizeScale(16),
                }}>
                02:21 PM
              </Text>
            </View>
          </View>
        </ImageBackground>
        <Text>
          ÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG
          ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG
          ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG
          ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG
          ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG
          ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBCÁICGUAISUG ÁOASBCIUASBC
        </Text>
      </ScrollView>
      <View
        style={{
          // height: '40%',
          backgroundColor: COLORS.GREEEN,
          borderTopLeftRadius: Platform.SizeScale(16),
          borderTopRightRadius: Platform.SizeScale(16),
        }}>
        <View
          style={{
            paddingHorizontal: Platform.SizeScale(16),
            paddingVertical: Platform.SizeScale(18),
          }}>
          <Text
            style={{
              fontSize: Platform.SizeScale(16),
              color: COLORS.WHITE,
              fontWeight: 'bold',
            }}>
            Các tin tức liên quan
          </Text>
        </View>
        <FlatList
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
          data={dataCate}
        />
        <View
          style={{
            width: Platform.SizeScale(100),
            height: Platform.SizeScale(12),
            borderRadius: 100,
            backgroundColor: 'rgba(255,255,255,0.3)',
            alignSelf: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              left: `${Number(scrollPerc || 0).toFixed(0)}%`,
              width: `${scrollElementHeightPercent}%`,
              borderRadius: 100,
              backgroundColor: COLORS.WHITE,
              height: '100%',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export const NewsScreenDetail = memo(_NewsScreenDetail);
