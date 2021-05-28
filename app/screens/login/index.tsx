import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IonicIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { AppButton, Text, TextField } from '../../components';
import { authActionsCreator } from '../../redux/actions';
import { COLORS } from '../../constants';
import { useBackground, useLoadingGlobal } from '../../hooks';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { useLoginStyle } from './styles';

const _LoginScreen = ({ navigation }: any) => {
  const styles = useLoginStyle();
  const { requesting } = useSelector((state: RootState) => state.AuthData);
  const loading = useLoadingGlobal();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const background = useBackground();

  const renderLeftAccessoryMail = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="barcode" size={Platform.SizeScale(20)} />
      </View>
    );
  }, [styles.logoInput]);

  const renderLeftAccessoryUsername = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="smileo" size={Platform.SizeScale(20)} />
      </View>
    );
  }, [styles.logoInput]);

  const renderLeftAccessoryPassword = useCallback(() => {
    return (
      <View style={styles.logoInput}>
        <IonicIcon name="key" size={Platform.SizeScale(20)} />
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

  useEffect(() => {
    navigation.addListener('focus', () => {
      background.changeBackground(BACKGROUND_TYPE.PURPLE_GRADIENT);
      // background.changeBackgroundTab(BACKGROUND_TYPE.NORMAL_BACKGROUND);
    });
    return () => {
      navigation.removeListener('focus', () => {});
    };
  }, [background, navigation]);

  const configBackground = {
    colors: COLORS.PURPLE_GRANDIENT,
    angle: 180,
  };
  return (
    <LinearGradient useAngle={true} {...{ ...configBackground }} style={styles.container}>
      <View style={styles.logo}>
        <Text color={COLORS.WHITE} fontSize={Platform.SizeScale(20)}>
          Phần mềm chấm công{' '}
        </Text>
      </View>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          <TextField
            onChangeText={setUserName}
            renderLeftAccessory={renderLeftAccessoryMail}
            style={styles.inpuRateStyle}
            placeholder="Mã công ty"
            inputStyle={styles.inputStyles}
          />
          <TextField
            onChangeText={setPassword}
            renderLeftAccessory={renderLeftAccessoryUsername}
            style={styles.inpuRateStyle}
            placeholder="Tên đăng nhập "
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

          <AppButton
            icon={<IonicIcon color={COLORS.WHITE} name="login" size={Platform.SizeScale(20)} />}
            title="ĐĂNG NHẬP"
            onSubmit={onLogin}
          />
          <View style={styles.logo}>
            <Text color={COLORS.WHITE} fontSize={Platform.SizeScale(20)}>
              Chấm công bằng khuôn mặt{' '}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export const LoginScreen = React.memo(_LoginScreen);
