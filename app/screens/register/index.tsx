import AsyncStorage from '@react-native-community/async-storage';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { AppButton, TextField } from '../../components';
import { screens } from '../../config';
import { CommonStyle, Images } from '../../constants';
import { useLoadingGlobal, useToastInfo } from '../../hooks';
import navigationService from '../../navigation/navigation-service';
import { authActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { alertError } from '../../util';
import { Platform } from '../../theme';
import { useRegisterStyle } from './styles';

const _RegisterScreen = ({ navigation }: any) => {
  const styles = useRegisterStyle();
  const { requesting, success } = useSelector((state: RootState) => state.AuthData);
  const loading = useLoadingGlobal();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const dispatch = useDispatch();
  const toast = useToastInfo();

  const renderLeftAccessoryName = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="ios-person" size={Platform.SizeScale(20)} />
      </View>
    );
  }, [styles.logoInput]);

  const renderLeftAccessoryMail = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="ios-mail" size={Platform.SizeScale(20)} />
      </View>
    );
  }, [styles.logoInput]);

  const renderLeftAccessoryPhone = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="ios-phone-portrait" size={Platform.SizeScale(20)} />
      </View>
    );
  }, [styles.logoInput]);

  const renderLeftAccessoryPassword = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="ios-key" size={Platform.SizeScale(20)} />
      </View>
    );
  }, [styles.logoInput]);

  const onSignup = useCallback(async () => {
    if (password === rePassword) {
      const fcmToken = await AsyncStorage.getItem('@fcm_token');

      dispatch(
        authActionsCreator.registerRequest({
          device_token: fcmToken || '',
          // email: 'thienthanchientranh1996@gmail.com',
          // password: '123456',
          email,
          name,
          phone,
          password,
          re_password: rePassword,
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
    if (success) {
      toast.showSucess('Đăng kí thành công, vui lòng đăng nhập lại');
      navigationService.replace(screens.login, {});
    }
  }, [loading, navigation, requesting, success, toast]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <FastImage resizeMode={'contain'} style={CommonStyle.image} source={Images.LOGO} />
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <TextField
            onChangeText={setName}
            renderLeftAccessory={renderLeftAccessoryName}
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
            renderLeftAccessory={renderLeftAccessoryPhone}
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

          <AppButton style={styles.buttonLogin} title="ĐĂNG KÍ" onSubmit={onSignup} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export const RegisterScreen = memo(_RegisterScreen);
