import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Image from 'react-native-fast-image';
import { Text } from '../index';
import Row from '../../util/Row';
import { screens } from '../../config';
import { ProductProps } from '../../screens/product/types';
import RippButton from '../../anim/RippleButtonAnim';
import { AppIcon } from '../../Common/AppIcon';
import { VNDCurrencyFormatting } from '../../Common/Common';
import TextHelper from '../../Common/TextHelper';
import { theme, FontFamily } from '../../theme';
const { width } = Dimensions.get('window');
const width_img_product = width / 1.9;
const height_img_product = (width - 80) / 2;
const { colors } = theme;

type productDescription = {
  featuredImg: string;
  flashDealImg: string;
  id: number;
  language: string;
  name: string;
  photos: string[];
  productId: number;
  thumbnailImg: string;
  thumbnailoptimize: string;
};

interface Props {
  navigation?: any;
  productDescription: productDescription;
  rating: number;
  id: number;
}

const ItemSuggest = (props: Props) => {
  const handlerGoToDetail = (item: ProductProps) => () => {
    props.navigation.navigate(screens.product_detail, {
      screen: screens.homeDetail,
      params: { productId: item.id },
    });
  };

  const { productDescription, rating } = props;
  return (
    <View style={styles.contain}>
      <RippButton onPress={handlerGoToDetail}>
        <View style={[styles.styWrapElement, { width: width_img_product }]}>
          <Image
            source={{ uri: productDescription.thumbnailImg }}
            resizeMode={'stretch'}
            style={[styles.styImage, { width: width_img_product }]}
          />
          <View style={styles.styWrapInfo}>
            <Text style={styles.styTxtName} numberOfLines={1}>
              {productDescription.name}
            </Text>
            {renderStar(rating)}
            <Text style={styles.styTxtAmount}>{VNDCurrencyFormatting(0)}</Text>
            <Row>
              <Image source={AppIcon.IconVerify} resizeMode={'contain'} style={styles.styImgVer} />
              <Text style={styles.styTxtVerify}>{TextHelper.text01}</Text>
            </Row>
          </View>
        </View>
      </RippButton>
    </View>
  );
};

export default ItemSuggest;

const renderStar = (rating: number) => {
  return (
    <View style={styles.styWrapStar}>
      {Array.from(Array(5).keys()).map((i) => {
        if (i < rating) {
          return <Image source={AppIcon.IconStarActive} resizeMode={'contain'} style={styles.styStar} />;
        }
        return <Image source={AppIcon.IconStar} resizeMode={'contain'} style={styles.styStar} />;
      })}
      <Text style={styles.styTxtRate}>9.0 (68)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    marginVertical: 5,
  },
  styWrapElement: {
    width: width_img_product,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  styImage: {
    width: width_img_product,
    height: height_img_product,
    borderRadius: 10,
    overflow: 'hidden',
  },
  styTxtName: {
    textTransform: 'capitalize',
    marginTop: 10,
    fontFamily: FontFamily.fontRegular,
    fontSize: 14,
  },
  styStar: {
    width: 12,
    height: 12,
    marginHorizontal: 2,
    marginVertical: 5,
  },
  styWrapStar: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  styTxtAmount: {
    fontFamily: FontFamily.fontRegular,
    color: '#2095a2',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 14,
  },
  styTxtRate: {
    color: '#a7b1bf',
    fontFamily: FontFamily.fontRegular,
    fontSize: 12,
    marginHorizontal: 5,
  },
  styImgVer: {
    width: 15,
    height: 15,
  },
  styTxtVerify: {
    color: '#019444',
    fontSize: 12,
    fontFamily: FontFamily.fontRegular,
    marginHorizontal: 5,
  },
  styWrapInfo: {
    padding: 5,
    alignSelf: 'flex-start',
  },
});
