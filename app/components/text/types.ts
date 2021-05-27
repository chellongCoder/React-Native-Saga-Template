import { ReactNode } from 'react';
import { ParsedTextProps as ParsedTextPropsBase } from 'react-native-parsed-text';
import { COLORS } from '../../constants';

export type ParsedTextProps = ParsedTextPropsBase & {
  children: ReactNode;
  isViewHtml?: boolean;
  isLongText?: boolean;
  showMore?: boolean;
  numberOfLines?: number;
  fontType?: 'fontRegular' | 'fontBold' | 'fontItalic' | 'fontLight';
  color?: string;
  fontSize?: number;
  activeColor?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  isPress?: boolean;
  onPress?: () => void;
};
