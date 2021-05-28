import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DropdownSelection } from '../../components';

const _Info = () => {
  return (
    <View>
      <DropdownSelection />
    </View>
  );
};

export const Info = memo(_Info);

const styles = StyleSheet.create({});
