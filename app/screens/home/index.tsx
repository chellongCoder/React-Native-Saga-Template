import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BodyTopbar } from '../../components';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { ROUTES } from '../../config';
import { useBackground } from '../../hooks';
import { SlideNews } from './SlideNews';
import { useHomeStyle } from './styles';
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
          <View style={styles.contentHome}>
            {/* News of the day */}
            <SlideNews />
            {/* Shadow Markets Watch */}
            <TabMarkets />
          </View>
          <TouchableOpacity onPress={gotoCoin}>
            <Text>go to coin</Text>
          </TouchableOpacity>
        </View>
      </BodyTopbar>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
