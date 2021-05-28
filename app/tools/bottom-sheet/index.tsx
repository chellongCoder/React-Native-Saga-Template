import React, { useCallback, useMemo, useRef, useState } from 'react';
import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { BottomSheet } from '../../components';
import { BottomSheetContext } from './context';
import { BottomSheetContextValue, BottomSheetProps } from './types';

const BottomSheetProvider = ({ children }: BottomSheetProps) => {
  const refActionSheet: any = useRef();
  const [selectedImage, setSelectedImage] = useState<ImageOrVideo>();

  const onActionSelected = useCallback((index: number) => {
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
              console.log('image', 'name', image);
              setSelectedImage(image);
            })
            .catch((error) => {
              console.log('error', error);
            });
          break;
        case 1:
          ImageCropPicker.openPicker({
            writeTempFile: true,
          })
            .then((image: ImageOrVideo) => {
              console.log('image', 'name', image);
              setSelectedImage(image);
            })
            .catch((error) => {
              console.log('error', error);
            });
          break;
        default:
          break;
      }
    } catch (error) {}
  }, []);
  const onShowActionSheet = useCallback(() => {
    refActionSheet?.current.show();
  }, []);

  const contextValue = useMemo<BottomSheetContextValue>(
    () => ({
      onShowActionSheet,
      selectedImage,
    }),
    [onShowActionSheet, selectedImage],
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
