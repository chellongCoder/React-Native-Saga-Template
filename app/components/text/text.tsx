import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import HtmlView from 'react-native-htmlview';
import { Platform } from '../../theme';
import { ParsedTextProps } from './types';

const Text = ({ style, isViewHtml, children, ...other }: ParsedTextProps) => {
  if (style instanceof Array) {
    style.unshift(Platform.textBase);
  } else {
    style = StyleSheet.flatten([Platform.textBase, style]);
  }

  if (isViewHtml) {
    return (
      <>
        <HtmlView
          value={`<div>${children}</div>`}
          stylesheet={{
            div: style,
          }}
          nodeComponentProps={{
            // numberOfLines: isShowMore ? undefined : numberOfLines,
            selectable: true,
            allowFontScaling: false,
          }}
        />
      </>
    );
  }
  return (
    <RCText selectable={true} {...other} style={style}>
      {children}
    </RCText>
  );
};

export { Text };
