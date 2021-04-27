import React from 'react';
import { StyleSheet, TextInput, Image } from 'react-native';
import RippleButtonAnim from '../anim/RippleButtonAnim';
import { Text } from '../components';
import { COLORS } from '../constants';
import { Platform } from '../theme';
import Row from './Row';
import { KeyboardTypeOptions } from './types';

const TextInputInfo = ({
  label,
  value,
  placeholder,
  icon,
  keyboardType,
  onPressIcon,
  onChangeText,
}: {
  label: string;
  value: string;
  placeholder: string;
  icon?: any;
  keyboardType?: KeyboardTypeOptions;
  onPressIcon?: () => void;
  onChangeText?: (value: string) => void;
}) => {
  return (
    <Row style={styles.contain}>
      <Text style={styles.styTxt} fontType={'fontBold'}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.styTxtInput}
        placeholderTextColor={COLORS.GRAY}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
      <RippleButtonAnim onPress={onPressIcon}>
        <Image source={icon} style={styles.styIcon} />
      </RippleButtonAnim>
    </Row>
  );
};

export default TextInputInfo;

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY,
    padding: 10,
    marginVertical: 10,
  },
  styTxt: {
    color: COLORS.GRAY,
    flex: 1,
  },
  styTxtInput: {
    flex: 3,
    color: COLORS.BLACK,
    letterSpacing: 1,
    ...Platform.textBase,
  },
  styIcon: {
    width: 20,
    height: 20,
  },
});
