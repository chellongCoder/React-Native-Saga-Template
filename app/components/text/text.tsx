import React, { useCallback } from 'react';
import { StyleSheet, Text as RCText, Image, View } from 'react-native';
import HtmlView from 'react-native-htmlview';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { Platform } from '../../theme';
import { CommonStyle } from '../../constants';
import { ParsedTextProps } from './types';

const Text = ({ style, isViewHtml, children, isLongText, numberOfLines, ...other }: ParsedTextProps) => {
  const renderNode = useCallback((node, index, siblings, parent, defaultRenderer) => {
    if (node.name === 'img') {
      const data = node.attribs;
      return (
        <View
          style={{
            height: Platform.SizeScale(220),
            width: Platform.deviceWidth,
            paddingRight: Platform.SizeScale(20),
          }}>
          <Image key={index} source={{ uri: data.src }} resizeMode="contain" style={CommonStyle.image} />
        </View>
      );
    }
  }, []);

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
        {/* <HtmlView
          value={`<div>${children}</div>`}
          stylesheet={{
            div: style,
          }}
          {...{ renderNode }}
          nodeComponentProps={{
            numberOfLines,
            selectable: true,
            allowFontScaling: false,
          }}
        /> */}
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
