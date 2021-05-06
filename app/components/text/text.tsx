import React, { useCallback } from 'react';
import { Linking, StyleSheet, Text as RCText } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import ParsedText from 'react-native-parsed-text';
import { COLORS } from '../../constants';
import { FontFamily, Platform } from '../../theme';
import { ParsedTextProps } from './types';

const Text = ({
  style,
  isViewHtml,
  children,
  isLongText,
  numberOfLines,
  fontType = 'fontRegular',
  color,
  ...other
}: ParsedTextProps) => {
  const onShouldStartLoadWithRequest = useCallback((req) => {
    // open the link in native browser
    if (req.url.includes('http') || req.url.includes('tel')) {
      Linking.openURL(req.url);
      return false;
    }
    // returning false prevents WebView to navigate to new URL
    return true;
  }, []);

  if (style instanceof Array) {
    style.unshift(Platform.textBase);
  } else {
    style = StyleSheet.flatten([Platform.textBase, { color }, style, { fontFamily: FontFamily[fontType] }]);
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
          {...{ onShouldStartLoadWithRequest }}
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
