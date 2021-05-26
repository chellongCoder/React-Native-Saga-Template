import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { useBackground } from '../../hooks';
import { CommonHeader } from '../../components';
import { useIcoProfileStyle } from './styles';
import About from './About';

const _IcoProfileScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useIcoProfileStyle();
  const background = useBackground();

  useEffect(() => {
    navigation.addListener('focus', () => {
      background.changeBackground(BACKGROUND_TYPE.MINT_BLUE_GRADIENT);
    });
    return () => {
      navigation.removeListener('focus', () => {});
    };
  }, [background, navigation]);

  return (
    <LinearGradient useAngle angle={180} colors={COLORS.MINT_BLUE_GRADIENT} style={styles.container}>
      <CommonHeader buttonBackColor={COLORS.BUTON_GREEN} title={'PointPay'} isRight={false} />
      <About />
    </LinearGradient>
  );
};

export const IcoProfileScreen = memo(_IcoProfileScreen);
