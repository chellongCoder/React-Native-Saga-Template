/* eslint-disable react/prop-types */
import React from 'react';
import { Button, withTheme } from 'react-native-paper';
import styles from './button.styles';
import { AppButtonType } from './type';

function AppButton({ labelStyles, style, onSubmit, title, isLoadingVisible }: AppButtonType | any) {
  return (
    <Button
      accessibilityStates
      labelStyle={[styles.label, labelStyles]}
      mode="contained"
      uppercase={false}
      onPress={onSubmit}
      loading={isLoadingVisible}
      style={[styles.container, style]}>
      {title}
    </Button>
  );
}

export default withTheme(AppButton);
