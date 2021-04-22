import React, { useCallback, useMemo, useRef, useState } from 'react';
import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { BottomSheet } from '../../components';
import { productActionsCreator } from '../../redux/actions/product.action';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { BottomSheetContext } from './context';
import { BottomSheetContextValue, BottomSheetProps } from './types';

const BottomSheetProvider = ({ children }: BottomSheetProps) => {
  const { choicedImages } = useSelector((state: RootState) => state.ProductData);
  const selectedImage = useMemo(() => choicedImages, [choicedImages]);
  const refActionSheet: any = useRef();
  const dispatch = useDispatch();

  const onActionSelected = useCallback(
    (index: number) => {
      console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
      console.log(`🛠 LOG: 🚀 --> ~ file: index.tsx ~ line 11 ~ onActionSelected ~ index`, index);
      console.log(`🛠 LOG: 🚀 --> ----------------------------------------------------------------------------`);
      try {
        switch (index) {
          case 0:
            ImageCropPicker.openCamera({
              writeTempFile: true,
              // compressImageQuality: 0.5,
              // cropping: true,
            })
              .then((image: ImageOrVideo) => {
                console.log('image', 'name', image, selectedImage);
                dispatch(
                  productActionsCreator.setChoicedImages({
                    images: [
                      ...selectedImage,
                      {
                        name: image.filename,
                        type: image.mime,
                        uri: Platform.OS === 'android' ? image.path : image.sourceURL,
                      },
                    ],
                  }),
                );
              })
              .catch((error) => {
                console.log('error', error);
              });
            break;
          case 1:
            ImageCropPicker.openPicker({
              writeTempFile: true,
              multiple: true,
            })
              .then((images: ImageOrVideo[]) => {
                console.log('image', 'name', images);
                const choicedImgs = images.map((image: ImageOrVideo) => {
                  return {
                    name: image.filename,
                    type: image.mime,
                    uri: Platform.OS === 'android' ? image.path : image.sourceURL,
                  };
                });
                dispatch(
                  productActionsCreator.setChoicedImages({
                    images: [...selectedImage, ...choicedImgs],
                  }),
                );
              })
              .catch((error) => {
                console.log('error', error);
              });
            break;
          default:
            break;
        }
      } catch (error) {}
    },
    [dispatch, selectedImage],
  );
  const onShowActionSheet = useCallback(() => {
    refActionSheet?.current.show();
  }, []);

  const contextValue = useMemo<BottomSheetContextValue>(
    () => ({
      onShowActionSheet,
    }),
    [onShowActionSheet],
  );

  return (
    <>
      <BottomSheetContext.Provider value={contextValue}>{children}</BottomSheetContext.Provider>
      {
        <BottomSheet
          ref={refActionSheet}
          {...{ onActionSelected }}
          title={'Chọn ảnh'}
          actions={['Chụp hình...', 'Chọn từ thư viện...', 'Huỷ']}
        />
      }
    </>
  );
};

export default BottomSheetProvider;
