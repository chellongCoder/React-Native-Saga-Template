import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-fast-image';
import { Text } from '../index';
import Row from '../../util/Row';
import { AppIcon } from '../../Common/AppIcon';
import { VNDCurrencyFormatting } from '../../Common/Common';
import RippButton from '../../anim/RippleButtonAnim';
import TextHelper from '../../Common/TextHelper';
import styles from './ListItem.style';
import { ProductProps } from '../../screens/product/types';

interface Props {
    handlerGoToDetail: () => void;
    item: ProductProps;
    width: number;
}

const ElementItem = (props: Props) => {
    const { featuredImg, name, rating, unitPrice } = props.item;
    return (
        <RippButton onPress={props.handlerGoToDetail}>
            <View style={[styles.styWrapElement, { width: props.width }]}>
                <Image source={{ uri: featuredImg }} resizeMode={'stretch'} style={[styles.styImage, { width: props.width }]} />
                <View style={styles.styWrapInfo}>
                    <Text style={styles.styTxtName} numberOfLines={1}>
                        {name}
                    </Text>
                    {renderStar(rating)}
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

export default ElementItem;