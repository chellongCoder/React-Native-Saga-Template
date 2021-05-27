import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { CommonStyle, Images } from '../../constants';
import { AppButton } from '../button';
import { useModalErrorStyle } from './styles';

const _ModalError = ({ title, onHide }: { title: string; onHide: () => void }) => {
  const styles = useModalErrorStyle();
  return (
    <View style={styles.modal}>
      <View style={styles.image}>
        <Image resizeMode="contain" source={Images.verify_error} style={CommonStyle.image} />
      </View>
      <View style={styles.content}>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
      <AppButton onSubmit={onHide} style={styles.button} title={'Đóng'} />
    </View>
  );
};

export const ModalError = memo(_ModalError);
