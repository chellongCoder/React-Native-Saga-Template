import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoadingGlobal } from '../../hooks';
import {
  AboutProduct,
  AppBars,
  ButtonGroup,
  Comment,
  InfoProduct,
  ItemCompany,
  Rating,
  Slider,
  SuggestProduct,
} from '../../components';
import { mapDetailProduct } from '../../helpers/product.helper';
import { homeActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { useProductDetailStyle } from './styles';
import { DetailProductT, ProductDetailProps } from './types';

const _ProductDetail = ({ route }: ProductDetailProps) => {
  const {
    params: { productId },
  } = route.params;
  const { isLoading } = useSelector((state: RootState) => state.HomeData);
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState<DetailProductT>();
  const hookLoadingGlobal = useLoadingGlobal();
  const scrollRef: any = useRef();

  const getDataProductDetailRequest = useCallback(async () => {
    await dispatch(
      homeActionsCreator.getDataProductDetailRequest({
        product_id: productId,
        callback: (response: any) => setProductDetail(mapDetailProduct(response.product)),
      }),
    );
  }, [dispatch, productId]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const scrollToTop = useCallback(() => {
    scrollRef.current.scrollToPosition(0, 0);
  }, []);

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
      <AppBars title={productDetail?.nameProduct || 'Chi tiết sản phẩm'} hasRightIcons={false} onPressLeft={onBack} />
      <KeyboardAwareScrollView ref={scrollRef}>
        <Slider data={productDetail?.photosSlider} />
        <View style={styles.content}>
          <InfoProduct {...{ productDetail }} />
          <ItemCompany shop={productDetail?.shop} />
        </View>
        <AboutProduct {...{ productDetail }} />
        <Rating {...{ productDetail, setProductDetail }} />
        <Comment {...{ productDetail }} />
        <SuggestProduct {...{ scrollToTop }} data={productDetail?.relatedProducts || []} navigation={navigation} />
      </KeyboardAwareScrollView>
      <ButtonGroup />
    </View>
  );
};

export const ProductDetailScreen = memo(_ProductDetail);
