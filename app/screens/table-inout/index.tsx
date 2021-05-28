import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonHeader } from '../../components';
import { useTableInoutStyle } from './styles';
import { Info } from './Info';

const _TableInoutScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useTableInoutStyle();

  return (
    <View style={styles.container}>
      <CommonHeader title={'Bảng chấm công'} isRight={false} />
      <Info />
    </View>
  );
};

export const TableInoutScreen = memo(_TableInoutScreen);
