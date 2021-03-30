import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from '../index';
import Row from '../../util/Row';
import { screens } from '../../config';
import { ProductProps } from '../../screens/product/types';
import styles from './ListItem.style';
import ElementItem from './ElementItem';
const { width } = Dimensions.get('window');
const width_img_product = width / 1.9;
const height_img_product = (width - 80) / 2;
interface Props {
  navigation?: any;
  products: [ProductProps];
  name: string;
  category_id: string;
};

interface State { };
export default class ListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  };

  handlerGoToDetail = (item: ProductProps) => () => {
    this.props.navigation.navigate(screens.appStack, { screen: screens.homeDetail, params: { product_id: item.id } });
  };

  handlerGoToMore = () => {
    const { name, category_id } = this.props;
    this.props.navigation.navigate(screens.appStack, { screen: screens.homeMore, params: { category_id, title: name } });
  }

  renderItem = ({ item }: { item: ProductProps }) => {
    return (
      <ElementItem
        {...this.props}
        item={item}
        width={width_img_product}
        handlerGoToDetail={this.handlerGoToDetail(item)}
      />
    );
  };

  render() {
    const { products, name } = this.props;
    return (
      <View style={styles.contain}>
        <Row>
          <Text style={styles.styLabel}>{name}</Text>
          <TouchableOpacity
            onPress={this.handlerGoToMore}
          >
            <Text style={styles.styTxtMore}>Xem thêm</Text>
          </TouchableOpacity>
        </Row>
        <FlatList
          data={products}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
};
