import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { Platform } from '../../theme';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const { deviceWidth } = Platform;
const width_img_product = deviceWidth / 1.9;
const height_img_product = (deviceWidth - 80) / 2;

const ListItemShimmer = () => {
  const data = Array.from(Array(3).keys());
  return <FlatList data={data} keyExtractor={(i, index) => index.toString()} renderItem={() => <ElementShimmer />} />;
};

const ElementShimmer = () => {
  const data = Array.from(Array(5).keys());
  return (
    <FlatList
      data={data}
      keyExtractor={(i, index) => index.toString()}
      renderItem={() => <ItemShimmer />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const ItemShimmer = () => {
  return (
    <View style={[styles.container]}>
      <ShimmerPlaceHolder visible={false} style={styles.styImage} />
      <View style={{ paddingHorizontal: 10 }}>
        <ShimmerPlaceHolder
          visible={false}
          style={[
            {
              marginTop: Platform.SizeScale(5),
              borderRadius: 5,
              height: Platform.SizeScale(20),
              width: '100%',
            },
          ]}
        />
        <ShimmerPlaceHolder
          visible={false}
          style={[
            {
              marginTop: Platform.SizeScale(5),
              borderRadius: 5,
              height: Platform.SizeScale(10),
              width: '80%',
            },
          ]}
        />
        <ShimmerPlaceHolder
          visible={false}
          style={[
            {
              marginTop: Platform.SizeScale(5),
              borderRadius: 5,
              height: Platform.SizeScale(10),
              width: '60%',
            },
          ]}
        />
      </View>
    </View>
  );
};

export default ListItemShimmer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Platform.SizeScale(10),
    marginVertical: Platform.SizeScale(10),
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 5,
  },
  styImage: {
    width: width_img_product,
    height: height_img_product,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
