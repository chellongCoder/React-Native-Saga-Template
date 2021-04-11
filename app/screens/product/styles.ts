import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from '../../theme';

export const useProductStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        styWrapEmpty: {
          height: Platform.baseScreenHeight,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [],
  );
};
