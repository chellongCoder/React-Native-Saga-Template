import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { AppBars, Text } from '../../components';
import HeaderMain from '../../util/HeaderMain';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import { ApiHistory } from '../../services';
import { screens } from '../../config';
import { useLoadingGlobal } from '../../hooks';
import { CommonStyle } from '../../constants';
import { text01 } from '../../Common/TextHelper';
import { getDeviceToken } from '../../Common/Common';
import { RootState } from '../../redux/reducers';
import styles from './history.style';

const title = 'Lịch sử quét';

const History = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const { userInfo }: any = useSelector((state: RootState) => state.AuthData);
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const hookLoadingGlobal = useLoadingGlobal();

  const getData = useCallback(async () => {
    setRefreshing(true);
    hookLoadingGlobal.onShow();
    const { deviceToken } = await getDeviceToken();
    const user_id = userInfo?.id || 0;
    const response = await ApiHistory.getDataHistoryScan({ user_id, device_id: deviceToken });
    hookLoadingGlobal.onHide();
    if (response?.status === 200) {
      setData(response.product);
      setDataSearch(response.product);
    }
    setRefreshing(false);
  }, [hookLoadingGlobal, userInfo?.id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const goToDetail = (productId: string) => () => {
    navigation.navigate(screens.product_detail, {
      screen: screens.homeDetail,
      params: { productId },
    });
  };

  const onChangeText = useCallback(
    (value: string) => {
      setTextSearch(value);
      if (_.isEmpty(data)) {
        return;
      }
      const dataSearchTemp = data.filter((item) => {
        const { product_description } = item;
        return product_description?.name?.toLocaleUpperCase().includes(value.toLocaleUpperCase());
      });
      setDataSearch(dataSearchTemp);
    },
    [data],
  );

  const renderItem = ({ item }: { item: any }) => {
    const { product_description, id } = item;
    return (
      <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} onPress={goToDetail(id)}>
        <Row style={styles.styWrapElement}>
          <View style={styles.styImage}>
            <Image source={{ uri: product_description.thumbnail_img }} style={CommonStyle.image} />
          </View>
          <View style={{ flex: 1 }}>
            <Text>{product_description.name}</Text>
            <Row>
              <Image source={AppIcon.IconStarActive} style={styles.styImgStar} />
              <Text style={styles.styRateting}>{5}</Text>
              <Text style={styles.styCouCmt}>{'(71)'}</Text>
              <Image source={AppIcon.IconBarCode} style={styles.styImgStar} />
              <Text style={styles.styBarCode}>{product_description.updated_at}</Text>
            </Row>
            <Row>
              <Image source={AppIcon.IconVerify} style={styles.styImgStar} />
              <Text style={styles.styVerify} numberOfLines={1} fontType={'fontBold'}>
                {text01}
              </Text>
              <Image source={AppIcon.IconCompany} style={styles.styImgStar} />
              <Text style={styles.styCompany} numberOfLines={1}>
                {product_description.tags}
              </Text>
            </Row>
          </View>
        </Row>
      </TouchableOpacity>
    );
  };

  const renderEmpty = () => (
    <View style={styles.styWrapEmpty}>
      <Text style={styles.styTxtEmpty}>Hiện tại chưa có lịch sử quét mã</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppBars title={title} hasRightIcons={false} onPressLeft={onBack} />
      <HeaderMain value={textSearch} onChangeText={onChangeText} />
      <FlatList
        data={dataSearch}
        keyExtractor={(i, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getData} />}
      />
    </View>
  );
};

export default React.memo(History);
