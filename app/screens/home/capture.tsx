import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AppButton } from '../../components';
import { CommonStyle, Images } from '../../constants';
import { useBottomSheet } from '../../hooks';
import { Platform } from '../../theme';
import { useHomeStyle } from './styles';

const _Capture = () => {
  const styles = useHomeStyle();
  const bottomSheet = useBottomSheet();

  const onShowChoiceImage = useCallback(() => {
    bottomSheet.onShowActionSheet();
  }, [bottomSheet]);

  const uri = useMemo(() => {
    return Platform.OS === 'ios' ? bottomSheet.selectedImage?.sourceURL : bottomSheet.selectedImage?.path;
  }, [bottomSheet?.selectedImage?.path, bottomSheet?.selectedImage?.sourceURL]);

  return (
    <View style={styles.captureContainer}>
      <TouchableWithoutFeedback onPress={onShowChoiceImage}>
        <View style={styles.imageCapture}>
          <FastImage resizeMode="contain" style={CommonStyle.image} source={uri ? { uri } : Images.NOIMAGE} />
        </View>
      </TouchableWithoutFeedback>
      <AppButton onSubmit={onShowChoiceImage} title={'Chụp ảnh'} />
    </View>
  );
};

export const Capture = memo(_Capture);
