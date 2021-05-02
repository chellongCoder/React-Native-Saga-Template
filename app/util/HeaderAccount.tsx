import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { AppIcon } from '../Common/AppIcon';
import { AppBars, Text } from '../components';
import { COLORS } from '../constants';
import { Platform } from '../theme';

const HeaderAccount = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.contain}>
      <ImageBackground source={AppIcon.HeaderAccount} style={styles.styHeader}>
        <AppBars hasRightIcons={false} backgroundColor={'transparent'} colorIcon={COLORS.WHITE} onPressLeft={goBack} />
        {!_.isEmpty(title) && <Text style={styles.styTitle}>{title}</Text>}
      </ImageBackground>
    </View>
  );
};

export default HeaderAccount;

const styles = StyleSheet.create({
  contain: {
    width: Platform.deviceWidth,
  },
  styHeader: {
    width: Platform.deviceWidth,
    height: Platform.deviceHeight / 5,
  },
  styTitle: {
    position: 'absolute',
    top: 15,
    left: 60,
    color: COLORS.WHITE,
    ...Platform.textBase,
    fontSize: Platform.SizeScale(15),
  },
});
