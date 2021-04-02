import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLoadingGlobal } from '../../../hooks';
import { AboutProduct, AppBars, ButtonGroup, InfoProduct, ItemCompany, LoadingGlobal, Slider } from '../../components';
import { mapDetailProduct } from '../../helpers/product.helper';
import { homeActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { useProductDetailStyle } from './styles';
import { DetailProductT } from './types';
import { mocksData } from './__mocks__/data';

const _ProductDetail = ({}) => {
  const { isLoading } = useSelector((state: RootState) => state.HomeData);
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState<DetailProductT>();
  const hookLoadingGlobal = useLoadingGlobal();

  const getDataProductDetailRequest = useCallback(async () => {
    await dispatch(
      homeActionsCreator.getDataProductDetailRequest({
        product_id: 2624,
        callback: (response: any) => setProductDetail(mapDetailProduct(response.product)),
      }),
    );
  }, [dispatch]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    if (isLoading) {
      hookLoadingGlobal.onShow();
    } else {
      hookLoadingGlobal.onHide();
    }
  }, [hookLoadingGlobal, isLoading]);

  useEffect(() => {
    getDataProductDetailRequest();
  }, [dispatch, getDataProductDetailRequest, hookLoadingGlobal]);

  return (
    <View style={styles.container}>
      <AppBars title="Điện tử, gia dụng" hasRightIcons={false} onPressLeft={onBack} />
      <ScrollView>
        <Slider data={mocksData.topics} />
        <View style={styles.content}>
          <InfoProduct {...{ productDetail }} />
          <ItemCompany />
          <ItemCompany />
          <AboutProduct {...{ productDetail }} />
        </View>
      </ScrollView>
      <ButtonGroup />
    </View>
  );
};

export const ProductDetailScreen = memo(_ProductDetail);
