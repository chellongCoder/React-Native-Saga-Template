import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { drawerIcons } from '../../helpers';
import { ROUTES, screens } from '../../config';
import { COLORS } from '../../constants';
import { Text } from '../text';
import { authActionsCreator } from '../../redux/actions';
import styles from './drawer.styles';

function Drawer({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();

  const i18 = (key) => {
    return t(key);
  };

  const navigateToLogin = () => {
    navigation.navigate(screens.login);
  };

  const navigateToRegister = () => {
    navigation.navigate(screens.register);
  };

  const navigateToTableInout = () => {
    navigation.navigate(ROUTES.tableInout);
  };

  const onLogout = useCallback(() => {
    dispatch(authActionsCreator.logoutRequest());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.userInfo}>
          <Text color={COLORS.WHITE}>Lê Thu Trà - Offshore</Text>
        </View>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          style={styles.itemContainer}
          onPress={navigateToLogin}>
          {drawerIcons.profile}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            {'Hồ sơ'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          style={styles.itemContainer}
          onPress={navigateToTableInout}>
          {drawerIcons.calendar}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Bảng chấm công
          </Text>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} style={styles.itemContainer}>
          {drawerIcons.face}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Thiết lập nhận diện khuôn mặt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          style={styles.itemContainer}
          onPress={navigateToRegister}>
          {drawerIcons.dolar}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Phí đi lại
          </Text>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} style={styles.itemContainer}>
          {drawerIcons.dolar}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Tiền xăng xe
          </Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <View style={styles.userInfo}>
          <Text color={COLORS.WHITE}>Quản lý đơn xin</Text>
        </View>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} style={styles.itemContainer}>
          {drawerIcons.history}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Lịch sử
          </Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} style={styles.itemContainer}>
          {drawerIcons.setting}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Thiết lập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          onPress={onLogout}
          style={styles.itemContainer}>
          {drawerIcons.logout}
          <Text color={COLORS.WHITE} style={styles.itemText}>
            Thoát
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Drawer };
