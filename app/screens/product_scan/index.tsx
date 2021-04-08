import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLoadingGlobal } from '../../../hooks';
import { AboutProduct, AppBars, ButtonGroup, InfoProduct, ItemCompany, LoadingGlobal, Slider } from '../../components';
import { mapDetailProduct } from '../../helpers/product.helper';
import { qrActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { useProductDetailStyle } from './styles';
import { DetailProductT, ProductDetailProps } from './types';
import { mocksData } from './__mocks__/data';

const _ProductScan = ({ route }: ProductDetailProps) => {
  const {
    params: { urlScan },
  } = route.params;
  const { isLoading } = useSelector((state: RootState) => state.QRData);
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState<DetailProductT>();
  const hookLoadingGlobal = useLoadingGlobal();

  const getDataScanRequest = useCallback(async () => {
    await dispatch(
      qrActionsCreator.getDataScanRequest({
        url_scan: urlScan,
        callback: (response: any) => setProductDetail(mapDetailProduct(response.product)),
      }),
    );
  }, [dispatch, urlScan]);

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
    getDataScanRequest();
  }, [dispatch, getDataScanRequest, hookLoadingGlobal]);

  return (
    <View style={styles.container}>
      <AppBars title="Chi tiết sản phẩm" hasRightIcons={false} onPressLeft={onBack} />
      <ScrollView>
        <Slider data={productDetail?.photosSlider} />
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

export const ProductScanScreen = memo(_ProductScan);
