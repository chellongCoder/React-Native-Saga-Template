import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { Platform, theme } from '../../theme';

export const useLoginStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        content: {
          marginHorizontal: Platform.SizeScale(20),
        },
        logo: {
          width: Platform.deviceWidth,
          height: Platform.deviceHeight / 3,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inpuRateStyle: {
          paddingRight: Platform.SizeScale(10),
          marginBottom: Platform.SizeScale(20),
        },
        inputStyles: {
          fontSize: Platform.SizeScale(12),
          color: COLORS.BLACK,
        },
        logoInput: {
          width: Platform.SizeScale(30),
          height: Platform.SizeScale(30),
          alignItems: 'center',
          justifyContent: 'center',
        },
        checkboxContainer: {
          marginLeft: Platform.SizeScale(20),
        },
        txtMember: {
          marginLeft: Platform.SizeScale(10),
          color: COLORS.GRAY,
        },
        buttonLogin: {
          backgroundColor: COLORS.GREEEN,
          marginTop: Platform.SizeScale(40),
          paddingVertical: Platform.SizeScale(5),
        },
        buttonFacebook: {
          backgroundColor: COLORS.GREEEN,
          width: '100%',
        },
        textButton: {
          ...Platform.textBase,
          color: COLORS.WHITE,
        },
      }),
    [],
  );
};
