import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Row from '../../util/Row';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { AppIcon } from '../../Common/AppIcon';
import styles from './home.styles';

export default class MenuContent extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    return (
      <View style={styles.styWrapMenuContent}>
        <Row style={{ alignItems: 'flex-start', justifyContent: 'space-around' }}>
          <ItemMain img={AppIcon.Icon5} title={'Nạp tiền điện thoại'} />
          <ItemMain img={AppIcon.Icon6} title={'Mua mã thẻ điện thoại'} />
          <ItemMain img={AppIcon.Icon7} title={'Gian hàng ProCheck'} />
          <ItemMain img={AppIcon.Icon8} title={'Mua sắm'} />
        </Row>
        <Row style={{ alignItems: 'flex-start', justifyContent: 'space-around', marginTop: 20 }}>
          <ItemMain img={AppIcon.Icon9} title={'Đặt vé máy bay'} />
          <ItemMain img={AppIcon.Icon10} title={'Đặt phòng khách sạn'} />
          <ItemMain img={AppIcon.Icon11} title={'Game từ nhãn hàng'} />
          <ItemMain img={null} />
        </Row>
      </View>
    );
  }
}

function ItemMain(props: any) {
  const { img, title, onPress } = props;
  return (
    <RippleButtonAnim containerStyle={{ alignItems: 'center', width: 70 }} onPress={onPress}>
      <Image source={img} style={styles.styImg} resizeMode={'contain'} />
      <Text style={styles.styTxtTitle}>{title}</Text>
    </RippleButtonAnim>
  );
}
