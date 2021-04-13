import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Linking
} from 'react-native';
import Swiper from 'react-native-swiper';
import RippleButton from '../anim/RippleButtonAnim';
import Image from 'react-native-fast-image';
import _ from 'lodash';
import { Platform } from '../theme';
const { width, height } = Dimensions.get('window');

export default class BannerAdvertisement extends Component {

    openBanner = url => () => {
        Linking.openURL(url);
    }

    renderBanner = (data) => {
        if (_.isEmpty(data)) {
            return <View />;
        }
        const element = data.map((item, index) => {
            return (
                <View style={[styles.wrapContain, { width }]} key={index}>
                    <RippleButton
                        rippleSize={Platform.SizeScale(100)}
                        style={{ marginVertical: Platform.SizeScale(5) }}
                    >
                        <Image
                            source={{ uri: `https://sahatha.vn/` + item.photo }}
                            resizeMode={'stretch'}
                            style={styles.styImage}
                        />
                    </RippleButton>
                </View>
            );
        });
        return element;
    }

    render() {
        let { data } = this.props;
        return (
            <View style={styles.styWrapBanner}>
                <Swiper
                    style={styles.wrapper}
                    autoplay={true}
                    autoplayTimeout={1}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    {this.renderBanner(data)}
                </Swiper >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: ((width - 20) / 1030) * 328,
    },
    wrapContain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    styImage: {
        width: width - 40,
        height: ((width - 40) / 1030) * 328,
        alignContent: 'center',
        borderRadius: 5,
        overflow: 'hidden',
    },
    paginationStyle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        top: Platform.SizeScale(-10),
        left: Platform.SizeScale(50),
        width,
        height: ((width - 40) / 1030) * 328,
    },
    styWrapBanner: {
        height: ((width - 20) / 1030) * 328,
        overflow: 'hidden',
        marginTop: Platform.SizeScale(20)
    },
    dotStyle: {
        backgroundColor: '#FFF',
        width: Platform.SizeScale(6),
        height: Platform.SizeScale(6),
    },
    activeDotStyle: {
        backgroundColor: '#999',
        width: Platform.SizeScale(6),
        height: Platform.SizeScale(6),
    }
})