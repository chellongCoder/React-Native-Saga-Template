import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import styles from './home.styles';

export default class HomeScreen extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    return (
      <View style={styles.styWrapMenuMain}>
        <Row>
          <Text style={styles.styTextMeMai}>Xin chào, Long</Text>
          <IconAntDesign name={'right'} />
        </Row>
        <Row style={styles.styWrapItem}>
          <ItemMain img={AppIcon.Icon1} title={'Scan & Buy'} />
          <ItemMain img={AppIcon.Icon2} title={'Quà của tôi'} />
          <ItemMain img={AppIcon.Icon3} title={'Nhiệm vụ'} />
          <ItemMain img={AppIcon.Icon4} title={'Chương trình'} />
        </Row>
      </View>
    );
  }
}

function ItemMain(props: any) {
  const { img, title, onPress } = props;
  return (
    <RippleButtonAnim containerStyle={{ alignItems: 'center' }} onPress={onPress}>
      <Image source={img} style={styles.styImg} resizeMode={'contain'} />
      <Text style={styles.styTxtTitle}>{title}</Text>
    </RippleButtonAnim>
  );
}
