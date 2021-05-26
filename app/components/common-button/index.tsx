import React, { memo } from 'react';
import { View } from 'react-native';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';
import { Text } from '../text';
import { useCommonButtonStyle } from './styles';

const _CommonButton = ({ title }: { title: string }) => {
  const styles = useCommonButtonStyle();
  return (
    <RippleButtonAnim>
      <View style={styles.container}>
        <Text color={COLORS.BUTON_GREEN} fontSize={Platform.SizeScale(12)}>
          {title}
        </Text>
      </View>
    </RippleButtonAnim>
  );
};

export const CommonButton = memo(_CommonButton);
