import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { CommonStyle } from '../../constants';
import { useBreadCrumbStyle } from './styles';

const _BreadCrumb = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => {
  const styles = useBreadCrumbStyle();
  return (
    <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.container]}>
      <View style={[styles.left]}>{left}</View>
      <View style={[styles.right]}>{right}</View>
    </View>
  );
};

export const BreadCrumb = memo(_BreadCrumb);
