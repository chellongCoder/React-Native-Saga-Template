import React, { memo, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS, CommonStyle } from '../../constants';
import { DetailProductT } from '../../screens/product_detail/types';
import { mocksData } from '../../screens/product_detail/__mocks__/data';
import { Platform } from '../../theme';
import { Rate } from '../rating';
import { Text } from '../text';

const _Comment = ({ productDetail }: { productDetail?: DetailProductT }) => {
  const comment = useMemo(() => {
    return mocksData.comments[0];
  }, []);
  return (
    <View>
      <View style={styles.topic}>
        <Text style={styles.txtRate}>Đánh giá sản phẩm (1)</Text>
        <Text>Xem tất cả </Text>
      </View>
      <View style={styles.container}>
        <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.infoRateContainer]}>
          <View style={[CommonStyle.row]}>
            <View style={styles.avatar}>
              <Image
                resizeMode="contain"
                style={CommonStyle.image}
                source={{ uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' }}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{comment.name}</Text>
              <Text style={styles.date}>{comment.createAt}</Text>
            </View>
          </View>
        </View>
        <View style={[CommonStyle.row, CommonStyle.paddingTop10]}>
          <View style={styles.ratingContent}>
            <Text style={styles.txtRatingContent}>{comment.rateContent}</Text>
          </View>
          <Rate percent={3} />
        </View>
        <View style={[CommonStyle.paddingTop10]}>
          <Text>{comment.quote}</Text>
        </View>
        <View style={[styles.imageContainer, CommonStyle.row]}>
          <View style={styles.image}>
            <Image
              resizeMode="cover"
              style={[CommonStyle.image, { borderRadius: Platform.SizeScale(5) }]}
              source={{
                uri:
                  'file:///Users/chellong/Library/Developer/CoreSimulator/Devices/B6267FA2-6B87-4372-8A6B-650E8755E031/data/Media/DCIM/100APPLE/IMG_0002.JPG',
              }}
            />
          </View>
          <View style={styles.image}>
            <Image
              resizeMode="cover"
              style={[CommonStyle.image, { borderRadius: Platform.SizeScale(5) }]}
              source={{
                uri:
                  'file:///Users/chellong/Library/Developer/CoreSimulator/Devices/B6267FA2-6B87-4372-8A6B-650E8755E031/data/Media/DCIM/100APPLE/IMG_0002.JPG',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export const Comment = memo(_Comment);

const styles = StyleSheet.create({
  container: {
    padding: Platform.SizeScale(15),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.GRAY,
  },
  topic: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: Platform.SizeScale(10),
    borderColor: COLORS.GRAY,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtRate: {
    fontSize: Platform.SizeScale(16),
    color: COLORS.darkBlue,
    textAlign: 'center',
  },
  avatar: {
    width: Platform.SizeScale(50),
    height: Platform.SizeScale(50),
    borderRadius: Platform.SizeScale(25),
    overflow: 'hidden',
  },
  infoRateContainer: {
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
  },
  date: {
    color: COLORS.BOLD_GRAY,
  },
  info: {
    marginLeft: Platform.SizeScale(10),
  },
  ratingContent: {
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    borderRadius: Platform.SizeScale(12),
    paddingHorizontal: Platform.SizeScale(5),
    paddingVertical: Platform.SizeScale(2),
    marginRight: Platform.SizeScale(10),
  },
  txtRatingContent: {
    color: COLORS.lightBlue,
  },
  imageContainer: {
    marginTop: Platform.SizeScale(10),
  },
  image: {
    width: Platform.SizeScale(50),
    height: Platform.SizeScale(50),
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Platform.SizeScale(5),
    borderColor: COLORS.GRAY,
    marginHorizontal: Platform.SizeScale(5),
  },
});
