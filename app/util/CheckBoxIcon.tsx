import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getGender } from '../Common/Common';
import { Text } from '../components';
import { COLORS } from '../constants';
import { checkboxGender } from '../screens/ChangeInfo/types';
import { Platform } from '../theme';
import Row from './Row';

interface Props {
  selectedValue: checkboxGender;
  gender: string;
  handlerSelect: (gender: checkboxGender) => void;
}

const CheckBoxIcon = ({ gender, handlerSelect, selectedValue }: Props) => {
  const { name, icon, id } = getGender(gender);

  const onSelect = () => {
    handlerSelect({ name, id });
  };
  const isCheck = selectedValue.id === id;
  return (
    <TouchableOpacity onPress={onSelect}>
      <Row style={isCheck ? styles.containActive : styles.contain}>
        <Image source={icon} style={isCheck ? styles.styIconActive : styles.styIcon} />
        <Text style={isCheck ? styles.styNameActive : styles.styName}>{name}</Text>
      </Row>
    </TouchableOpacity>
  );
};

export default React.memo(CheckBoxIcon);

const styles = StyleSheet.create({
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    marginHorizontal: 10,
    minWidth: 80,
  },
  containActive: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.CUSTOM_GRAY,
    marginHorizontal: 10,
    minWidth: 80,
    backgroundColor: COLORS.GREEEN,
  },
  styIcon: {
    width: 18,
    height: 18,
    marginHorizontal: 5,
  },
  styIconActive: {
    width: 18,
    height: 18,
    marginHorizontal: 5,
    tintColor: COLORS.WHITE,
  },
  styName: {
    color: COLORS.GRAY,
    fontWeight: '500',
    fontSize: Platform.SizeScale(12),
    marginTop: 4,
    lineHeight: 13,
  },
  styNameActive: {
    color: COLORS.WHITE,
    fontWeight: '500',
    fontSize: Platform.SizeScale(12),
    marginTop: 4,
    lineHeight: 13,
  },
});
