import React from 'react';
import { View, FlatList } from 'react-native';
import Image from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { AppIcon } from '../../Common/AppIcon';
import { Text } from '../../components';
import Row from '../../util/Row';
import { theme } from '../../theme';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { screens } from '../../config';
import styles from './account.styles';
const { colors } = theme;
type menu = {
  id: string;
  name: string;
  screen: string;
};

const Account = () => {
  const navigation = useNavigation();

  const goToDetail = (item: menu) => () => {
    navigation.navigate(screens.appStack, { screen: item.screen, params: {} });
  };

  const renderItem = ({ item }: { item: menu }) => {
    return (
      <RippleButtonAnim onPress={goToDetail(item)}>
        <Row style={styles.styWrapElement}>
          <Image source={AppIcon.IconSetting} style={styles.styIconSetting} />
          <Text style={styles.styTxtName}>{item.name}</Text>
          <Image source={AppIcon.IconArrowRight} style={styles.styIconRow} tintColor={colors.gray} />
        </Row>
      </RippleButtonAnim>
    );
  };

  return (
    <View style={styles.contain}>
      <Image source={AppIcon.HeaderAccount} style={styles.wrapHeader} />
      <View style={styles.styWrapContent}>
        <Text style={styles.styTxtHeader}>Tài khoản</Text>
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
