import React, { forwardRef, Ref, useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useLayout } from '@react-native-community/hooks';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from '../text';
import { Touchable } from '../touchable';
import { Platform, theme } from '../../theme';
import { useStylesTextField } from './styles';
import { TextFiledProps } from './types';

export const TextField = forwardRef(
  (
    {
      style,
      renderLeftAccessory,
      renderRightAccessory,
      inputStyle,
      label,
      labelStyle,
      labelContentStyle,
      prefix,
      suffix,
      prefixStyle,
      secureTextEntry,
      ...other
    }: TextFiledProps,
    ref: Ref<TextInput>,
  ) => {
    const styles = useStylesTextField();
    const [showSecureTextEntry, setSecureTextEntry] = useState(false);
    const { onLayout, height } = useLayout();

    const { colors } = theme;

    const iosEye = useMemo(() => {
      return !showSecureTextEntry ? 'eye' : 'eye-with-line';
    }, [showSecureTextEntry]);

    const androidEye = useMemo(() => {
      return !showSecureTextEntry ? 'eye' : 'eye-with-line';
    }, [showSecureTextEntry]);

    const contentRight = useMemo(() => {
      if (!secureTextEntry) {
        return renderRightAccessory?.();
      }
      if (!renderRightAccessory) {
        function showPassword() {
          setSecureTextEntry((prev) => !prev);
        }
        return (
          <Touchable onPress={showPassword}>
            <Icon size={Platform.SizeScale(30)} name={Platform.OS === 'android' ? androidEye : iosEye} />
          </Touchable>
        );
      }
      return renderRightAccessory?.();
    }, [androidEye, iosEye, renderRightAccessory, secureTextEntry]);

    return (
      <View style={[styles.content, style]}>
        {!!label && (
          <View {...{ onLayout }} style={[styles.vLabel, { top: -height / 2 }, labelContentStyle]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          </View>
        )}
        <View style={styles.leftInput}>{renderLeftAccessory?.()}</View>
        {!!prefix && <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>}
        <TextInput
          allowFontScaling={false}
          style={[styles.input, inputStyle]}
          underlineColorAndroid="transparent"
          secureTextEntry={!showSecureTextEntry && secureTextEntry}
          placeholderTextColor={colors.gray}
          {...{ ref, ...other }}
        />
        {!!suffix && <Text style={[styles.prefix]}>{suffix}</Text>}
        {contentRight}
      </View>
    );
  },
);
