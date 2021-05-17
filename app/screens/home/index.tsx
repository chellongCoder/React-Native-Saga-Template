import React, { memo } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CandlestickChart, BodyTopbar } from '../../components';
import { useHomeStyle } from './styles';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View style={styles.containerHome}>
      <ScrollView>
        <View style={styles.container}>
          <BodyTopbar />
        </View>
        {/* từ branch của longnn  */}
        <View style={styles.container}>
          <CandlestickChart />
        </View>
      </ScrollView>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
