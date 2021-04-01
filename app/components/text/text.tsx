import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import HtmlView from 'react-native-htmlview';
import { Platform } from '../../theme';

const Text = (props: any) => {
  var { style, isViewHtml, children } = props;
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
    <RCText {...props} style={style}>
      {props.children}
    </RCText>
  );
};

export { Text };
