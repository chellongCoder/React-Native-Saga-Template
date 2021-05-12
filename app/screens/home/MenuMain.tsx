import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import Row from '../../util/Row';
import { AppIcon } from '../../constants/AppIcon';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import navigationService from '../../navigation/navigation-service';
import { screens } from '../../config';
import styles from './home.styles';

export default class HomeScreen extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  onPress = () => {
    navigationService.navigate(screens.product, {});
  };
  render() {
    return (
      <View style={styles.styWrapMenuMain}>
        <Row style={styles.styWrapItem}>
          <ItemMain onPress={this.onPress} img={AppIcon.IconHomeGift} title={'Quà của tôi'} />
          <ItemMain img={AppIcon.IconHomeEvent} title={'Sự kiện'} />
          <ItemMain img={AppIcon.IconHomeProd} title={'Gian hàng'} />
        </Row>
        <Row style={styles.styWrapItem}>
          <ItemMain img={AppIcon.IconHomeCode} title={'Mã của tôi'} />
          <ItemMain img={AppIcon.IconHomeMore} title={'Xem thêm'} />
          <ItemMain img={null} title={null} />
        </Row>
      </View>
    );
  }
}

function ItemMain(props: any) {
  const { img, title, onPress } = props;
  return (
    <RippleButtonAnim containerStyle={{ alignItems: 'center' }} onPress={onPress}>
      <FastImage source={img} style={styles.styImg} resizeMode={'contain'} />
      <Text style={styles.styTxtTitle}>{title}</Text>
    </RippleButtonAnim>
  );
}
