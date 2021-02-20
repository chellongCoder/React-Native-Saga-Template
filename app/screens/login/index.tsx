import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { OutlinedTextField } from 'react-native-material-textfield';
const LoginScreen = withTheme(() => {
  const fieldRef: any = useRef();

  const onSubmit = () => {
    let { current: field } = fieldRef;
    console.log('====================================');
    console.log(field);
    console.log('====================================');
  };

  const formatText = (text: string) => {
    return text.replace(/[^+\d]/g, '');
  };

  return (
    <View>
      <OutlinedTextField
        label="Phone number"
        keyboardType="phone-pad"
        formatText={formatText}
        onSubmitEditing={onSubmit}
        ref={fieldRef}
      />
    </View>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({});
