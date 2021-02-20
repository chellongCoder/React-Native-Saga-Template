import React from 'react';
import { View } from 'react-native';

export default function Row(props: any) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center' }, props.style]}>{props.children}</View>;
}
