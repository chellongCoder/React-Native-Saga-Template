import React, { useCallback, useRef } from 'react';
import { TextInput, View } from 'react-native';
import { theme } from '../../theme';
import { TextField } from '../text-field';
import { useStyleSearch } from './styles';

export const SearchBar = () => {
  const { colors } = theme;
  const styles = useStyleSearch();
  const refInput = useRef<TextInput>(null);

  const onChangeTextSearch = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <TextField
        style={styles.input}
        placeholder={'Nhập nội dung tìm kiếm'}
        placeholderTextColor={colors.black}
        onChangeText={onChangeTextSearch}
        ref={refInput}
      />
    </View>
  );
};
