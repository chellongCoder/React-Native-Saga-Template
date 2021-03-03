import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface AppButtonType {
  labelStyles: StyleProp<TextStyle>;
  isLoadingVisible: boolean;
  style: StyleProp<ViewStyle>;
  title: string;
  onSubmit: () => void;
}
