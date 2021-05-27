import React, { memo, useCallback, useState } from 'react';
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useCheckboxStyle } from './styles';

type CheckBoxProps = {
  checked: boolean;
  onChangeValue: (bool: boolean) => void;
};
const _Checkbox = ({ checked, onChangeValue }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const styles = useCheckboxStyle();

  const onCheck = useCallback(() => {
    onChangeValue(!isChecked);
    setIsChecked(!isChecked);
  }, [isChecked, onChangeValue]);

  if (isChecked) {
    return (
      <TouchableWithoutFeedback onPress={onCheck}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} onPress={onCheck}>
      <View style={styles.checkboxContainer} />
    </TouchableOpacity>
  );
};

export const Checkbox = memo(_Checkbox);
