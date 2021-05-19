import React, { memo, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, CommonStyle } from '../../constants';
import { Platform } from '../../theme';
import { Text } from '../text';
import { mockData } from './__mocks__/data';

const _Info = () => {
  const data = mockData.infos;
  const styles = useCoinProfileInfoStyle();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((value, index) => {
          return (
            <View>
              {value.map((v, i) => {
                return (
                  <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.content]}>
                    <Text style={styles.txtKey}>{v.key.toLocaleUpperCase()}</Text>
                    <Text>{v.value}</Text>
                  </View>
                );
              })}
              <View style={styles.hr} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export const Info = memo(_Info);

const useCoinProfileInfoStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: COLORS.WHITE,
          padding: Platform.SizeScale(20),
          borderRadius: Platform.SizeScale(20),
          height: Platform.SizeScale(202),
          marginBottom: insets.bottom,
        },
        content: {
          paddingTop: Platform.SizeScale(10),
        },
        hr: {
          width: '100%',
          height: StyleSheet.hairlineWidth,
          backgroundColor: COLORS.GRAY,
          marginTop: Platform.SizeScale(10),
        },
        txtKey: {},
      }),
    [insets.bottom],
  );
};
