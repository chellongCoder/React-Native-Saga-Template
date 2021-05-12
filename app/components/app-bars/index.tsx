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
  backgroundColor = COLORS.WHITE,
  colorIcon = COLORS.BLACK,
}: AppBarsProps) => {
  const styles = useStyleAppBars();
  const renderLeft = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={onPressLeft}
        style={styles.imageContainer}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
        <FastImage
          style={[CommonStyle.image, { width: '80%', height: '80%' }]}
          resizeMode="contain"
          source={Images.back}
          tintColor={colorIcon}
        />
      </TouchableOpacity>
    );
  }, [colorIcon, onPressLeft, styles.imageContainer]);
  const renderRight = useMemo(() => {
    return (
      <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} onPress={onPressRight}>
        {hasRightIcons ? <Text>right</Text> : <></>}
      </TouchableOpacity>
    );
  }, [hasRightIcons, onPressRight]);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      <View style={[styles.safeArea, { backgroundColor }]}>
        <View style={[styles.container]}>
          {renderLeft}
          <Text isLongText numberOfLines={1}>
            {title}
          </Text>
          {renderRight}
        </View>
      </View>
    </>
  );
};
export const AppBars = memo(AppBarsBase);
