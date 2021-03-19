import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Image from 'react-native-fast-image';
import { Text } from '../index';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import { VNDCurrencyFormatting } from '../../Common/Common';
import RippButton from '../../anim/RippleButtonAnim';
import { screens } from '../../config';
import TextHelper from '../../Common/TextHelper';
import styles from './ListItem.style';

interface Props {
  navigation: any;
  products: object[];
}

interface State {}

export default class ListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  handlerGoToDetail = (item) => () => {
    this.props.navigation.navigate(screens.appStack, { screen: screens.homeDetail, params: { product_id: item.id } });
  };

  renderItem = ({ item }) => {
    return (
      <RippButton onPress={this.handlerGoToDetail(item)}>
        <View style={styles.styWrapElement}>
          <Image source={{ uri: item.featured_img }} resizeMode={'stretch'} style={styles.styImage} />
          <View style={styles.styWrapInfo}>
            <Text style={styles.styTxtName} numberOfLines={1}>
              {item.name}
            </Text>
            {this.renderStar(item.rating)}
            <Text style={styles.styTxtAmount}>{VNDCurrencyFormatting(item.unit_price)}</Text>
            <Row>
              <Image source={AppIcon.IconVerify} resizeMode={'contain'} style={styles.styImgVer} />
              <Text style={styles.styTxtVerify}>{TextHelper.text01}</Text>
            </Row>
          </View>
        </View>
      </RippButton>
    );
  };

  renderStar = (rating) => {
    return (
      <View style={styles.styWrapStar}>
        {Array.from(Array(5).keys()).map((i) => {
          if (i < rating) {
            return <Image source={AppIcon.IconStarActive} resizeMode={'contain'} style={styles.styStar} />;
          }
          return <Image source={AppIcon.IconStar} resizeMode={'contain'} style={styles.styStar} />;
        })}
        <Text style={styles.styTxtRate}>9.0 (68)</Text>
      </View>
    );
  };

  render() {
    const { products } = this.props;
    return (
      <View style={styles.contain}>
        <Row>
          <Text style={styles.styLabel}>Điện gia dụng</Text>
          <Text style={styles.styTxtMore}>Xem thêm</Text>
        </Row>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
