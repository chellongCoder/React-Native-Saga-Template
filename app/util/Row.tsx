import React from 'react';
import { View } from 'react-native';

interface Props {
  style?: object;
  children: any;
}

export default function Row(props: Props) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center' }, props.style]}>{props.children}</View>;
}
