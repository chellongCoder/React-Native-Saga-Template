import React, { memo } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';
import { useBackgroundStyle } from './styles';
import { BackgroundProps, BACKGROUND_TYPE } from './types';

const _Background = ({ type }: BackgroundProps) => {
  const styles = useBackgroundStyle();

  switch (type) {
    case BACKGROUND_TYPE.GREEN_GRADIENT:
      return <LinearGradient useAngle angle={108.66} colors={COLORS.GREEN_GRADIENT} style={styles.container} />;
    case BACKGROUND_TYPE.MINT_BLUE_GRADIENT:
      return <LinearGradient useAngle angle={180} colors={COLORS.MINT_BLUE_GRADIENT} style={styles.container} />;

    default:
      return <View style={styles.container} />;
  }
};

export const Background = memo(_Background);
