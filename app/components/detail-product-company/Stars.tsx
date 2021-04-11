import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import FadeAnim from '../../anim/FadeAnim';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { Platform } from '../../theme';

const _Stars = ({ value }: { value: any }) => {
  const [stars, setStars] = useState(0);

  const setNewStars = useCallback((index: number, total: number) => {
    setStars(total + index + 1);
  }, []);

  useEffect(() => {
    setStars(value.star);
  }, [value.star]);
  return (
    <>
      {Array.from(Array(stars).keys()).map((v, i) => {
        return (
          <FadeAnim duration={500}>
            <RippleButtonAnim onPress={() => setNewStars(i, 0)}>
              <Image style={styles.icon} source={{ uri: 'product_detail_2_03' }} />
            </RippleButtonAnim>
          </FadeAnim>
        );
      })}
      {Array.from(Array(5 - stars).keys()).map((v, i) => {
        return (
          <FadeAnim duration={500}>
            <RippleButtonAnim onPress={() => setNewStars(i, stars)}>
              <Image style={styles.icon} source={{ uri: 'product_detail_2_03-5' }} />
            </RippleButtonAnim>
          </FadeAnim>
        );
      })}
    </>
  );
};

export const Stars = memo(_Stars);

const styles = StyleSheet.create({
  icon: {
    width: Platform.SizeScale(40),
    height: Platform.SizeScale(40),
    borderRadius: Platform.SizeScale(2),
  },
});
