import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import Image from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import { AppIcon } from '../../Common/AppIcon';
import { Text } from '../../components';
import Row from '../../util/Row';
import { theme } from '../../theme';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { screens } from '../../config';
import { RootState } from '../../redux/reducers';
import { alertMessage } from '../../util';
import styles from './account.styles';
const { colors } = theme;
type menu = {
  id: string;
  name: string;
  screen: string;
};

const Account = () => {
  const navigation = useNavigation();

  const { userInfo, tempData } = useSelector((state: RootState) => state.AuthData);

  const goToDetail = (item: menu) => () => {
    switch (item.id) {
      case 'SettingMessage':
        handleSettingMessage();
        break;
      case 'BuyHistory':
        handleBuyHistory();
        break;
      case 'HistoryScanCode':
        navigation.navigate(screens.appStack, { screen: item.screen, params: {} });
        break;
      case 'Rules':
        navigation.navigate(screens.rules, { title: 'Điều khoản', type: 'terms' });
        break;
      case 'Tutorial':
        navigation.navigate(screens.rules, { title: 'Hướng dẫn', type: 'support_policy' });
        break;
      case 'Contact':
        navigation.navigate(screens.rules, { title: 'Liên hệ', type: 'privacy_policy' });
        break;
      case 'RequestCode':
        handleRequestCode();
        break;
      case 'ManagerRequestCode':
        handleManagerRequestCode();
        break;
      default:
        break;
    }
  };

  const handleSettingMessage = () => {
    if (checkLogin()) {
      alertMessage('da login');
    }
  };

  const handleBuyHistory = () => {
    if (checkLogin()) {
      alertMessage('da login');
    }
  };

  const handleRequestCode = () => {
    if (checkLogin()) {
      navigation.navigate(screens.createQR, { title: 'Request tạo mã' });
    }
  };

  const handleManagerRequestCode = () => {
    if (checkLogin()) {
      alertMessage('da login');
    }
  };

  const checkLogin = () => {
    if (_.isEmpty(tempData)) {
      alertMessage('Thông báo', goToLogin, 'Bạn vui lòng đăng nhập để sử dụng tính năng này!');
      return false;
    }
    return true;
  };

  const goToLogin = () => {
    navigation.navigate(screens.login);
  };

  const goToChangeInfo = () => {
    navigation.navigate(screens.changeInfo);
  };

  const renderItem = ({ item }: { item: menu }) => {
    return (
      <RippleButtonAnim onPress={goToDetail(item)}>
        <Row style={styles.styWrapElement}>
          <Image source={AppIcon.IconSetting} style={styles.styIconSetting} />
          <Text style={styles.styTxtName} fontType={'fontBold'}>
            {item.name}
          </Text>
          <Image source={AppIcon.IconArrowRight} style={styles.styIconRow} tintColor={colors.gray} />
        </Row>
      </RippleButtonAnim>
    );
  };

  return (
    <View style={styles.contain}>
      <Image source={AppIcon.HeaderAccount} style={styles.wrapHeader} />
      <View style={styles.styWrapContent}>
        {_.isEmpty(tempData) ? (
          <Text style={styles.styTxtHeader} fontType={'fontBold'}>
            Tài khoản
          </Text>
        ) : (
          <RippleButtonAnim onPress={goToChangeInfo}>
            <Row style={{ paddingLeft: 20 }}>
              <Image
                resizeMode="contain"
                style={styles.styAvatar}
                source={{ uri: userInfo?.avatar || 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' }}
              />
              <Text style={styles.styTxtHeaderName} fontType={'fontBold'}>
                {userInfo?.name}
              </Text>
            </Row>
          </RippleButtonAnim>
        )}
        <FlatList
          data={MENU}
          keyExtractor={(i, index) => index.toString()}
          renderItem={renderItem}
          style={styles.styFlatlist}
        />
      </View>
    </View>
  );
};

export default Account;

const MENU = [
  {
    id: 'SettingMessage',
    name: 'Cài đặt nhận tin nhắn',
    screen: screens.historyScanCode,
  },
  {
    id: 'BuyHistory',
    name: 'Lịch sử mua hàng',
    screen: screens.historyScanCode,
  },
  {
    id: 'HistoryScanCode',
    name: 'Lịch sử quét mã',
    screen: screens.historyScanCode,
  },
  {
    id: 'Rules',
    name: 'Điều khoản',
    screen: screens.historyScanCode,
  },
  {
    id: 'Tutorial',
    name: 'Hướng dẫn',
    screen: screens.tutorialScreen,
  },
  {
    id: 'Contact',
    name: 'Liên hệ',
    screen: screens.historyScanCode,
  },
  {
    id: 'RequestCode',
    name: 'Request tạo mã (đại lý)',
    screen: screens.historyScanCode,
  },
  {
    id: 'ManagerRequestCode',
    name: 'Quản lý tạo mã (báo cáo QR)',
    screen: screens.historyScanCode,
  },
];
