import React, { useCallback, useRef, useState } from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Platform } from '../../theme';
import { COLORS } from '../../constants';
import { TopicItem } from '../slider-item';
import { useImageView } from '../../hooks';
import { PhotoSlider } from '../../screens/product_scan/types';
import { useStyleSlider } from './styles';

export const Slider = ({ data }: { data?: PhotoSlider[] }) => {
  const styles = useStyleSlider();
  const carousel = useRef<any>();
  const [activeSlide, setActiveSlide] = useState(0);
  const imageView = useImageView();

  const onShowControl = () => {
    imageView.show(data ? data.map((value) => value.cover) : []);
  };

  const onTopicPress = useCallback(() => {
    imageView.show(data ? data.map((value) => value.cover) : []);
  }, [data, imageView]);

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
        {data &&
          data.map((value, index) => {
            return index === activeSlide ? (
              <Image
                key={index}
                resizeMode="contain"
                style={styles.dot}
                source={{ uri: 'product_detail_active_paging' }}
              />
            ) : (
              <Image key={index} resizeMode="contain" style={styles.dot} source={{ uri: 'product_detail_paging' }} />
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
              width: Platform.deviceWidth - 1,
              height: Platform.deviceHeight / 3,
              backgroundColor: COLORS.WHITE,
            }}>
            <Carousel
              data={data ? data : []}
              firstItem={0}
              renderItem={topicItem}
              sliderWidth={Platform.deviceWidth - 1}
              itemWidth={Platform.deviceWidth}
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
