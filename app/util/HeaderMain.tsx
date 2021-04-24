import React from 'react';
import { View, SafeAreaView, TextInput, StatusBar } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButtonAnim from '../anim/RippleButtonAnim';
import { tabModel } from '../model/TabModel';
import { theme } from '../theme';
import Row from './Row';
import styles from './StyleHeaderMain';
const { colors } = theme;

interface Props {
  value?: string | undefined;
  screen?: number | string;
  bgColor?: string;
  onPressLeft?: () => void;
  onChangeText: (value: string) => void;
}

const HeaderMain = (props: Props) => {
  return (
    <View style={[styles.contain, { backgroundColor: props.bgColor || colors.white }]}>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <Row style={styles.styWrapHeader}>
        <LeftComponent {...props} />
        <SearchComponent {...props} />
        <RightComponent {...props} />
      </Row>
    </View>
  );
};

function SearchComponent(props: Props) {
  const { screen } = props;
  switch (screen) {
    case tabModel.home:
      return (
        <View style={styles.stySearch}>
          <IconAntDesign name={'search1'} size={18} color={colors.gray} style={{ alignSelf: 'center' }} />
          <TextInput
            value={props.value}
            placeholder="Nhập nội dung tìm kiếm"
            placeholderTextColor={colors.gray}
            style={styles.styInput}
            onChangeText={(text) => props.onChangeText(text)}
          />
        </View>
      );
    default:
      return (
        <View style={styles.stySearch}>
          <IconAntDesign name={'search1'} size={18} color={colors.gray} style={{ alignSelf: 'center' }} />
          <TextInput
            value={props.value}
            placeholder="Nhập nội dung tìm kiếm"
            placeholderTextColor={colors.gray}
            style={styles.styInput}
            onChangeText={(text) => props.onChangeText(text)}
          />
        </View>
      );
  }
}

function RightComponent(props: Props) {
  const { screen } = props;
  switch (screen) {
    case tabModel.home:
      return (
        <React.Fragment>
          <RippleButtonAnim>
            <IconAntDesign name={'shoppingcart'} size={30} color={colors.white} />
          </RippleButtonAnim>
          <View style={{ width: 10 }} />
        </React.Fragment>
      );

    default:
      return null;
  }
}

function LeftComponent(props: Props) {
  const { screen } = props;
  switch (screen) {
    case tabModel.home:
      return (
        <React.Fragment>
          <RippleButtonAnim onPress={props.onPressLeft}>
            <IconAntDesign name={'menuunfold'} size={30} color={colors.white} />
          </RippleButtonAnim>
          <View style={{ width: 10 }} />
        </React.Fragment>
      );

    default:
      return null;
  }
}

export default React.memo(HeaderMain);
