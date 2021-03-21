import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useProductStyle = () => {
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
