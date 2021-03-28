import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
// import {Text} from ''
import HeaderDetail from '../../util/HeaderDetail';
import HeaderMain from '../../util/HeaderMain';
import { connect } from 'react-redux';
import { homeActionsCreator } from '../../redux/actions';
import { ProductProps } from '../product/types';
import ElementItem from '../../components/home-component/ElementItem';
import { screens } from '../../config/screens';
import { Text } from '../../components';
import styles from '../../components/home-component/ListItem.style';
const { width, height } = Dimensions.get('window');
interface Props {
    navigation: any;
    getDataProduct: (payload: object) => void;
    products: ProductProps;
}

const HomeMore = (props: Props) => {

    useEffect(() => {
        const payload = {
            access_token: '',
            params: {},
        }
        props.getDataProduct(payload);
    }, []);

    const handlerGoToDetail = (item: ProductProps) => () => {
        const params = { product_id: item.id };
        props.navigation.navigate(screens.appStack, { screen: screens.homeDetail, params });
    };

    return (
        <View style={{ flex: 1 }}>
            <HeaderDetail
                title={'Điện tử gia dụng'}
                navigation={props.navigation}
            />
            <HeaderMain  {...props} />
            <FlatList
                data={props.products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ElementItem
                    {...props} item={item}
                    width={(width - 40) / 2}
                    handlerGoToDetail={handlerGoToDetail(item)}
                />}
                numColumns={2}
                contentContainerStyle={{ marginHorizontal: 10 }}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    );
};

const renderEmpty = () => (
    <View style={styles.styWrapEmpty}>
        <Text>Không có dữ liệu :(</Text>
    </View>
)

const mapStateToProps = (state: any) => {
    return {
        products: state.HomeData.products,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getDataProduct: (payload: any) => dispatch(homeActionsCreator.getDataRequest(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeMore);