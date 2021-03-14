import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Image from 'react-native-fast-image';
import HeaderDetail from '../../util/HeaderDetail';
export default class HomeDetail extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  componentDidMount() {
    const { product_id } = this.props.route.params;
    this.props.getDataProductDetail({ access_token: null, params: { product_id } });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const { productDetail } = this.props;
    return (
      <View style={styles.contain}>
        <HeaderDetail {...this.props} />
        <SliderImage data={productDetail.photos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});

class SliderImage extends Component {
  render() {
    const { data } = this.props;
    console.log('🚀 ~ file: HomeDetail.tsx ~ line 34 ~ SliderImage ~ render ~ data', JSON.parse(data));
    return (
      <View>
        {/* <Swiper>
          {data.map((item) => (
            <Image source={{ uri: it }} />
          ))}
        </Swiper> */}
      </View>
    );
  }
}
