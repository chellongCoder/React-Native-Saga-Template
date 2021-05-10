import React, { useState } from 'react';
import { View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text } from '../index';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import { VNDCurrencyFormatting } from '../../Common/Common';
import RippButton from '../../anim/RippleButtonAnim';
import TextHelper from '../../Common/TextHelper';
import { ProductProps } from '../../screens/product/types';
import styles from './ListItem.style';

interface Props {
  handlerGoToDetail?: (item: ProductProps) => void;
  item: ProductProps;
  width: number;
}

const ElementItem = (props: Props) => {
  const [noImage, setNoImage] = useState('');
  let { name, rating, unitPrice, quantity, thumbnailImg } = props.item;
  thumbnailImg = thumbnailImg?.replace(/ +/g, '%20');
  thumbnailImg = !thumbnailImg.includes('https://sahatha.vn') ? `https://sahatha.vn/${thumbnailImg}` : thumbnailImg;

  const onError = () => {
    setNoImage('https://lasd.lv/public/assets/no-image.png');
  };

  return (
    <RippButton onPress={() => props.handlerGoToDetail?.(props?.item)}>
      <View style={[styles.styWrapElement, { width: props.width }]}>
        <FastImage
          source={{ uri: noImage || thumbnailImg }}
          resizeMode={'contain'}
          style={[styles.styImage, { width: props.width }]}
          onError={onError}
        />
        <View style={styles.styWrapInfo}>
          <Text style={styles.styTxtName} numberOfLines={2}>
            {name}
          </Text>
          {renderStar(rating, quantity)}
          <Text style={styles.styTxtAmount}>{VNDCurrencyFormatting(unitPrice)}</Text>
          <Row>
            <Image source={AppIcon.IconVerify} resizeMode={'contain'} style={styles.styImgVer} />
            <Text style={styles.styTxtVerify}>{TextHelper.text01}</Text>
          </Row>
        </View>
      </View>
    </RippButton>
  );
};

const renderStar = (rating: number, quantity: number) => {
  return (
    <View style={styles.styWrapStar}>
      {Array.from(Array(5).keys()).map((i, index) => {
        if (i < rating) {
          return <Image key={index} source={AppIcon.IconStarActive} resizeMode={'contain'} style={styles.styStar} />;
        }
        return <Image key={index} source={AppIcon.IconStar} resizeMode={'contain'} style={styles.styStar} />;
      })}
      <Text style={styles.styTxtRate}>
        {rating} ({quantity})
      </Text>
    </View>
  );
};

export default ElementItem;
