import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoadingGlobal } from '../../hooks';
import {
  AboutProduct,
  AppBars,
  AppButton,
  ButtonGroup,
  Comment,
  InfoProduct,
  ItemCompany,
  Rating,
  Slider,
  SuggestProduct,
} from '../../components';
import { qrActionsCreator } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { ApiQr } from '../../services/qr-service';
import { getDeviceToken } from '../../Common/Common';
import { alertMessage } from '../../util';
import { COLORS } from '../../constants';
import { useProductDetailStyle } from './styles';
import { DetailProductT, ProductDetailProps } from './types';

const _ProductScan = ({ route }: ProductDetailProps) => {
  const {
    params: { urlScan },
  } = route.params;
  const { isLoading, error, idMaHoa: id_mahoa } = useSelector((state: RootState) => state.QRData);
  const { userInfo } = useSelector((state: RootState) => state.AuthData);
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState<DetailProductT>();
  const [dataSuggest, setDataSuggest] = useState([]);
  const hookLoadingGlobal = useLoadingGlobal();
  const scrollRef: any = useRef();

  const getDataSuggest = useCallback(async (id) => {
    const response = await ApiQr.getDataSuggest({ product_id: id });
    if (response.status === 200) {
      setDataSuggest(response.product.related_products);
    }
  }, []);

  const getDataScanRequest = useCallback(async () => {
    const params = {
      url_scan: urlScan,
      user_id: 0,
      device_id: '',
      callback: (response: any) => {
        setProductDetail(response);
        getDataSuggest(response.id);
      },
    };
    const { deviceToken } = await getDeviceToken();
    if (!_.isEmpty(deviceToken)) {
      params.device_id = deviceToken || '';
    }
    if (!_.isEmpty(userInfo)) {
      const { id } = userInfo || { id: 0 };
      params.user_id = id;
    } else {
      params.user_id = 0;
    }
    await dispatch(qrActionsCreator.getDataScanRequest(params));
  }, [dispatch, getDataSuggest, urlScan, userInfo]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const scrollToTop = useCallback(() => {
    scrollRef.current.scrollToPosition(0, 0);
  }, []);

  const onShowVerify = useCallback(() => {
    dispatch(
      qrActionsCreator.verifyProductRequest({
        id_mahoa,
        input_verify: productDetail?.codeProduct || '',
      }),
    );
  }, [dispatch, id_mahoa, productDetail?.codeProduct]);

  useEffect(() => {
    if (isLoading) {
      hookLoadingGlobal.onShow();
    } else {
      hookLoadingGlobal.onHide();
    }
    if (!_.isEmpty(error)) {
      alertMessage('Cảnh báo', () => navigation.goBack(), 'Không tìm thấy sản phẩm liên quan.');
    }
  }, [error, hookLoadingGlobal, isLoading, navigation]);

  useEffect(() => {
    getDataScanRequest();
  }, [dispatch, getDataScanRequest, hookLoadingGlobal]);

  return (
    <View style={styles.container}>
      <AppBars title="Chi tiết sản phẩm" hasRightIcons={false} onPressLeft={onBack} />
      <KeyboardAwareScrollView ref={scrollRef}>
        <Slider data={productDetail?.photosSlider} />
        <View style={styles.content}>
          <InfoProduct {...{ productDetail }} />
          <ItemCompany shop={productDetail?.shop} />
          <AboutProduct {...{ productDetail }} />
        </View>
        <Rating {...{ productDetail, setProductDetail }} />
        <Comment {...{ productDetail }} />
        <SuggestProduct {...{ scrollToTop }} data={dataSuggest || []} navigation={navigation} />
      </KeyboardAwareScrollView>
      <AppButton onSubmit={onShowVerify} style={[styles.button, { backgroundColor: COLORS.GREEEN }]} title="Xác thực" />
    </View>
  );
};

export const ProductScanScreen = memo(_ProductScan);
