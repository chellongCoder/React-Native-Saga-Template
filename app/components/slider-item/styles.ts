import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const useStylesItemTopic = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: COLORS.WHITE,
          borderRadius: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
          alignItems: 'stretch',
        },
        detailsContainer: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        },
        avatar: {
          height: 170,
          alignItems: 'flex-end',
          borderRadius: 10,
        },
      }),
    [],
  );
};
