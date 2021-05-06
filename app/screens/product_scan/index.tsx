import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useLoadingGlobal, useModal } from '../../hooks';
import {
  AboutProduct,
  AppBars,
  AppButton,
  Comment,
  InfoProduct,
  InputCodeProduct,
  ItemCompany,
  ModalError,
  ModalSuccess,
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
import { screens } from '../../config';
import { useProductDetailStyle } from './styles';
import { DetailProductT, ProductDetailProps } from './types';

const _ProductScan = ({ route }: ProductDetailProps) => {
  const {
    params: { urlScan },
  } = route.params;
  const {
    isLoading,
    error,
    verifySuccess,
    verifyError,
    idMaHoa,
    inputVerify,
    activeError,
    activeSuccess,
  }: any = useSelector((state: RootState) => state.QRData);
  const { userInfo, data: userLogin, tempData }: any = useSelector((state: RootState) => state.AuthData);
  const styles = useProductDetailStyle();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState<DetailProductT>();
  const [dataSuggest, setDataSuggest] = useState([]);
  const hookLoadingGlobal = useLoadingGlobal();
  const scrollRef: any = useRef();
  const modal = useModal();
  const isLogin = useMemo(() => {
    return !!userLogin || !!tempData;
  }, [tempData, userLogin]);
  const accessToken = useMemo(() => {
    return userLogin?.accessToken || tempData?.accessToken;
  }, [tempData?.accessToken, userLogin?.accessToken]);

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
      hideMessage: true,
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

  const renderInputCode = useCallback(() => {
    return <InputCodeProduct />;
  }, []);

  const renderModalSuccess = useCallback(
    (title: string) => {
      return <ModalSuccess onHide={modal.onHide} title={title} />;
    },
    [modal.onHide],
  );

  const renderModalError = useCallback(
    (title: string) => {
      return <ModalError onHide={modal.onHide} title={title} />;
    },
    [modal.onHide],
  );

  const onShowVerify = useCallback(() => {
    modal.onShow(renderInputCode());
  }, [modal, renderInputCode]);

  const onVerifyProduct = useCallback(() => {
    if (!isLogin) {
      navigation.navigate(screens.login);
      return;
    }
    dispatch(
      qrActionsCreator.activeProductRequest({
        id_mahoa: idMaHoa,
        input_verify: inputVerify,
        token: accessToken,
      }),
    );
  }, [accessToken, dispatch, idMaHoa, inputVerify, isLogin, navigation]);

  useEffect(() => {
    if (isLoading) {
      hookLoadingGlobal.onShow();
    } else {
      hookLoadingGlobal.onHide();
    }
  }, [hookLoadingGlobal, isLoading]);

  useEffect(() => {
    if (!_.isEmpty(error)) {
      alertMessage('Cảnh báo', () => navigation.goBack(), 'Không tìm thấy sản phẩm liên quan.');
    }
  }, [error, navigation]);

  useEffect(() => {
    if (verifySuccess) {
      modal.onHide();
      modal.onShow(renderModalSuccess('Xác thực thành công'));
    }
  }, [modal, renderModalSuccess, verifySuccess]);

  useEffect(() => {
    if (verifyError) {
      modal.onHide();
      modal.onShow(renderModalError('Xác thực không thành công'));
    }
  }, [modal, renderModalError, verifyError]);

  useEffect(() => {
    if (activeSuccess) {
      modal.onHide();
      modal.onShow(renderModalSuccess(activeSuccess?.message));
    }
  }, [activeSuccess, modal, renderModalSuccess, verifySuccess]);

  useEffect(() => {
    if (activeError) {
      modal.onHide();
      modal.onShow(renderModalError(activeError?.message));
    }
  }, [activeError, modal, renderModalError, verifyError]);

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

      {verifySuccess ? (
        <AppButton
          onSubmit={onVerifyProduct}
          style={[styles.button, { backgroundColor: COLORS.blue }]}
          title="Kích hoạt bảo hành"
        />
      ) : (
        <AppButton
          onSubmit={onShowVerify}
          style={[styles.button, { backgroundColor: COLORS.GREEEN }]}
          title="Xác thực"
        />
      )}
    </View>
  );
};

export const ProductScanScreen = memo(_ProductScan);
