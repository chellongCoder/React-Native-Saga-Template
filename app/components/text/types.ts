import { ReactNode } from 'react';
import { ParsedTextProps as ParsedTextPropsBase } from 'react-native-parsed-text';

export type ParsedTextProps = ParsedTextPropsBase & {
  children: ReactNode;
  isViewHtml?: boolean;
  isLongText?: boolean;
  showMore?: boolean;
  numberOfLines?: number;
};
