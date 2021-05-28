import React from 'react';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { COLORS, Images } from '../constants';
import { Platform, theme } from '../theme';

const { colors } = theme;

const drawerIcons = {
  profile: <AntDesign color={COLORS.WHITE} name="user" size={Platform.SizeScale(20)} />,
  calendar: <AntDesign color={COLORS.WHITE} name="calendar" size={Platform.SizeScale(20)} />,
  dolar: <Feather color={COLORS.WHITE} name="dollar-sign" size={Platform.SizeScale(20)} />,
  face: <AntDesign color={COLORS.WHITE} name="smileo" size={Platform.SizeScale(20)} />,
  history: <Fontisto color={COLORS.WHITE} name="history" size={Platform.SizeScale(20)} />,
  setting: <AntDesign color={COLORS.WHITE} name="setting" size={Platform.SizeScale(20)} />,
  logout: <AntDesign color={COLORS.WHITE} name="logout" size={Platform.SizeScale(20)} />,
};

export { drawerIcons };
