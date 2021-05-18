import React, { memo } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { CandlestickChart, BodyTopbar } from '../../components';
import { theme } from '../../theme';
import { useHomeStyle } from './styles';
import { SlideNews } from './SlideNews';
import { TabMarkets } from './TabMarkets';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={theme.gradientGreen} style={styles.container}>
      <ScrollView style={styles.containerHome}>
        <View style={styles.container}>
          <BodyTopbar message="" name="shadow gate" />
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
    </LinearGradient>
  );
};

export const HomeScreen = memo(_HomeScreen);
