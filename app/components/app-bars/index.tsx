import React, { memo, useMemo } from 'react';
import { StatusBar, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS, CommonStyle, Images } from '../../constants';
import { Text } from '../text';
import { useStyleAppBars } from './styles';
import { AppBarsProps } from './types';

const AppBarsBase = ({
  hasBack = true,
  iconPressLeft = 'ARROW_LEFT',
  onPressLeft,
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
      <View style={styles.imageContainer}>
        <FastImage style={CommonStyle.image} resizeMode="contain" source={Images.back} />
      </View>
    );
  }, [styles.imageContainer]);
  const renderRight = useMemo(() => {
    return <Text>right</Text>;
  }, []);
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
