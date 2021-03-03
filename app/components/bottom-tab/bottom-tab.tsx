import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { Fragment, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '..';
import { tabIcons } from '../../helpers';
import styles from './bottom-tab.styles';

const IconsTab = [tabIcons.home, tabIcons.history, tabIcons.qrcode, tabIcons.news, tabIcons.profile];

const BottomTab = ({ state, descriptors, navigation }: BottomTabBarProps<BottomTabBarOptions>) => {
  const [t, i18n] = useTranslation();

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
                {IconsTab[2]}
              </TouchableOpacity>
              <Text style={styles.tabText}>{i18(`BottomTab.${route.name}`)}</Text>
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
          {IconsTab[index]}
          <Text style={styles.tabText}>{i18(`BottomTab.${route.name}`)}</Text>
        </TouchableOpacity>
      );
    });
  }, [i18, navigation, state.index, state.routes]);

  return <View style={styles.container}>{routes}</View>;
};

export { BottomTab };
