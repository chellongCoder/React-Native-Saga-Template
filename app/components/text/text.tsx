import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import { Platform } from '../../theme';

const Text = (props: any) => {
  var { style } = props;
  if (style instanceof Array) {
    style.unshift(Platform.textBase);
  } else {
    style = StyleSheet.flatten([Platform.textBase, style]);
  }

  console.log('====================================');
  console.log(style);
  console.log('====================================');
  return (
    <RCText {...props} style={style}>
      {props.children}
    </RCText>
  );
};

export { Text };
