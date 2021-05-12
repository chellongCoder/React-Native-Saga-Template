import React, { memo, useCallback, useMemo } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppBars, Rate, Text } from '../../components';
import navigationService from '../../navigation/navigation-service';
import { DetailProductT } from '../product_detail/types';
import { CommonStyle } from '../../constants';
import { useImageView } from '../../hooks';
import { Platform } from '../../theme';
import { mocksData } from '../product_detail/__mocks__/data';
import { useCommentStyle } from './styles';

const _CommentScreen = ({ route }: any) => {
  const navigation = useNavigation();
  const styles = useCommentStyle();
  const { productDetail }: { productDetail: DetailProductT } = route.params;
  const imageViewer = useImageView();
  const comment = useMemo(() => {
    return mocksData.comments[0];
  }, []);

  const onBack = useCallback(() => {
    navigationService.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <AppBars title={'Nhận xét về sản phẩm'} hasRightIcons={false} onPressLeft={onBack} />
      <ScrollView showsVerticalScrollIndicator={true}>
        {productDetail?.productRate.reverse().map((value, index) => {
          return (
            <View key={index} style={styles.comentContainer}>
              <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.infoRateContainer]}>
                <View style={[CommonStyle.row]}>
                  <View style={styles.avatar}>
                    <Image
                      resizeMode="contain"
                      style={CommonStyle.image}
                      source={
                        value.avatar
                          ? { uri: value.avatar }
                          : { uri: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' }
                      }
                    />
                  </View>
                  <View style={styles.info}>
                    <Text fontType="fontBold">{value.name}</Text>
                    <Text style={styles.date}>{value.createAt}</Text>
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
                <Text>{value.comment}</Text>
              </View>
              <View style={[styles.imageContainer, CommonStyle.row]}>
                {value.image.map((value, index: number) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        imageViewer.show([value]);
                      }}
                      style={styles.image}>
                      <Image
                        resizeMode="cover"
                        style={[CommonStyle.image, { borderRadius: Platform.SizeScale(5) }]}
                        source={{
                          uri: value,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export const CommentScreen = memo(_CommentScreen);
