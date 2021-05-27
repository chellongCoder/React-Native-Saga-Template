/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import IonicIcon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants';
import { Text } from '../text';
import { Platform } from '../../theme';
import styles from './button.styles';
import { AppButtonType } from './type';

function AppButton({ labelStyles, style, onSubmit, title, isLoadingVisible }: AppButtonType | any) {
  const configBackground: LinearGradientProps = {
    colors: COLORS.BLUE_GRADIENT,
    start: {
      x: 0.5,
      y: 0,
    },
  };
  return (
    <LinearGradient style={styles.button} {...{ ...configBackground }} useAngle={true}>
      <TouchableOpacity onPress={onSubmit} style={[styles.container, style]}>
        <IonicIcon color={COLORS.WHITE} name="login" size={Platform.SizeScale(20)} />
        <Text style={[styles.label, labelStyles]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default AppButton;
