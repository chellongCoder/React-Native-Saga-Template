import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../theme';

const { colors } = theme;

const tabIcons = {
  home: <MaterialIcons name={'home'} size={25} color={'#FFF'} />,
  history: <MaterialIcons name="history" color={colors.white} size={25} />,
  qrcode: <FontAwesome name="qrcode" color={colors.white} size={25} />,
  news: <FontAwesome name="newspaper-o" color={colors.white} size={25} />,
  profile: <FontAwesome name="user" color={colors.white} size={25} />,
};

export { tabIcons };
