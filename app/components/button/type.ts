import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface AppButtonType {
  labelStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  title?: string;
  onSubmit?: () => void;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  icon?: React.ReactNode;
}
