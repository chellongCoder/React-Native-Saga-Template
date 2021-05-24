import React, { memo, useCallback, useRef, useState } from 'react';
import { Image, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { COLORS, Icons } from '../../constants';
import { Platform } from '../../theme';
import { ItemNew } from '../item-new';
import { useSliderNewsStyle } from './styles';

const _SliderNews = ({ data }: { data?: PhotoSlider[] }) => {
  const styles = useSliderNewsStyle();
  const carousel = useRef<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  const itemNew = useCallback(({ item }: any) => {
    return <ItemNew item={item} />;
  }, []);

  const onSnapToItem = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    return (
      <>
        {data && data?.length > 0 && (
          <TouchableOpacity onPress={() => carousel.current.snapToNext()} style={styles.nextSlide}>
            <Image resizeMode="contain" style={styles.icoArrow} source={Icons.ICON_NEXT} />
          </TouchableOpacity>
        )}
      </>
    );
  }, [data, styles.icoArrow, styles.nextSlide]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            width: Platform.deviceWidth - Platform.SizeScale(30),
            backgroundColor: COLORS.BACKGROUND,
          }}>
          <Carousel
            data={data ? data : []}
            firstItem={0}
            renderItem={itemNew}
            sliderWidth={Platform.deviceWidth}
            itemWidth={Platform.SizeScale(260)}
            ref={carousel}
            loop={true}
            onSnapToItem={onSnapToItem}
            activeSlideAlignment="start"
            contentContainerCustomStyle={{ paddingBottom: Platform.SizeScale(10) }}
          />
          {nextSlide()}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SliderNews = memo(_SliderNews);
