import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { CommonStyle, Icons } from '../../constants';
import { Icon } from '../common-icon';
import { Text } from '../text';
import { useCommonHeaderStyle } from './styles';

interface CommonHeaderT {
  isRight?: boolean;
  title: string;
  buttonBackColor?: string;
}
const _CommonHeader = ({ isRight = true, title, buttonBackColor }: CommonHeaderT) => {
  const styles = useCommonHeaderStyle();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.container]}>
      <View style={[CommonStyle.row]}>
        <RippleButtonAnim onPress={onBack}>
          <Icon tintColor={buttonBackColor} icon={Icons.ICON_BACK} />
        </RippleButtonAnim>
        <Text style={styles.textHeader} fontType="fontBold">
          {title}
        </Text>
      </View>
      {isRight && (
        <RippleButtonAnim>
          <Icon icon={Icons.ICON_STAR} />
        </RippleButtonAnim>
      )}
    </View>
  );
};

export const CommonHeader = memo(_CommonHeader);
