import React, { memo, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BodyTopbar } from '../../components';
import { ROUTES } from '../../config';
import { useBackground } from '../../hooks';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { useHomeStyle } from './styles';
import { SlideNews } from './SlideNews';
import { TabMarkets } from './TabMarkets';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();
  const background = useBackground();

  useEffect(() => {
    navigation.addListener('focus', () => {
      background.changeBackground(BACKGROUND_TYPE.GREEN_GRADIENT);
      background.changeBackgroundTab(BACKGROUND_TYPE.NORMAL_BACKGROUND);
    });
    return () => {
      navigation.removeListener('focus', () => {});
    };
  }, [background, navigation]);

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
