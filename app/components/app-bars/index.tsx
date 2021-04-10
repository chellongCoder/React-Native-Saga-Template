import React, { memo, useMemo } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS, CommonStyle, Images } from '../../constants';
import { Text } from '../text';
import { useStyleAppBars } from './styles';
import { AppBarsProps } from './types';

const AppBarsBase = ({
  hasBack = true,
  iconPressLeft = 'ARROW_LEFT',
  onPressLeft,
  onPressRight,
  title,
  iconStyleLeft,
  isShadowBottom = true,
  textAlign = 'left',
  isShowDrawer = false,
  hasRightIcons = true,
}: AppBarsProps) => {
  const styles = useStyleAppBars();
  const renderLeft = useMemo(() => {
    return (
      <TouchableOpacity onPress={onPressLeft} style={styles.imageContainer}>
        <FastImage style={CommonStyle.image} resizeMode="contain" source={Images.back} />
      </TouchableOpacity>
    );
  }, [onPressLeft, styles.imageContainer]);
  const renderRight = useMemo(() => {
    return <TouchableOpacity onPress={onPressRight}>{hasRightIcons ? <Text>right</Text> : <></>}</TouchableOpacity>;
  }, [hasRightIcons, onPressRight]);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      <View style={styles.safeArea}>
        <View style={[styles.container]}>
          {renderLeft}
          <Text>{title}</Text>
          {renderRight}
        </View>
      </View>
    </>
  );
};
export const AppBars = memo(AppBarsBase);
