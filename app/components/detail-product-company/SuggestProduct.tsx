import React, { memo, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View } from 'native-base';
import { mapRelatedProducts } from '../../helpers/product.helper';
import { RelatedProduct } from '../../screens/product/types';
import { Text } from '../text';
import Row from '../../util/Row';
import { FontFamily, Platform, theme } from '../../theme';
import ItemSuggest from './ItemSuggest';
const { colors } = theme;

interface Props {
  data: RelatedProduct[] | [];
  navigation: any;
}

const _SuggestProduct = (props: Props) => {
  const { data } = props;

  const renderItem = useCallback(
    ({ item }: { item: RelatedProduct }) => {
      item = mapRelatedProducts(item);
      return (
        <ItemSuggest
          navigation={props.navigation}
          productDescription={item.productDescription}
          rating={item.rating}
          id={item.id}
        />
      );
    },
    [props.navigation],
  );

  return (
    <View style={styles.contain}>
      <Row style={styles.titleContainer}>
        <Text style={styles.styLabel}>Sản phẩm liên quan</Text>
      </Row>
      <FlatList
        data={data || []}
        keyExtractor={(item, index) => index.toString()}
        {...{ renderItem }}
        horizontal={true}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export const SuggestProduct = memo(_SuggestProduct);

const styles = StyleSheet.create({
  contain: {
    marginVertical: Platform.SizeScale(20),
  },
  styLabel: {
    flex: 1,
    fontFamily: FontFamily.fontRegular,
    fontSize: Platform.SizeScale(16),
    color: colors.gray,
  },
  titleContainer: {
    paddingHorizontal: Platform.SizeScale(15),
  },
  list: {
    paddingLeft: Platform.SizeScale(15),
  },
});
