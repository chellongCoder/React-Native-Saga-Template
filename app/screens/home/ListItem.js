import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import Image from 'react-native-fast-image';
import Row from '../../util/Row';
import { FontFamily } from '../../theme/index';
import { AppIcon } from '../../Common/AppIcon';
import { VNDCurrencyFormatting } from '../../Common/Common';
import RippButton from '../../anim/RippleButtonAnim';
import { screens } from '../../config';
import { CommonActions } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
export default class ListItem extends Component {

    handlerGoToDetail = item => () => {
        this.props.navigation.navigate(screens.appStack, { screen: screens.homeDetail, params: { product_id: item.id } });
    }

    renderItem = ({ item }) => {
        return (
            <RippButton
                onPress={this.handlerGoToDetail(item)}
            >
                <View style={styles.styWrapElement}>
                    <Image source={{ uri: item.featured_img }} resizeMode={'contain'} style={styles.styImage} />
                    <Text style={styles.styTxtName} numberOfLines={1}>
                        {item.name}
                    </Text>
                    {this.renderStar(item.rating)}
                    <Text style={styles.styTxtAmount}>{VNDCurrencyFormatting(item.unit_price)}</Text>
                </View>
            </RippButton>
        );
    };

    renderStar = (rating) => {
        return (
            <View style={styles.styWrapStar}>
                {Array.from(Array(5).keys()).map((i) => {
                    if (i < rating) {
                        return <Image source={AppIcon.IconStarActive} resizeMode={'contain'} style={styles.styStar} />;
                    }
                    return <Image source={AppIcon.IconStar} resizeMode={'contain'} style={styles.styStar} />;
                })}
            </View>
        );
    };

    render() {
        const { products } = this.props;
        return (
            <View style={styles.contain}>
                <Row>
                    <Text style={styles.styLabel}>Điện gia dụng</Text>
                    <Text style={styles.styTxtMore}>Xem thêm</Text>
                </Row>
                <FlatList
                    data={products}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain: {
        margin: 20,
    },
    styLabel: {
        flex: 1,
        fontFamily: FontFamily.fontRegular,
    },
    styTxtMore: {
        fontSize: 12,
        fontFamily: FontFamily.fontRegular,
    },
    styWrapElement: {
        width: (width - 60) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginVertical: 10,
    },
    styImage: {
        width: (width - 60) / 2,
        height: (width - 60) / 2,
    },
    styTxtName: {
        textTransform: 'capitalize',
        marginTop: 10,
        fontFamily: FontFamily.fontRegular,
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
    },
    styTxtAmount: {
        fontFamily: FontFamily.fontRegular,
        color: '#2095a2',
        alignSelf: 'flex-start',
    },
});
