import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BodyTopbar, CandlestickChart } from '../../components';
import { ROUTES } from '../../config';
import { useHomeStyle } from './styles';

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
        </View>
      </BodyTopbar>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
