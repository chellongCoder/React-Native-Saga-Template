import React from 'react';
import { View, SafeAreaView, TextInput, StatusBar } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButtonAnim from '../anim/RippleButtonAnim';
import { tabModel } from '../model/TabModel';
import { theme } from '../theme';
import Row from './Row';
import styles from './StyleHeaderMain';
const { colors } = theme;
const HeaderMain = (props: any) => {
  return (
    <View style={[styles.contain, { backgroundColor: props.bgColor || colors.white }]}>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} />
      <Row style={styles.styWrapHeader}>
        <SearchComponent {...props} />
        <RightComponent {...props} />
      </Row>
    </View>
  );
};

function SearchComponent(props: any) {
  const { screen } = props;
  switch (screen) {
    case tabModel.home:
      return (
        <View style={styles.stySearch}>
          <IconAntDesign name={'search1'} size={18} color={colors.gray} style={{ alignSelf: 'center' }} />
          <TextInput placeholder="Nhập nội dung tìm kiếm" placeholderTextColor={colors.gray} style={styles.styInput} />
        </View>
      );
    default:
      return (
        <View style={styles.stySearch}>
          <IconAntDesign name={'search1'} size={18} color={colors.gray} style={{ alignSelf: 'center' }} />
          <TextInput placeholder="Nhập nội dung tìm kiếm" placeholderTextColor={colors.gray} style={styles.styInput} />
        </View>
      );
  }
}

function RightComponent(props: any) {
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

export default React.memo(HeaderMain);
