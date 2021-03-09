import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { Fragment, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '..';
import { ICONS } from '../../constants';
import { tabIcons } from '../../helpers';
import { theme } from '../../theme';
import styles from './bottom-tab.styles';
import { IconTabbar } from './icon-tabbar';

const IconsTab = [ICONS.HOME_UNFOCUS, ICONS.NEW_UNFOCUS, ICONS.QRCODE, ICONS.ALERT_UNFOCUS, ICONS.ACOUNT_UNFOCUS];
const IconsTabFocus = [ICONS.HOME_FOCUS, ICONS.NEW_FOCUS, ICONS.QRCODE, ICONS.ALERT_FOCUS, ICONS.ACOUNT_FOCUS];

const BottomTab = ({ state, descriptors, navigation }: BottomTabBarProps<BottomTabBarOptions>) => {
  const [t, i18n] = useTranslation();
  const { colors } = theme;
  const i18 = useCallback(
    (key) => {
      return t(key);
    },
    [t],
  );

  const routes = useMemo(() => {
    return state.routes.map((route, index: number) => {
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      if (index === 2) {
        return (
          <Fragment key={index.toString()}>
            <View style={styles.qrCodeContainer}>
              <TouchableOpacity {...{ onPress }} style={styles.qrcodeButton}>
                <IconTabbar styleImageContainer={styles.buttonQrcode} name={IconsTab[2]} />
              </TouchableOpacity>
            </View>
          </Fragment>
        );
      }

      return (
        <TouchableOpacity
          key={index}
          accessibilityState={isFocused ? { selected: true } : {}}
          {...{ onPress }}
          style={styles.tab}>
          {isFocused && <View style={styles.borderTab} />}
          {!isFocused ? <IconTabbar name={IconsTab[index]} /> : <IconTabbar name={IconsTabFocus[index]} />}
          <Text style={[styles.tabText, { color: isFocused ? colors.green : styles.tabText.color }]}>
            {i18(`BottomTab.${route.name}`)}
          </Text>
        </TouchableOpacity>
      );
    });
  }, [colors.green, i18, navigation, state.index, state.routes]);

  return <View style={styles.container}>{routes}</View>;
};

export { BottomTab };
