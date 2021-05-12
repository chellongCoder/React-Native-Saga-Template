import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, SafeAreaView, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButtonAnim from '../anim/RippleButtonAnim';
import { Text } from '../components';
import { screens } from '../config';
import { tabModel } from '../constants/TabModel';
import { theme } from '../theme';
import Row from './Row';
import styles from './StyleHeaderMain';
const { colors } = theme;
interface Props {
  value?: string | undefined;
  screen?: number | string;
  bgColor?: string;
  disableInput?: boolean;
  onPressLeft?: () => void;
  onChangeText: (value: string) => void;
  onEndEditing?: () => void;
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
  const navigation = useNavigation();
  const navigateSearchPropduct = () => {
    navigation.navigate(screens.appStack, { screen: screens.search });
  };
  switch (screen) {
    case tabModel.home:
      return (
        <TouchableOpacity onPress={navigateSearchPropduct} activeOpacity={1} style={styles.stySearch}>
          <IconAntDesign name={'search1'} size={18} color={colors.gray} style={{ alignSelf: 'center' }} />
          {/* <TextInput
            editable={!props.disableInput}
            value={props.value}
            placeholder="Nhập nội dung tìm kiếm"
            placeholderTextColor={colors.gray}
            style={styles.styInput}
            onChangeText={(text) => props.onChangeText(text)}
            onEndEditing={props.onEndEditing}
          /> */}
          <Text style={styles.styInput}>Nhập nội dung tìm kiếm</Text>
        </TouchableOpacity>
      );
    default:
      return (
        <View style={styles.stySearch}>
          <IconAntDesign name={'search1'} size={18} color={colors.gray} style={{ alignSelf: 'center' }} />
          <TextInput
            editable={!props.disableInput}
            value={props.value}
            placeholder="Nhập nội dung tìm kiếm"
            placeholderTextColor={colors.gray}
            style={styles.styInput}
            onChangeText={(text) => props.onChangeText(text)}
            onEndEditing={props.onEndEditing}
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
