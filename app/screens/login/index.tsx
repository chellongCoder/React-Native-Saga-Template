import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppButton, Checkbox, FacebookButton, Text, TextField } from '../../components';
import { authActionsCreator } from '../../redux/actions';
import { CommonStyle, Images } from '../../constants';
import { useLoadingGlobal } from '../../hooks';
import { RootState } from '../../redux/reducers';
import { screens } from '../../config';
import { useLoginStyle } from './styles';

const LoginScreen = ({ navigation }: any) => {
  const styles = useLoginStyle();
  const { requesting, data } = useSelector((state: RootState) => state.AuthData);
  const loading = useLoadingGlobal();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [member, setMember] = useState(false);
  const dispatch = useDispatch();

  const onChangeRemember = useCallback((bool: boolean) => {
    setMember(bool);
  }, []);

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
    dispatch(
      authActionsCreator.loginRequest({
        device_token: '',
        // email: 'thienthanchientranh1996@gmail.com',
        // password: '123456',
        email: userName,
        password: password,
        remember: member ? 1 : 0,
      }),
    );
  }, [dispatch, member, password, userName]);

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
            onChangeText={setUserName}
            renderLeftAccessory={renderLeftAccessoryMail}
            style={styles.inpuRateStyle}
            placeholder="Email"
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
          <View style={[styles.checkboxContainer, CommonStyle.row]}>
            <Checkbox checked={member} onChangeValue={onChangeRemember} />
            <Text style={styles.txtMember}>Ghi nhớ</Text>
          </View>

          <AppButton style={styles.buttonLogin} title="ĐĂNG NHẬP" onSubmit={onLogin} />
          <FacebookButton textButton={styles.textButton} style={styles.buttonFacebook} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default React.memo(LoginScreen);
