import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import { Platform } from '../../theme';

const Text = (props) => {
  var { style } = props;
  if (style instanceof Array) {
    style = _.map(style, (styleObject) => styleObject && StyleSheet.flatten([Platform.textBase, styleObject]));
  } else {
    style = StyleSheet.flatten([Platform.textBase, style]);
  }

  return (
    <RCText {...props} style={style}>
      {props.children}
    </RCText>
  );
};

export { Text };
