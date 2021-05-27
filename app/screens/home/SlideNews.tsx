import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { mockData } from '../../components/news-item/__mocks__/data';
import { SliderNews } from '../../components/slider-news';
import { useHomeStyle } from './styles';

const _SlideNews = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View>
      <Text style={styles.title}>News of the day</Text>
      <View style={styles.wrapSlider}>
        <SliderNews data={mockData.dailyNews} />
      </View>
    </View>
  );
};

export const SlideNews = memo(_SlideNews);
