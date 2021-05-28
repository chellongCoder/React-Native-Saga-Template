import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import IonicIcon from 'react-native-vector-icons/AntDesign';
import { CommonHeader } from '../../components';
import { BACKGROUND_TYPE } from '../../components/background/types';
import { ROUTES } from '../../config';
import { COLORS } from '../../constants';
import { useBackground } from '../../hooks';
import { Platform } from '../../theme';
import { ButtonGroup } from './button-group';
import { Capture } from './capture';
import { useHomeStyle } from './styles';
import TabWork from './tab-work';

const _HomeScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useHomeStyle();
  const background = useBackground();

  useEffect(() => {
    navigation.addListener('focus', () => {
      background.changeBackground(BACKGROUND_TYPE.GREEN_GRADIENT);
    });
    return () => {
      navigation.removeListener('focus', () => {});
    };
  }, [background, navigation]);

  const gotoCoin = useCallback(() => {
    navigation.navigate(ROUTES.coinProfile1);
  }, [navigation]);

  const gotoIco = useCallback(() => {
    navigation.navigate(ROUTES.icoProfile);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <CommonHeader
        icon={<IonicIcon color={COLORS.WHITE} name="menuunfold" size={Platform.SizeScale(20)} />}
        buttonBackColor={COLORS.BUTON_GREEN}
        title={'Chấm công'}
        isRight={false}
      />
      <ScrollView>
        <TabWork />

        <ButtonGroup />

        <Capture />
      </ScrollView>
    </View>
  );
};

export const HomeScreen = memo(_HomeScreen);
