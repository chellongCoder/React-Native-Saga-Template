import React, { memo, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';
import { CommonStyle, Images } from '../../constants';
import { useLoadingGlobalStyle } from './styles';

const _LoadingGlobal = ({}) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: EasingNode.linear,
    }).start(() => {
      console.log('ok end');
    });
  }, [opacity]);
  const styles = useLoadingGlobalStyle();
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.imageContainer}>
        <Image source={Images.loading_global} resizeMode={'contain'} style={CommonStyle.image} />
      </View>
    </Animated.View>
  );
};

export const LoadingGlobal = memo(_LoadingGlobal);
