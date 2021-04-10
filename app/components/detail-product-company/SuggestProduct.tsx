import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { View } from 'native-base';
import { mapRelatedProducts } from '../../helpers/product.helper';
import { RelatedProduct } from '../../screens/product/types';
import { Text } from '../text';
import Row from '../../util/Row';
import { FontFamily, theme } from '../../theme';
import ItemSuggest from './ItemSuggest';
const { colors } = theme;

interface Props {
  data: RelatedProduct[] | [];
  navigation: any;
}

const SuggestProduct = (props: Props) => {
  const { data } = props;

  const handlerGoToMore = () => {
    // const { name, categoryId } = props;
    // props.navigation.navigate(screens.appStack, { screen: screens.homeMore, params: { categoryId, title: name } });
  };

  return (
    <View style={styles.contain}>
      <Row>
        <Text style={styles.styLabel}>Sản phẩm liên quan</Text>
        <TouchableOpacity onPress={handlerGoToMore}>
          <Text style={styles.styTxtMore}>Xem thêm</Text>
        </TouchableOpacity>
      </Row>
      <FlatList
        data={data || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: RelatedProduct }) => {
          item = mapRelatedProducts(item);
          return (
            <ItemSuggest
              navigation={props.navigation}
              productDescription={item.productDescription}
              rating={item.rating}
              id={item.id}
            />
          );
        }}
        horizontal={true}
      />
    </View>
  );
};

export default SuggestProduct;

const styles = StyleSheet.create({
  contain: {
    marginVertical: 20,
  },
  styLabel: {
    flex: 1,
    fontFamily: FontFamily.fontRegular,
    fontSize: 16,
    color: colors.gray,
  },
  styTxtMore: {
    fontSize: 14,
    fontFamily: FontFamily.fontRegular,
    color: colors.gray,
  },
});
