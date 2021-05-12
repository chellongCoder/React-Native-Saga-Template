import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useToastInfoStyle } from './styles';

const _ToastInfo = ({}) => {
  const styles = useToastInfoStyle();
  return <View />;
};

export const ToastInfo = memo(_ToastInfo);
