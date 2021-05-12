import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, ImageBackground, ScrollView } from 'react-native';
import _ from 'lodash';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { useSelector, useDispatch } from 'react-redux';
import ImagePickerCrop from 'react-native-image-crop-picker';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { AppIcon } from '../../constants/AppIcon';
import { AppBars, Text } from '../../components';
import { COLORS, TextHelper } from '../../constants';
import CheckBoxIcon from '../../util/CheckBoxIcon';
import TextInputInfo from '../../util/TextInputInfo';
import Row from '../../util/Row';
import { RootState } from '../../redux/reducers';
import { alertMessage, showConfirm } from '../../util';
import { accountActionsCreator } from '../../redux/actions';
import { useLoadingGlobal } from '../../hooks';
import styles from './changeInfo.styles';
import { checkboxGender } from './types';

interface Props {}

const ChangeInfo = (props: Props) => {
  const navigation = useNavigation();
  const { userInfo, error, isLoading, isErrUpdateInfo, tempData } = useSelector((state: RootState) => state.AuthData);
  const dispatch = useDispatch();
  const [genderValue, setGenderValue] = useState({ name: '' || undefined, id: 0 || undefined });
  const [isDateTimePickerVisible, setisDateTimePickerVisible] = useState(false);
  const [name, setName] = useState(userInfo?.name || '');
  const [date, setDate] = useState(userInfo?.birth_date || '');
  const [phone, setPhone] = useState(userInfo?.phone || '');
  const [address, setAddress] = useState(userInfo?.address || '');
  const [email, setEmail] = useState(userInfo?.email || '');
  const [avatar, setAvatar] = useState(userInfo?.avatar || '');
  const [avatarTemp, setAvatarTemp] = useState(null);

  const hookLoadingGlobal = useLoadingGlobal();

  const goBack = () => {
    navigation.goBack();
  };

  const handlerSelect = (value: checkboxGender) => {
    setGenderValue(value);
  };

  const showDateTimePicker = () => {
    setisDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setisDateTimePickerVisible(false);
  };

  const handleDatePicked = (date: Date) => {
    const birthDay = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    setDate(birthDay);
    hideDateTimePicker();
  };

  const onChangeTextName = (value: string) => {
    setName(value);
  };

  const onChangeTextDate = (value: string) => {
    setDate(value);
  };

  const onChangeTextPhone = (value: string) => {
    setPhone(value);
  };

  const onChangeTextAddress = (value: string) => {
    setAddress(value);
  };

  const onChangeTextEmail = (value: string) => {
    setEmail(value);
  };

  useEffect(() => {
    if (isLoading) {
      hookLoadingGlobal.onShow();
    } else {
      hookLoadingGlobal.onHide();
      if (isErrUpdateInfo) {
        // alertMessage('Thông báo', () => {}, error);
      } else {
        // alertMessage(
        //   'Thông báo',
        //   () => {
        //     navigation.goBack();
        //   },
        //   'Cập nhật thông tin thành công',
        // );
      }
    }
  }, [error, hookLoadingGlobal, isErrUpdateInfo, isLoading, navigation]);

  const handleUpdateInfo = useCallback(async () => {
    const { accessToken } = tempData;
    const params = {
      token: accessToken,
      name,
      address,
      birth_date: date,
      phone,
      email,
    };
    if (!_.isEmpty(avatarTemp)) {
      params.avatar = avatarTemp;
    }
    dispatch(accountActionsCreator.updateInfoRequest(params));
  }, [address, avatarTemp, date, dispatch, email, name, phone, tempData]);

  const cropPickerAvatar = () => {
    ImagePickerCrop.openPicker({
      cropping: true,
      includeBase64: true,
      cropperToolbarTitle: 'Chọn kích thước ảnh',
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
      cropperChooseText: 'Chọn',
      cropperCancelText: 'Huỷ',
      width: 500,
      height: 500,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        if (image) {
          setAvatar(image.path);
          setAvatarTemp(image);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.contain}>
      <ImageBackground source={AppIcon.HeaderAccount} style={styles.styHeader}>
        <AppBars hasRightIcons={false} backgroundColor={'transparent'} colorIcon={COLORS.WHITE} onPressLeft={goBack} />
      </ImageBackground>
      <View style={styles.styWrapContent}>
        <RippleButtonAnim containerStyle={styles.styWrapAcc} onPress={cropPickerAvatar}>
          <View style={styles.styWrapAva}>
            <Image
              source={{ uri: avatar || 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' }}
              style={styles.styAva}
            />
          </View>
          <Image source={AppIcon.edit_ava} style={styles.styEdit} />
        </RippleButtonAnim>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Row>
            <Text style={styles.styTxtLabel} fontType={'fontBold'}>
              Giới tính:{' '}
            </Text>
            <CheckBoxIcon selectedValue={genderValue} gender={TextHelper.gender.male} handlerSelect={handlerSelect} />
            <CheckBoxIcon selectedValue={genderValue} gender={TextHelper.gender.female} handlerSelect={handlerSelect} />
            <CheckBoxIcon selectedValue={genderValue} gender={TextHelper.gender.other} handlerSelect={handlerSelect} />
          </Row>
          <TextInputInfo
            value={name}
            label={'Họ và Tên'}
            placeholder={'Nhập họ và tên'}
            onChangeText={onChangeTextName}
          />
          <TextInputInfo
            value={date}
            label={'Ngày sinh'}
            placeholder={'Nhập ngày sinh'}
            icon={AppIcon.IconDate}
            keyboardType={'numbers-and-punctuation'}
            onPressIcon={showDateTimePicker}
            onChangeText={onChangeTextDate}
          />
          <TextInputInfo
            value={address}
            label={'Địa chỉ'}
            placeholder={'Nhập địa chỉ'}
            onChangeText={onChangeTextAddress}
          />
          <TextInputInfo
            value={phone}
            label={'Điện thoại'}
            placeholder={'Nhập số điện thoại'}
            keyboardType={'phone-pad'}
            onChangeText={onChangeTextPhone}
          />
          <TextInputInfo value={email} label={'Email'} placeholder={'Nhập email'} onChangeText={onChangeTextEmail} />
          <View style={{ flex: 1 }} />
          <RippleButtonAnim onPress={handleUpdateInfo}>
            <View style={styles.styWrapBtn}>
              <Text style={{ color: COLORS.WHITE }}>Lưu thay đổi</Text>
            </View>
          </RippleButtonAnim>
        </ScrollView>
      </View>
      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
        isDarkModeEnabled={true}
        headerTextIOS={'Chọn ngày sinh'}
        cancelTextIOS={'Quay lại'}
        confirmTextIOS={'Xác nhận'}
        locale={'vi-VN'}
      />
    </View>
  );
};

export default React.memo(ChangeInfo);
