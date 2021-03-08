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
const { width, height } = Dimensions.get('window');

export default class BannerAdvertisement extends Component {

    openBanner = url => () => {
        Linking.openURL(url);
    }

    renderBanner = (data) => {
        if (data && data.length == 0) {
            return null;
        }
        const element = data.map((item, index) => {
            return (
                <View style={[styles.wrapContain, { width }]} key={index}>
                    <RippleButton
                        rippleSize={100}
                        style={{ marginVertical: 5 }}
                    >
                        <Image
                            source={{ uri: 'https://sahatha.vn/uploads/sliders/ABxRoO1nJ8AzGV3PtTs8vBiaOWqRgHl3WuuSHdeL.png' }}
                            resizeMode={'contain'}
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
                    dotStyle={{ backgroundColor: '#FFF', width: 6, height: 6 }}
                    activeDotStyle={{ backgroundColor: '#999', width: 6, height: 6 }}
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
        top: -10,
        left: 50,
        width,
        height: ((width - 40) / 1030) * 328,
    },
    styWrapBanner: {
        height: ((width - 20) / 1030) * 328,
        overflow: 'hidden',
        marginTop: 20
    },
})