import React from 'react';
import { View, Text } from 'react-native';
import { MenuHeader } from '../../components';
// import styles from './history.style';

const History = (props: any) => {
  return (
    <View>
      <MenuHeader {...props} />
      <Text>History</Text>
    </View>
  );
};

export default History;
