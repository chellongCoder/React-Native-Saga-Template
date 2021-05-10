import React, { memo } from 'react';
import { View, Image } from 'react-native';
import { CommonStyle, Images } from '../../constants';
import { AppButton } from '../button';
import { Text } from '../text';
import { useModalSuccessStyle } from './styles';

const _ModalSuccess = ({ title, onHide }: { title: string; onHide: () => void }) => {
  const styles = useModalSuccessStyle();
  return (
    <View style={styles.modal}>
      <View style={styles.image}>
        <Image resizeMode="contain" source={Images.verify} style={CommonStyle.image} />
      </View>
      <View style={styles.content}>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
      <AppButton onSubmit={onHide} style={styles.button} title={'Đồng ý'} />
    </View>
  );
};

export const ModalSuccess = memo(_ModalSuccess);
