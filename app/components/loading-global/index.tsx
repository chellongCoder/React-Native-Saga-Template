import React, { memo, useEffect, useRef } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { CommonStyle, Images } from '../../constants';
import { useLoadingGlobalStyle } from './styles';

const _LoadingGlobal = ({}) => {
  const opacity = new Animated.Value(0);
  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      console.log('ok end');
    });
  }, [opacity]);
  const styles = useLoadingGlobalStyle();
  return (
    <Animated.View style={[styles.container, { opacity: 1 }]}>
      <Animated.View style={[styles.imageContainer, { transform: [{ scale: anim.current }] }]}>
        <Image source={Images.ICON_APP} resizeMode={'contain'} style={CommonStyle.image} />
      </Animated.View>
    </Animated.View>
  );
};

export const LoadingGlobal = memo(_LoadingGlobal);
