import { Alert } from 'react-native';

export const alertError = (message: string) => {
  Alert.alert('Lỗi!', message);
};
