import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import Image from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { AppBars, Text } from '../../components';
import HeaderMain from '../../util/HeaderMain';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import styles from './history.style';
import { dataHistory } from './__mocks__/data';
const title = 'Lịch sử quét';

const History = () => {
  const navigation = useNavigation();
  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Row style={styles.styWrapElement}>
        <Image source={{ uri: item.image }} style={styles.styImage} />
        <View style={{ flex: 1 }}>
          <Text>{item.title}</Text>
          <Row>
            <Image source={AppIcon.IconStarActive} style={styles.styImgStar} />
            <Text style={styles.styRateting}>{item.rateting}</Text>
            <Text style={styles.styCouCmt}>{'(71)'}</Text>
            <Image source={AppIcon.IconBarCode} style={styles.styImgStar} />
            <Text style={styles.styBarCode}>{item.barcode}</Text>
          </Row>
          <Row>
            <Image source={AppIcon.IconVerify} style={styles.styImgStar} />
            <Text style={styles.styVerify} numberOfLines={1}>{`Xác thực bởi sahatha`}</Text>
            <Image source={AppIcon.IconCompany} style={styles.styImgStar} />
            <Text style={styles.styCompany} numberOfLines={1}>
              {item.company}
            </Text>
          </Row>
        </View>
      </Row>
    );
  };

  return (
    <View style={styles.container}>
      <AppBars title={title} hasRightIcons={false} onPressLeft={onBack} />
      <HeaderMain />
      <FlatList data={dataHistory} keyExtractor={(i, index) => index.toString()} renderItem={renderItem} />
    </View>
  );
};

export default React.memo(History);
