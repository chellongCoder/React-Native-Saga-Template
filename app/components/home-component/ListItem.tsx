import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from '../index';
import Row from '../../util/Row';
import { screens } from '../../config';
import { ProductProps } from '../../screens/product/types';
import { mapListProduct } from '../../helpers/product.helper';
import styles from './ListItem.style';
import ElementItem from './ElementItem';

const { width } = Dimensions.get('window');
const width_img_product = width / 1.9;
const height_img_product = (width - 80) / 2;
interface Props {
  navigation?: any;
  products: ProductProps[];
  name: string;
  categoryId: string;
}

interface State {}
export default class ListItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handlerGoToDetail = (item: ProductProps) => () => {
    this.props.navigation.navigate(screens.product_detail, {
      screen: screens.homeDetail,
      params: { productId: item.id },
    });
  };

  handlerGoToMore = () => {
    const { name, categoryId } = this.props;
    this.props.navigation.navigate(screens.appStack, { screen: screens.homeMore, params: { categoryId, title: name } });
  };

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
    const data = mapListProduct(products);
    return (
      <View>
        <View style={styles.contain}>
          <Row>
            <Text style={styles.styLabel}>{name}</Text>
            <TouchableOpacity onPress={this.handlerGoToMore}>
              <Text style={styles.styTxtMore}>Xem thêm</Text>
            </TouchableOpacity>
          </Row>
        </View>
        <FlatList
          data={data}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    );
  }
}
