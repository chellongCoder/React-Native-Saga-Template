import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Platform } from '../../theme';
import { COLORS } from '../../constants';
import { TopicItem } from '../slider-item';
import { useStyleSlider } from './styles';

export const Slider = ({ data }: { data: any[] }) => {
  const styles = useStyleSlider();
  const [isShowControl, setIsShowControl] = useState(true);
  const carousel = useRef<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  const onShowControl = () => {
    setIsShowControl(!isShowControl);
  };

  const onTopicPress = () => {};
  const topicItem = useCallback(
    ({ item }: any) => {
      return <TopicItem onPress={onTopicPress} item={item} />;
    },
    [onTopicPress],
  );

  const onSnapToItem = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const pagination = useCallback(() => {
    return (
      <View style={styles.paging}>
        {data.map((value, index) => {
          return index === activeSlide ? (
            <Image resizeMode="contain" style={styles.dot} source={{ uri: 'product_detail_active_paging' }} />
          ) : (
            <Image resizeMode="contain" style={styles.dot} source={{ uri: 'product_detail_paging' }} />
          );
        })}
      </View>
    );
  }, [activeSlide, data, styles.dot, styles.paging]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onShowControl}>
        <View>
          <View
            style={{
              width: Platform.baseScreenWith - 1,
              height: Platform.baseScreenHeight / 3,
              backgroundColor: COLORS.WHITE,
            }}>
            <Carousel
              data={data}
              firstItem={0}
              renderItem={topicItem}
              sliderWidth={Platform.baseScreenWith - 1}
              itemWidth={Platform.baseScreenWith}
              ref={carousel}
              loop={true}
              onSnapToItem={onSnapToItem}
            />
            {pagination()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
