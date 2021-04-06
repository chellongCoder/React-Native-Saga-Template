import React, { useCallback, useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { OutlinedTextField } from 'react-native-material-textfield';
import { useDispatch } from 'react-redux';
import { AppButton, FacebookButton, GoogleButton } from '../../components';
import { authActionsCreator } from '../../redux/actions';

const LoginScreen = withTheme(() => {
  const fieldRef: any = useRef();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    let { current: field } = fieldRef;
    console.log('====================================');
    console.log(field);
    console.log('====================================');
  };

  const formatText = (text: string) => {
    return text.replace(/[^+\d]/g, '');
  };

  const onLogin = useCallback(() => {
    dispatch(
      authActionsCreator.loginRequest({
        device_token: '',
        device_type: Platform.OS === 'ios' ? 'IOS' : 'ANDROID',
        email: 'thienthanchientranh1996@gmail.com',
        password: '123456',
        remember: 1,
      }),
    );
  }, [dispatch]);
  return (
    <View>
      <OutlinedTextField
        label="Phone number"
        keyboardType="phone-pad"
        formatText={formatText}
        onSubmitEditing={onSubmit}
        onChangeText={setUserName}
      />
      <OutlinedTextField
        label="Enter Password"
        keyboardType="default"
        onSubmitEditing={onSubmit}
        ref={fieldRef}
        secureTextEntry
        onChangeText={setPassword}
      />
      <AppButton title="Submit" onSubmit={onLogin} />
      <GoogleButton />
      <FacebookButton />
    </View>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({});
