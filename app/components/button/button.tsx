/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import { COLORS } from '../../constants';
import { Text } from '../text';
import styles from './button.styles';
import { AppButtonType } from './type';

function AppButton({ labelStyles, style, onSubmit, title, ml, mr, mb, mt, icon }: AppButtonType) {
  const configBackground: LinearGradientProps = {
    colors: COLORS.BLUE_GRADIENT,
    start: {
      x: 0.5,
      y: 0,
    },
  };
  const _style = useMemo(
    () => [styles.button, { marginLeft: ml, marginRight: mr, marginTop: mt, marginBottom: mb }, style],
    [mb, ml, mr, mt, style],
  );
  return (
    <LinearGradient style={_style} {...{ ...configBackground }} useAngle={true}>
      <TouchableOpacity onPress={onSubmit} style={[styles.container]}>
        {icon}
        <Text style={[styles.label, labelStyles]}>{title?.toUpperCase()}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default AppButton;
