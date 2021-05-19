import React, { memo, useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Text } from '../text';
import { COLORS, CommonStyle, Icons } from '../../constants';
import { choiceItemArray } from '../../util';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { useCoinProfileEntryInfoStyle } from './styles';
import { Info } from './Info';

const _CoinProfileEntryInfo = ({}) => {
  const navigation = useNavigation();
  const styles = useCoinProfileEntryInfoStyle();
  const [t, i18n] = useTranslation();
  const i18 = (key) => {
    return t(key);
  };
  const [tabs, setTabs] = useState([
    {
      name: i18('CoinProfile.day'),
      active: false,
    },
    {
      name: i18('CoinProfile.week'),
      active: false,
    },
    {
      name: i18('CoinProfile.month'),
      active: false,
    },
    {
      name: i18('CoinProfile.year'),
      active: false,
    },
    {
      name: i18('CoinProfile.all'),
      active: false,
    },
  ]);

  const onPressTab = useCallback(
    (tab: any, index: number) => {
      const newArr = choiceItemArray(tabs, tab, index);
      setTabs([...newArr]);
    },
    [tabs],
  );

  return (
    <View style={styles.container}>
      <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.tab]}>
        {tabs.map((value, index) => {
          return (
            <RippleButtonAnim onPress={() => onPressTab(value, index)}>
              <Text isPress={value.active} activeColor={COLORS.GREEN2} textTransform="capitalize">
                {value.name}
              </Text>
            </RippleButtonAnim>
          );
        })}
        <RippleButtonAnim containerStyle={styles.icon}>
          <View style={[CommonStyle.normalIcon]}>
            <Image resizeMode="contain" source={Icons.ICON_INCREASE} style={CommonStyle.image} />
          </View>
        </RippleButtonAnim>
      </View>
      <Info />
    </View>
  );
};

export const CoinProfileEntryInfo = memo(_CoinProfileEntryInfo);
