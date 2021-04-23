import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton, TextField } from '../../components';
import { screens } from '../../config';
import { CommonStyle, Images } from '../../constants';
import { useLoadingGlobal } from '../../hooks';
import { authActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { alertError } from '../../util';
import { useRegisterStyle } from './styles';

const styles = StyleSheet.create({});

const _RegisterScreen = ({ navigation }: any) => {
  const styles = useRegisterStyle();
  const { requesting, data } = useSelector((state: RootState) => state.AuthData);
  const loading = useLoadingGlobal();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const dispatch = useDispatch();

  const renderLeftAccessoryMail = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <Image resizeMode="contain" style={CommonStyle.image} source={Images.mail} />
      </View>
    );
  }, [styles.logoInput]);

  const renderLeftAccessoryPassword = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <Image resizeMode="contain" style={CommonStyle.image} source={Images.lock} />
      </View>
    );
  }, [styles.logoInput]);

  const onLogin = useCallback(() => {
    if (password === rePassword) {
      dispatch(
        authActionsCreator.registerRequest({
          device_token: '',
          // email: 'thienthanchientranh1996@gmail.com',
          // password: '123456',
          email,
          name,
          phone,
        }),
      );
    } else {
      alertError('Mật khẩu nhập lại không khớp.');
    }
  }, [dispatch, email, name, password, phone, rePassword]);

  useEffect(() => {
    if (requesting) {
      loading.onShow();
    } else {
      loading.onHide();
    }
  }, [loading, requesting]);

  useEffect(() => {
    if (data) {
      navigation.navigate(screens.bottomTabStack);
    }
  }, [data, loading, navigation, requesting]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <FastImage resizeMode={'contain'} style={CommonStyle.image} source={Images.LOGO} />
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <TextField
            onChangeText={setName}
            renderLeftAccessory={renderLeftAccessoryMail}
            style={styles.inpuRateStyle}
            placeholder="Tên đầy đủ"
            inputStyle={styles.inputStyles}
          />
          <TextField
            onChangeText={setEmail}
            renderLeftAccessory={renderLeftAccessoryMail}
            style={styles.inpuRateStyle}
            placeholder="Email"
            inputStyle={styles.inputStyles}
          />
          <TextField
            onChangeText={setPhone}
            renderLeftAccessory={renderLeftAccessoryMail}
            style={styles.inpuRateStyle}
            placeholder="Số điện thoại"
            inputStyle={styles.inputStyles}
          />
          <TextField
            secureTextEntry
            onChangeText={setPassword}
            renderLeftAccessory={renderLeftAccessoryPassword}
            style={styles.inpuRateStyle}
            placeholder="Mật khẩu"
            inputStyle={styles.inputStyles}
          />
          <TextField
            secureTextEntry
            onChangeText={setRePassword}
            renderLeftAccessory={renderLeftAccessoryPassword}
            style={styles.inpuRateStyle}
            placeholder="Nhập lại mật khẩu"
            inputStyle={styles.inputStyles}
          />

          <AppButton style={styles.buttonLogin} title="ĐĂNG KÍ" onSubmit={onLogin} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export const RegisterScreen = memo(_RegisterScreen);
