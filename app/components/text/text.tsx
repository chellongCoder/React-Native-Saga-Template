import React from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import HtmlView from 'react-native-htmlview';
import { Platform } from '../../theme';
import { ParsedTextProps } from './types';

const Text = ({ style, isViewHtml, children, isLongText, numberOfLines, ...other }: ParsedTextProps) => {
  if (style instanceof Array) {
    style.unshift(Platform.textBase);
  } else {
    style = StyleSheet.flatten([Platform.textBase, style]);
  }

  if (isLongText) {
    return (
      <RCText allowFontScaling={false} numberOfLines={numberOfLines} style={style} {...other}>
        {children}
      </RCText>
    );
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
            numberOfLines,
            selectable: true,
            allowFontScaling: false,
          }}
        />
      </>
    );
  }
  return (
    <RCText allowFontScaling={false} selectable={true} numberOfLines={numberOfLines} {...other} style={style}>
      {children}
    </RCText>
  );
};

export { Text };
