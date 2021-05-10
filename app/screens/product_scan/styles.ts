import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform } from '../../theme';
import fontFamily from '../../theme/font-family';

export const useProductDetailStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        content: {
          paddingHorizontal: Platform.SizeScale(20),
        },
        button: {
          paddingVertical: Platform.SizeScale(10),
          marginTop: Platform.SizeScale(10),
          borderRadius: Platform.SizeScale(10),
          width: Platform.SizeScale(150),
          alignSelf: 'center',
        },
        modal: {
          marginHorizontal: Platform.SizeScale(10),
          paddingVertical: Platform.SizeScale(10),
        },
        inpuCodeStyle: {
          borderWidth: 0,
          marginVertical: Platform.SizeScale(10),
          borderBottomWidth: Platform.SizeScale(0.5),
          borderRadius: 0,
          borderBottomColor: COLORS.CUSTOM_GRAY,
        },
        inputStyles: {
          fontSize: Platform.SizeScale(20),
        },
        outButton: {
          alignItems: 'center',
          marginTop: Platform.SizeScale(10),
        },
        buttonVerify: {
          backgroundColor: COLORS.GREEEN,
        },
        txtButtonVerify: {
          fontFamily: fontFamily.fontBold,
        },
      }),
    [],
  );
};
