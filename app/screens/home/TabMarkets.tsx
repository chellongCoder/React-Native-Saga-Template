import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MarketWatch } from '../../components/market-watch';
import { useHomeStyle } from './styles';

const _TabMarkets = ({ onPressMore }: any) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  return (
    <View>
      <View style={styles.wrapHeadMarket}>
        <Text style={styles.title}>Shadow Markets Watch</Text>
        <TouchableOpacity onPress={onPressMore} hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
          <Text>MORE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapMarkets}>
        <MarketWatch />
      </View>
    </View>
  );
};

export const TabMarkets = memo(_TabMarkets);
