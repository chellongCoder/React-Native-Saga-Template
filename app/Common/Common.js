import { checkMultiple, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Linking, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';
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
    const value = await AsyncStorage.getItem('@token');
    if (_.isEmpty(value)) {
      return { token: '' };
    } else {
      return { token: value };
    }
  } catch (error) {
    return { token: '' };
  }
};

module.exports = {
  checkPermissionCamera,
  androidCameraPermissionOptions,
  VNDCurrencyFormatting,
  getToken,
};
