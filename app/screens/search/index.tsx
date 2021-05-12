import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import RippleButtonAnim from '../../anim/RippleButtonAnim';
import { Text, AppBars, ListFullOption } from '../../components';
import HeaderMain from '../../util/HeaderMain';
import Row from '../../util/Row';
import { Api } from '../../services/home-service';
import { RootState } from '../../redux/reducers';
import { ProductProps } from '../product/types';
import ElementItem from '../../components/home-component/ElementItem';
import { screens } from '../../config';
import { Platform } from '../../theme';
import { mapListProductMore } from '../../helpers/product.helper';
import { useLoadingGlobal } from '../../hooks';
import { COLORS } from '../../constants';
import styles from './styles';

const title = 'Tìm kiếm sản phẩm';

const SearchScreen = () => {
  const { userInfo } = useSelector((state: RootState) => state.AuthData);
  const navigation = useNavigation();
  const [textSearch, setTextSearch] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [verify, setVerify] = useState(false);
  const [costSort, setCostSort] = useState(false);
  const [rateSort, setRateSort] = useState(false);
  const [page, setPage] = useState(0);
  const hookLoadingGlobal = useLoadingGlobal();
  const refListFullOption = useRef(null);
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onChangeText = useCallback(async (text) => {
    setTextSearch(text);
  }, []);

  useEffect(() => {
    onEndEditing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = useCallback(
    async (params, init = false) => {
      hookLoadingGlobal.onShow();
      setisLoading(true);
      let access_token = null;
      if (userInfo !== undefined) {
        access_token = userInfo.access_token || null;
      }
      const response = await Api.getDataProductMore(access_token, params);
      if (response.status === 200) {
        let { product } = response;
        if (init) {
          const productMap = mapListProductMore(product);
          setData(productMap);
          setLoadMore(true);
          hookLoadingGlobal.onHide();
          setisLoading(false);
          return;
        }
        if (product && product.length <= 0) {
          setLoadMore(false);
          return;
        }
        const productMap = mapListProductMore(product);
        setData([...data, ...productMap]);
      }
      hookLoadingGlobal.onHide();
      setisLoading(false);
    },
    [data, hookLoadingGlobal, userInfo],
  );

  const onEndEditing = useCallback(async () => {
    let params = {
      search_name: textSearch,
      is_verify: verify ? 1 : 0, // 1: các sản phẩm đã xác thực. 0: chưa xác thực
      cost_sort: costSort ? 1 : 0, // 1: sắp xếp giá từ cao đến thấp. 0: từ thấp đến cao
      rate_sort: rateSort ? 1 : 0, // 1: sắp xếp đánh giá sao từ cao đến thấp. 0: từ thấp đến cao
      page: 0,
    };
    setPage(0);
    getData(params, true);
    refListFullOption.current.scrollTo();
  }, [costSort, getData, rateSort, textSearch, verify]);

  const handlerGoToDetail = useCallback(
    (item: ProductProps) => {
      navigation.navigate(screens.product_detail, {
        params: { productId: item.id },
      });
    },
    [navigation],
  );

  const renderEmpty = useCallback(() => {
    return (
      !isLoading && (
        <View style={styles.styWrapEmpty}>
          <Text>Không có dữ liệu :(</Text>
        </View>
      )
    );
  }, [isLoading]);

  const handlerFilterVerify = useCallback(async () => {
    await setVerify(!verify);
    onEndEditing();
  }, [onEndEditing, verify]);

  const handlerFilterCost = useCallback(async () => {
    await setCostSort(!costSort);
    onEndEditing();
  }, [costSort, onEndEditing]);

  const handlerFilterRate = useCallback(async () => {
    await setRateSort(!rateSort);
    onEndEditing();
  }, [onEndEditing, rateSort]);

  const handlerFilterReset = useCallback(async () => {
    await setRateSort(false);
    await setCostSort(false);
    await setVerify(false);
    onEndEditing();
  }, [onEndEditing]);

  const onLoadMore = useCallback(() => {
    const paging = page + 1;
    const params = {
      search_name: textSearch,
      is_verify: verify ? 1 : 0, // 1: các sản phẩm đã xác thực. 0: chưa xác thực
      cost_sort: costSort ? 1 : 0, // 1: sắp xếp giá từ cao đến thấp. 0: từ thấp đến cao
      rate_sort: rateSort ? 1 : 0, // 1: sắp xếp đánh giá sao từ cao đến thấp. 0: từ thấp đến cao
      page,
    };
    getData(params);
    setPage(paging);
  }, [costSort, getData, page, rateSort, textSearch, verify]);

  return (
    <View style={styles.contain}>
      <AppBars title={title} hasRightIcons={false} onPressLeft={onBack} />
      <HeaderMain value={textSearch} onChangeText={onChangeText} onEndEditing={onEndEditing} />
      {/* filter */}
      <Row style={styles.styWrapFilter}>
        <RippleButtonAnim onPress={handlerFilterReset}>
          <Row style={styles.styWrapFilterEle}>
            <IconAntDesign name={'filter'} size={20} />
            <Text style={styles.styTxtFilter}>Bộ lọc</Text>
          </Row>
        </RippleButtonAnim>

        <RippleButtonAnim onPress={handlerFilterVerify}>
          <Row style={verify ? styles.styWrapFilterEleActive : styles.styWrapFilterEle}>
            <IconAntDesign name={'check'} size={20} color={verify ? COLORS.WHITE : COLORS.BLACK} />
            <Text style={verify ? styles.styTxtFilterActive : styles.styTxtFilter}>Đã xác thực</Text>
          </Row>
        </RippleButtonAnim>

        <RippleButtonAnim onPress={handlerFilterCost}>
          <Row style={styles.styWrapFilterEle}>
            <Text style={styles.styTxtFilter}>Giá từ</Text>
            <IconAntDesign name={costSort ? 'caretup' : 'caretdown'} size={18} />
          </Row>
        </RippleButtonAnim>

        <RippleButtonAnim onPress={handlerFilterRate}>
          <Row style={styles.styWrapFilterEle}>
            <Text style={styles.styTxtFilter}>Đánh giá</Text>
            <IconAntDesign name={rateSort ? 'caretup' : 'caretdown'} size={18} />
          </Row>
        </RippleButtonAnim>
      </Row>

      {/* list filter */}
      <ListFullOption
        ref={refListFullOption}
        data={data}
        renderSubItem={(item: ProductProps) => (
          <ElementItem
            {...{ handlerGoToDetail }}
            item={item}
            width={Platform.deviceWidth / 2 - Platform.SizeScale(20)}
          />
        )}
        numColumns={2}
        style={{ marginHorizontal: Platform.SizeScale(10) }}
        ListEmptyComponent={renderEmpty}
        {...{
          onLoadMore,
          loadMore,
        }}
      />
    </View>
  );
};

export default React.memo(SearchScreen);
