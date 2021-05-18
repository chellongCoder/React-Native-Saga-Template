import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { Fragment, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '..';
import { COLORS, Icons } from '../../constants';
import { theme } from '../../theme';
import styles from './bottom-tab.styles';
import { IconTabbar } from './icon-tabbar';

const IconsTab = [Icons.ICON_NEWS, Icons.ICON_MARKET, Icons.ICON_HOME, Icons.ICON_BASKET, Icons.ICON_SUPPORT];
const IconsTabFocus = [
  Icons.ICON_NEW_FOCUS,
  Icons.ICON_MARKET,
  Icons.ICON_HOME,
  Icons.ICON_BASKET,
  Icons.ICON_SUPPORT_FOCUS,
];
const NameTab = ['News', 'Market', '', 'Baskets', 'Support'];
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
              <TouchableOpacity
                {...{ onPress }}
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                style={styles.qrcodeButton}>
                <IconTabbar styleImageContainer={styles.buttonQrcode} name={IconsTab[2]} />
              </TouchableOpacity>
            </View>
          </Fragment>
        );
      }

      return (
        <TouchableOpacity
          key={index}
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          accessibilityState={isFocused ? { selected: true } : {}}
          {...{ onPress }}
          style={styles.tab}>
          {isFocused && <View style={styles.borderTab} />}
          {!isFocused ? <IconTabbar name={IconsTab[index]} /> : <IconTabbar name={IconsTabFocus[index]} />}
          <Text style={[styles.tabText, { color: isFocused ? COLORS.GREEN2 : styles.tabText.color }]}>
            {i18(`${NameTab[index]}`)}
          </Text>
        </TouchableOpacity>
      );
    });
  }, [i18, navigation, state.index, state.routes]);

  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={theme.gradientGreen} style={styles.container}>
      <View style={styles.contentTab}>{routes}</View>
    </LinearGradient>
  );
};

export { BottomTab };
