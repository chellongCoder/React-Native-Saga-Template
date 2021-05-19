import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BodyTopbar } from '../../components';
import { ROUTES } from '../../config';
import { useHomeStyle } from './styles';
import { SlideNews } from './SlideNews';
import { TabMarkets } from './TabMarkets';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();

  const gotoCoin = useCallback(() => {
    navigation.navigate(ROUTES.coinProfile1);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <BodyTopbar>
        <View style={styles.body}>
          <TouchableOpacity onPress={gotoCoin}>
            <Text>go to coin</Text>
          </TouchableOpacity>
          <View style={styles.contentHome}>
            {/* News of the day */}
            <SlideNews />
            {/* Shadow Markets Watch */}
            <TabMarkets />
          </View>
        </View>
      </BodyTopbar>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
