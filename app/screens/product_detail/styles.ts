import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useProductDetailStyle = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
      }),
    [],
  );
};
