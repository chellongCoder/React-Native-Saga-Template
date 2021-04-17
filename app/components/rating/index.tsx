import React, { memo, useCallback, useState } from 'react';
import { Image, View } from 'react-native';
import { Touchable } from '../touchable';
import { useStylesRate } from './styles';
import { RateProps } from './types';

function RateBase({ numStar = 5, percent = 0, style, onPress, activeColor, inActiveColor }: RateProps) {
  const styles = useStylesRate();
  const [star, setStar] = useState(percent);

  return (
    <View style={styles.container}>
      {Array.from(Array(numStar)).map((_, index) => (
        <Star
          {...{
            percent: star,
            index,
            inActiveColor,
            activeColor,
            style,
            onPress,
            setStar,
          }}
          key={index + '_start'}
        />
      ))}
    </View>
  );
}

const Star = ({ percent, onPress, index, inActiveColor, activeColor, style, setStar }: any) => {
  const styles = useStylesRate();

  const onChangeStar = useCallback(() => {
    if (onPress) {
      onPress(index + 1);
      setStar(index + 1);
    }
  }, [index, onPress, setStar]);
  return (
    <Touchable onPress={onChangeStar}>
      <Image style={styles.star} source={{ uri: index >= percent ? 'product_detail_22' : 'product_detail_20' }} />
    </Touchable>
  );
};

export const Rate = memo(RateBase);
