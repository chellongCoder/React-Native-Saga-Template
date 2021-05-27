import React, { memo, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import { COLORS } from '../../constants';
import { ImageViewComponentProps } from '../../tools/image-view/types';
import { useImageViewStyle } from './styles';

const _ImageView = ({ isVisible, urls, handleDismiss }: ImageViewComponentProps) => {
  const styles = useImageViewStyle();

  const loadingRender = useCallback(() => {
    return <ActivityIndicator size="small" color={COLORS.GREEEN} />;
  }, []);
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeInUp"
      backdropOpacity={0.4}
      useNativeDriver
      animationOut="fadeOutDown"
      style={styles.container}>
      <View style={styles.content}>
        <ImageViewer
          enableSwipeDown
          enableImageZoom
          useNativeDriver
          onCancel={handleDismiss}
          imageUrls={urls.map((url: string) => ({ url }))}
          {...{ loadingRender }}
        />
      </View>
    </Modal>
  );
};

export const ImageView = memo(_ImageView);
