import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Image from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { AppBars, Text } from '../../components';
import HeaderMain from '../../util/HeaderMain';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import { ApiHistory } from '../../services';
import { screens } from '../../config';
import { useLoadingGlobal } from '../../hooks';
import styles from './history.style';

const title = 'Lịch sử quét';

const History = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const hookLoadingGlobal = useLoadingGlobal();

  const getData = useCallback(async () => {
    hookLoadingGlobal.onShow();
    const deviceId = await AsyncStorage.getItem('@fcm_token');
    const response = await ApiHistory.getDataHistoryScan({ user_id: deviceId });
    hookLoadingGlobal.onHide();
    if (response?.status === 200) {
      setData(response.product);
    }
  }, [hookLoadingGlobal]);

  useEffect(() => {
    getData();
  }, [getData]);

  const goToDetail = (productId: string) => () => {
    navigation.navigate(screens.product_detail, {
      screen: screens.homeDetail,
      params: { productId },
    });
  };

  const renderItem = ({ item }: { item: any }) => {
    const { product_description, id } = item;
    return (
      <TouchableOpacity onPress={goToDetail(id)}>
        <Row style={styles.styWrapElement}>
          <Image source={{ uri: product_description.thumbnail_img }} style={styles.styImage} />
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
              <Text style={styles.styVerify} numberOfLines={1}>{`Xác thực bởi sahatha`}</Text>
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
      <HeaderMain />
      <FlatList
        data={data}
        keyExtractor={(i, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};

export default React.memo(History);
