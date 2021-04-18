import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useLoadingGlobal } from '../../hooks';
import { AboutProduct, AppBars, ButtonGroup, InfoProduct, ItemCompany, Slider, SuggestProduct } from '../../components';
import { qrActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { ApiQr } from '../../services/qr-service';
import { useProductDetailStyle } from './styles';
import { DetailProductT, ProductDetailProps } from './types';

const _ProductScan = ({ route }: ProductDetailProps) => {
  const {
    params: { urlScan },
  } = route.params;
  const { isLoading } = useSelector((state: RootState) => state.QRData);
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState<DetailProductT>();
  const [dataSuggest, setDataSuggest] = useState([]);
  const hookLoadingGlobal = useLoadingGlobal();

  const getDataSuggest = useCallback(async (id) => {
    const response = await ApiQr.getDataSuggest({ product_id: id });
    if (response.status === 200) {
      setDataSuggest(response.product.related_products);
    }
  }, []);

  const getDataScanRequest = useCallback(async () => {
    const device_id = await AsyncStorage.getItem('@fcm_token');
    await dispatch(
      qrActionsCreator.getDataScanRequest({
        url_scan: urlScan,
        user_id: 0,
        device_id,
        callback: (response: any) => {
          setProductDetail(response);
          getDataSuggest(response.id);
        },
      }),
    );
  }, [dispatch, getDataSuggest, urlScan]);

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
          <InfoProduct {...productDetail} />
          <ItemCompany />
          <ItemCompany />
          <AboutProduct {...productDetail} />
        </View>
        <SuggestProduct data={dataSuggest || []} navigation={navigation} />
      </ScrollView>
      <ButtonGroup />
    </View>
  );
};

export const ProductScanScreen = memo(_ProductScan);
