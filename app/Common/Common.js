import { checkMultiple, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Linking, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';
import { gender } from './TextHelper';
import { AppIcon } from './AppIcon';
import 'intl';
export const checkPermissionCamera = (handler) => {
  checkMultiple(
    Platform.select({
      ios: [PERMISSIONS.IOS.CAMERA],
      android: [PERMISSIONS.ANDROID.CAMERA],
    }),
  ).then((statuses) => {
    if (Platform.OS === 'ios') {
      checkStatusPermission('Máy ảnh', PERMISSIONS.IOS.CAMERA, statuses[PERMISSIONS.IOS.CAMERA], handler);
    } else {
      checkStatusPermission('Máy ảnh', PERMISSIONS.ANDROID.CAMERA, statuses[PERMISSIONS.ANDROID.CAMERA], handler);
    }
  });
};

export const checkStatusPermission = (name, permission, status, handler) => {
  switch (status) {
    case RESULTS.UNAVAILABLE:
      console.log('This feature is not available (on this device / in this context)');
      Alert.alert('Quyền truy cập', `Thiết bị của bạn không thể truy cập vào "${name}"!`);
      break;
    case RESULTS.DENIED:
      console.log('The permission has not been requested / is denied but requestable');
      request(permission).then((result) => {
        if (result === RESULTS.GRANTED) {
          if (typeof handler === 'function') {
            handler();
          }
        }
      });
      break;
    case RESULTS.GRANTED:
      console.log('The permission is granted');
      if (typeof handler === 'function') {
        handler();
      }
      break;
    case RESULTS.BLOCKED:
      console.log('The permission is denied and not requestable anymore');
      Alert.alert(
        'Quyền truy cập',
        `Thiết bị của bạn đã từ chối quyền truy cập vào "${name}"!\nVui lòng cấp quyền truy cập trong cài đặt để sử dụng tính năng này`,
        [
          {
            text: 'Huỷ',
            style: 'cancel',
          },
          { text: 'Mở cài đặt', onPress: () => Linking.openSettings() },
        ],
        { cancelable: false },
      );
      break;
  }
};

export const VNDCurrencyFormatting = (unit_price) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(unit_price);

export const androidCameraPermissionOptions = {
  title: 'permissionCamera',
  message: 'permissionCameraMessage',
  buttonPositive: 'ok',
  buttonNegative: 'cancel',
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    if (_.isEmpty(token)) {
      return { token: null };
    } else {
      return { token };
    }
  } catch (error) {
    return { token: null };
  }
};

export const getDeviceToken = async () => {
  try {
    const deviceToken = await AsyncStorage.getItem('@fcm_token');
    if (_.isEmpty(deviceToken)) {
      return { deviceToken: null };
    } else {
      return { deviceToken };
    }
  } catch (error) {
    return { deviceToken: null };
  }
};

export const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('@token', token);
    return 'THANH_CONG';
  } catch (e) {
    return e;
  }
};

export const getGender = (value) => {
  switch (value) {
    case gender.male:
      return {
        id: 0,
        name: 'Nam',
        icon: AppIcon.Icon_Male,
      };
    case gender.female:
      return {
        id: 1,
        name: 'Nữ',
        icon: AppIcon.Icon_Female,
      };
    case gender.other:
      return {
        id: 2,
        name: 'Khác',
        icon: AppIcon.Icon_Other,
      };
    default:
      return {};
  }
};

module.exports = {
  checkPermissionCamera,
  androidCameraPermissionOptions,
  VNDCurrencyFormatting,
  getToken,
  getDeviceToken,
  saveToken,
  getGender,
};
