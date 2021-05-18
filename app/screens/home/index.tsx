import React, { memo } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CandlestickChart, BodyTopbar } from '../../components';
import { useHomeStyle } from './styles';
import { SlideNews } from './SlideNews';
import { TabMarkets } from './TabMarkets';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View style={styles.containerHome}>
      <ScrollView>
        <View style={styles.container}>
          <BodyTopbar
            message="Hi Willaotiexig, yesterday’s loss is today’s gain. Improve your skills for better chance at winning!"
            name="shadow gate"
          />
          <View style={styles.contentHome}>
            {/* News of the day */}
            <SlideNews />
            {/* Shadow Markets Watch */}
            <TabMarkets />
          </View>
        </View>
        {/* merge from longnn's branch */}
        <View style={styles.container}>
          <CandlestickChart />
        </View>
      </ScrollView>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
