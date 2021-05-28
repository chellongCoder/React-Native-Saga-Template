import { ReactNode } from 'react';
import { ImageOrVideo } from 'react-native-image-crop-picker';

export interface BottomSheetProps {
  children: ReactNode;
}

export interface BottomSheetContextValue {
  onShowActionSheet: () => void;
  selectedImage?: ImageOrVideo;
}
