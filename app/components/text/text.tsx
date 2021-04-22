import React, { useCallback } from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
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
        <AutoHeightWebView
          scrollEnabled={false}
          scrollEnabledWithZoomedin={true}
          style={{
            width: Platform.deviceWidth,
            ...Platform.textBase,
          }}
          customStyle={`
                  img {
                    width: 100% !important;
                    height: auto !important;
                  }
                  * {
                    font-family: sans-serif;
                    line-height: 200%;
                    padding: 10px 10px 0px 0px;

                  }
              `}
          source={{ html: children }}
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
