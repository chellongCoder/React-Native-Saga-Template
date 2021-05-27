import React from 'react';
import { Image } from 'react-native';
import { Images } from '../constants';
import { Platform, theme } from '../theme';
const { colors } = theme;

const drawerIcons = {
  login: (
    <Image
      source={Images.user}
      resizeMode={'contain'}
      style={{ width: Platform.SizeScale(30), height: Platform.SizeScale(30) }}
    />
  ),
  register: (
    <Image
      source={Images.add_user}
      resizeMode={'contain'}
      style={{ width: Platform.SizeScale(30), height: Platform.SizeScale(30) }}
    />
  ),
  logout: (
    <Image
      source={Images.logout}
      resizeMode={'contain'}
      style={{ width: Platform.SizeScale(30), height: Platform.SizeScale(30) }}
    />
  ),
};

export { drawerIcons };
