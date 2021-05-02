import React, { useCallback, useRef } from 'react';
import { Image, TextInput, View, ViewStyle } from 'react-native';
import { CommonStyle } from '../../constants';
import { theme } from '../../theme';
import { TextField } from '../text-field';
import { useStyleSearch } from './styles';

export const SearchBar = ({ style }: { style?: ViewStyle }) => {
  const { colors } = theme;
  const styles = useStyleSearch();
  const refInput = useRef<TextInput>(null);

  const onChangeTextSearch = useCallback(() => {}, []);

  const renderLeftAccessory = useCallback(() => {
    return (
      <View style={styles.icon}>
        <Image style={CommonStyle.image} source={{ uri: 'home_06' }} />
      </View>
    );
  }, [styles.icon]);
  return (
    <View style={[styles.container, style]}>
      <TextField
        style={styles.input}
        placeholder={'Nhập nội dung tìm kiếm'}
        placeholderTextColor={colors.gray}
        onChangeText={onChangeTextSearch}
        ref={refInput}
        {...{ renderLeftAccessory }}
      />
    </View>
  );
};
