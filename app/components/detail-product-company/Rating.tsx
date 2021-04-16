import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FadeZoomAnim from '../../anim/FadeZoomAnim';
import { COLORS, CommonStyle } from '../../constants';
import { useBottomSheet } from '../../hooks';
import { homeActionsCreator } from '../../redux/actions';
import { productActionsCreator } from '../../redux/actions/product.action';
import { RootState } from '../../redux/reducers';
import { UserLoginT } from '../../screens/login/types';
import { PostCommentParamsT, PushStarT } from '../../screens/product_detail/types';
import { mocksData } from '../../screens/product_detail/__mocks__/data';
import { Platform } from '../../theme';
import { UploadFileT } from '../../types';
import { AppButton } from '../button';
import { Text } from '../text';
import { TextField } from '../text-field';
import { Stars } from './Stars';

const _Rating = () => {
  const { choicedImages } = useSelector((state: RootState) => state.ProductData);
  const { data: userLogin }: { data: UserLoginT } = useSelector((state: RootState) => state.AuthData);
  const selectedImage: UploadFileT[] = useMemo(() => choicedImages, [choicedImages]);
  const dispatch = useDispatch();
  const [stars, setStars] = useState<PushStarT[]>(mocksData.valueRating);
  const [text, setText] = useState('');
  const bottomSheet = useBottomSheet();

  const onComment = useCallback(() => {
    const data: PostCommentParamsT | any = {};
    stars.forEach((e) => {
      switch (e.index) {
        case 0:
          Object.assign(data, { rating_1: e.value });
          break;
        case 1:
          Object.assign(data, { rating_2: e.value });
          break;
        case 2:
          Object.assign(data, { rating_3: e.value });
          break;
        case 3:
          Object.assign(data, { rating_4: e.value });
          break;
        case 4:
          Object.assign(data, { rating_5: e.value });
          break;
        default:
          break;
      }
    });
    const files = selectedImage;
    // files.forEach((value: UploadFileT, index: number) => {
    //   const file: any = {};
    //   file[`files[${index}]`] = value;
    //   Object.assign(data, file);
    // });
    Object.assign(data, { files });

    Object.assign(data, { comment: text });
    Object.assign(data, { token: userLogin.accessToken });
    dispatch(homeActionsCreator.postCommentRequest(data));
  }, [dispatch, selectedImage, stars, text, userLogin?.accessToken]);

  const onChangeText = useCallback((value: string) => {
    setText(value);
  }, []);

  const pushStars = useCallback(
    (rate: PushStarT) => {
      const exists = stars.filter((e) => e.index !== rate.index);
      setStars([...exists, rate]);
    },
    [stars],
  );

  const onShowChoiceImage = useCallback(() => {
    bottomSheet.onShowActionSheet();
  }, [bottomSheet]);

  const onDeleteChoicedImage = useCallback(
    (index: number) => {
      const images = selectedImage.filter((item, i) => index !== i);
      dispatch(productActionsCreator.setChoicedImages({ images }));
    },
    [dispatch, selectedImage],
  );

  useEffect(() => {
    return () => {
      dispatch(productActionsCreator.setChoicedImages({ images: [] }));
    };
  }, [dispatch]);

  const renderRightAccessory = useCallback(() => {
    return (
      <View style={[styles.capture]}>
        <TouchableOpacity onPress={onShowChoiceImage}>
          <Image style={CommonStyle.normalIcon} source={{ uri: 'product_detail_2_10' }} />
        </TouchableOpacity>
        {selectedImage.map((value, key) => {
          return (
            <FadeZoomAnim key={key} duration={500}>
              <View style={styles.choicedImage}>
                <TouchableOpacity onPress={() => onDeleteChoicedImage(key)} style={styles.deleteImage}>
                  <Text>x</Text>
                </TouchableOpacity>
                <Image
                  resizeMode="cover"
                  style={[CommonStyle.image, { borderRadius: Platform.SizeScale(5) }]}
                  source={{
                    uri: value.uri,
                  }}
                />
              </View>
            </FadeZoomAnim>
          );
        })}
      </View>
    );
  }, [onDeleteChoicedImage, onShowChoiceImage, selectedImage]);

  return (
    <View>
      <View style={styles.topic}>
        <Text style={styles.txtTopic}>Đánh giá của bạn sẽ giúp ích cho cộng đồng</Text>
      </View>
      <View style={styles.starContainer}>
        {mocksData.ratings.map((value, index) => {
          return (
            <View style={[CommonStyle.row, CommonStyle.spaceBetween, styles.stars]}>
              <View style={[CommonStyle.row, styles.startLeft]}>
                <Image style={styles.icon3} source={{ uri: 'product_detail_36' }} />
                <Text numberOfLines={1} style={styles.txtStar}>
                  {value.name}
                </Text>
              </View>
              <View style={[CommonStyle.row]}>
                <Stars {...{ value, index, pushStars }} />
              </View>
            </View>
          );
        })}
      </View>
      <View>
        <TextField
          inputStyle={styles.inputStyle}
          style={styles.inpuRateStyle}
          placeholder="Viết đánh giá"
          multiline={true}
          numberOfLines={4}
          {...{ renderRightAccessory, onChangeText }}
        />
      </View>
      <AppButton onSubmit={onComment} labelStyles={styles.labelStyles} style={styles.button} title="Đăng đánh giá" />
    </View>
  );
};

export const Rating = memo(_Rating);

const styles = StyleSheet.create({
  icon3: {
    width: Platform.SizeScale(10),
    height: Platform.SizeScale(10),
  },
  starContainer: {
    padding: Platform.SizeScale(15),
  },
  txtStar: {
    marginLeft: Platform.SizeScale(10),
    maxWidth: Platform.baseScreenWith / 3,
  },
  stars: {
    marginBottom: Platform.SizeScale(10),
  },
  startLeft: {},
  topic: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingVertical: Platform.SizeScale(10),
    borderColor: COLORS.GRAY,
    alignItems: 'center',
  },
  txtTopic: {
    color: COLORS.darkBlue,
    textAlign: 'center',
  },
  inpuRateStyle: {
    borderRadius: Platform.SizeScale(5),
    height: Platform.SizeScale(180),
    flexDirection: 'column',
    marginHorizontal: Platform.SizeScale(15),
    borderColor: COLORS.GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'flex-start',
  },
  inputStyle: {
    justifyContent: 'flex-start',
    height: Platform.SizeScale(100),
    paddingTop: Platform.SizeScale(10),
  },
  capture: {
    width: Platform.deviceWidth - Platform.SizeScale(50),
    borderTopColor: COLORS.GRAY,
    paddingVertical: Platform.SizeScale(10),
    borderTopWidth: StyleSheet.hairlineWidth,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    width: Platform.deviceWidth - Platform.SizeScale(30),
    backgroundColor: COLORS.GREEEN,
    borderRadius: Platform.SizeScale(5),
    alignSelf: 'center',
    marginVertical: Platform.SizeScale(20),
  },
  labelStyles: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: Platform.SizeScale(14),
  },
  choicedImage: {
    width: Platform.SizeScale(50),
    height: Platform.SizeScale(50),
    marginHorizontal: Platform.SizeScale(10),
  },
  deleteImage: {
    backgroundColor: COLORS.BOLD_GRAY,
    position: 'absolute',
    zIndex: 999,
    top: -Platform.SizeScale(5),
    right: -Platform.SizeScale(5),
    width: Platform.SizeScale(20),
    height: Platform.SizeScale(20),
    borderRadius: Platform.SizeScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
