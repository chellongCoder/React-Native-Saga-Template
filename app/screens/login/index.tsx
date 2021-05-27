import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { AppButton, Checkbox, Text, TextField } from '../../components';
import { authActionsCreator } from '../../redux/actions';
import { CommonStyle, Images } from '../../constants';
import { useLoadingGlobal } from '../../hooks';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { useLoginStyle } from './styles';

const _LoginScreen = ({ navigation }: any) => {
  const styles = useLoginStyle();
  const { requesting } = useSelector((state: RootState) => state.AuthData);
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
        <IonicIcon name="ios-mail" size={Platform.SizeScale(20)} />
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

  const onLogin = useCallback(async () => {
    dispatch(
      authActionsCreator.loginRequest({
        email: userName,
        password: password,
      }),
    );
  }, [dispatch, password, userName]);

  useEffect(() => {
    if (requesting) {
      loading.onShow();
    } else {
      loading.onHide();
    }
  }, [loading, requesting]);

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
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export const LoginScreen = React.memo(_LoginScreen);
