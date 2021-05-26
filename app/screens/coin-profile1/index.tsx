import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BreadCrumb, CandlestickChart, CoinProfileEntryInfo, CommonHeader, Icon, Text } from '../../components';
import { useBackground } from '../../hooks';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { COLORS, CommonStyle, Icons } from '../../constants';
import { useCoinProfile1Style } from './styles';

const _CoinProfile1Screen = ({}) => {
  const navigation = useNavigation();
  const styles = useCoinProfile1Style();
  const background = useBackground();

  useEffect(() => {
    background.changeBackground(BACKGROUND_TYPE.NORMAL_BACKGROUND);
  }, [background]);

  return (
    <View style={styles.container}>
      <CommonHeader title="BTC - Bitcoin" />
      <BreadCrumb
        left={
          <View style={[CommonStyle.row, styles.leftBread]}>
            <Text style={styles.txtPrice}>$56,955</Text>
            <Text color={COLORS.LIGHT_GREEEN}>+1,54 %</Text>
          </View>
        }
        right={
          <View style={[styles.rightBread, CommonStyle.row]}>
            <Text fontType="fontBold" style={styles.txtRightBread}>
              USD
            </Text>
            <Icon icon={Icons.ICON_DROP_DOWN} size={1.5} />
          </View>
        }
      />
      <CandlestickChart />
      <CoinProfileEntryInfo />
    </View>
  );
};

export const CoinProfile1Screen = memo(_CoinProfile1Screen);
