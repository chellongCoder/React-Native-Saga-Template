import React, { useCallback } from 'react';
import { StyleSheet, Text as RCText } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import ParsedText from 'react-native-parsed-text';
import { FontFamily, Platform } from '../../theme';
import { ParsedTextProps } from './types';

const Text = ({
  style,
  isViewHtml,
  children,
  isLongText,
  numberOfLines,
  fontType = 'fontRegular',
  ...other
}: ParsedTextProps) => {
  if (style instanceof Array) {
    style.unshift(Platform.textBase);
  } else {
    style = StyleSheet.flatten([Platform.textBase, style, { fontFamily: FontFamily[fontType] }]);
  }

  if (isLongText) {
    return (
      <ParsedText allowFontScaling={false} numberOfLines={numberOfLines} style={style} {...other}>
        {children}
      </ParsedText>
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
          source={{ html: `<div>${children ? children : ''}</div>` }}
        />
      </>
    );
  }
  return (
    <ParsedText allowFontScaling={false} selectable={true} numberOfLines={numberOfLines} {...other} style={style}>
      {children}
    </ParsedText>
  );
};

export { Text };
