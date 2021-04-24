import React from 'react';
import { StyleSheet, TextInput, Image } from 'react-native';
import { Text } from '../components';
import { COLORS } from '../constants';
import { Platform } from '../theme';
import Row from './Row';
import { KeyboardTypeOptions } from './types';

const TextInputInfo = ({
  label,
  placeholder,
  icon,
  keyboardType,
}: {
  label: string;
  placeholder: string;
  icon?: any;
  keyboardType?: KeyboardTypeOptions;
}) => {
  return (
    <Row style={styles.contain}>
      <Text style={styles.styTxt}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.styTxtInput}
        placeholderTextColor={COLORS.GRAY}
        keyboardType={keyboardType}
      />
      <Image source={icon} style={styles.styIcon} />
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
    marginTop: 10,
  },
  styTxt: {
    color: COLORS.GRAY,
    fontWeight: '500',
    flex: 1,
  },
  styTxtInput: {
    flex: 3,
    fontSize: Platform.SizeScale(14),
    color: COLORS.BLACK,
    ...Platform.textBase,
  },
  styIcon: {
    width: 20,
    height: 20,
  },
});
