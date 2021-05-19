import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CandlestickChart } from '../../components';
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
      <TouchableOpacity onPress={gotoCoin}>
        <Text>go to coin</Text>
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
