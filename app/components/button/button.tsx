/* eslint-disable react/prop-types */
import React from 'react';
import { Button, withTheme } from 'react-native-paper';
import { Text } from '../text';
import styles from './button.styles';
import { AppButtonType } from './type';

function AppButton({ labelStyles, style, onSubmit, title, isLoadingVisible }: AppButtonType | any) {
  return (
    <Button
      accessibilityStates
      mode="contained"
      uppercase={false}
      onPress={onSubmit}
      loading={isLoadingVisible}
      style={[styles.container, style]}>
      <Text style={[styles.label, labelStyles]}>{title}</Text>
    </Button>
  );
}

export default AppButton;
