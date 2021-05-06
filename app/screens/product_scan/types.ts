import { RouteProp } from '@react-navigation/native';
import { ROUTES } from '../../config';
import { ProductRateT } from '../../types';
import { RelatedProduct } from '../product/types';
import { ShopT } from '../product_detail/types';

type ProductDetailParamList = {
  [ROUTES.product_detail]: {
    screen: string;
    params: { urlScan: string };
  };
};
export interface ProductDetailProps {
  route: RouteProp<ProductDetailParamList, typeof ROUTES.product_detail>;
}

export type PhotoSlider = {
  id: number;
  name: string;
  cover: string;
};

export interface DetailProductT {
  id: number;
  nameProduct: string; // name
  cost: number; // unit_price
  grootCost: number; // purchase_price
  codeProduct: string; // product_code
  verify: number; //admin_approval: 1
  rating: number; //rating
  countComments: number; //dang  thieu
  description: string; //description
  photosSlider: PhotoSlider[];
  relatedProducts: RelatedProduct[];
  productRate: ProductRateT[];
  shop?: ShopT;
  gotoUrl: string;
}

export type VerifyProductT = {
  server_key?: string;
  id_mahoa: string;
  input_verify: string;
};

export type ActiveProductT = {
  server_key?: string;
  id_mahoa: string;
  input_verify: string;
  token: string;
};
