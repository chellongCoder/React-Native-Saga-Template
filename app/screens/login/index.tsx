import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IonicIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
import { AppButton, Text, TextField } from '../../components';
import { authActionsCreator } from '../../redux/actions';
import { COLORS } from '../../constants';
import { useBackground, useLoadingGlobal, useToastInfo } from '../../hooks';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { mapMasterData } from '../../helpers/auth.helper';
import { useLoginStyle } from './styles';

const _LoginScreen = ({ navigation }: any) => {
  const { masterDatas: _masterDatas } = useSelector((state: RootState) => state.MasterData);
  const masterDatas = useMemo(() => mapMasterData(_masterDatas), [_masterDatas]);
  const { requesting } = useSelector((state: RootState) => state.AuthData);
  const styles = useLoginStyle();
  const loading = useLoadingGlobal();
  const [codeCompany, setCodeCompany] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const background = useBackground();
  const toast = useToastInfo();

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
    if (_.isEmpty(codeCompany) || _.isEmpty(userName) || _.isEmpty(password)) {
      toast.showError(' Các trường không được để trống.');
      return;
    }
    const config = {
      user_id: userName,
      password: password,
      device_id: 'aaaaa',
      token: 'aaaaaaaabbbbbbb',
      url: masterDatas.domains[codeCompany.toLocaleLowerCase()],
    };
    dispatch(authActionsCreator.loginRequest(config));
  }, [codeCompany, dispatch, masterDatas, password, toast, userName]);

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
            onChangeText={setCodeCompany}
            renderLeftAccessory={renderLeftAccessoryMail}
            style={styles.inpuRateStyle}
            placeholder="Mã công ty"
            inputStyle={styles.inputStyles}
          />
          <TextField
            onChangeText={setUserName}
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
