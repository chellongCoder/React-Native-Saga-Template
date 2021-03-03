import React from 'react';
import { View, SafeAreaView, TextInput, StatusBar } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import RippleButtonAnim from '../anim/RippleButtonAnim';
import { tabModel } from '../model/TabModel';
import Row from './Row';
import styles from './StyleHeaderMain';

const HeaderMain = (props: any) => {
  const openDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return (
    <View style={styles.contain}>
      <SafeAreaView />
      <StatusBar barStyle={'light-content'} />
      <Row style={styles.styWrapHeader}>
        <RippleButtonAnim onPress={openDrawer}>
          <IconAntDesign name={'menu-unfold'} size={30} color={'#FFF'} />
        </RippleButtonAnim>
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
        <View style={{ flex: 1 }}>
          <TextInput placeholder="ProCheck" placeholderTextColor={'#828282'} style={styles.stySearch} />
        </View>
      );
    default:
      return null;
  }
}

function RightComponent(props: any) {
  const { screen } = props;
  switch (screen) {
    case tabModel.home:
      return (
        <React.Fragment>
          <RippleButtonAnim>
            <IconAntDesign name={'shoppingcart'} size={30} color={'#FFF'} />
          </RippleButtonAnim>
          <View style={{ width: 10 }} />
          <RippleButtonAnim>
            <IconAntDesign name={'bells'} size={28} color={'#FFF'} />
          </RippleButtonAnim>
        </React.Fragment>
      );

    default:
      return null;
  }
}

export default HeaderMain;
