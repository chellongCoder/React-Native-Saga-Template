import React, { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useListStyle = () => {
  const insets = useSafeAreaInsets();
  return useMemo(() => StyleSheet.create({}), []);
};
