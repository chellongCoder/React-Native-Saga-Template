import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppBars, InfoProduct, Slider } from '../../components';
import { homeActionsCreator } from '../../redux/actions';
import { useProductDetailStyle } from './styles';
import { mocksData } from './__mocks__/data';

const _ProductDetail = ({}) => {
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState();
  console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------`);
  console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 19 ~ productDetail`, productDetail);
  console.log(`🛠 LOG: 🚀 --> -------------------------------------------------------------------------`);

  const getDataProductDetailRequest = useCallback(async () => {
    await dispatch(
      homeActionsCreator.getDataProductDetailRequest({
        product_id: 2624,
        callback: (response: any) => setProductDetail(response.product),
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    getDataProductDetailRequest();
  }, [dispatch, getDataProductDetailRequest]);

  return (
    <View style={styles.container}>
      <AppBars title="Điện tử, gia dụng" hasRightIcons={false} />
      <Slider data={mocksData.topics} />
      <InfoProduct />
    </View>
  );
};

export const ProductDetailScreen = memo(_ProductDetail);
