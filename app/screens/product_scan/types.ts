import { RouteProp } from '@react-navigation/native';
import { ROUTES } from '../../config';
import { RelatedProduct } from '../product/types';

type ProductDetailParamList = {
  [ROUTES.product_detail]: {
    screen: string;
    params: { urlScan: string };
  };
};
export interface ProductDetailProps {
  route: RouteProp<ProductDetailParamList, typeof ROUTES.product_detail>;
}

type PhotoSlider = {
  id: number;
  name: string;
  cover: string;
};

export type ProductRateT = {
  id: number;
  productId: number;
  userId: number;
  comment: string;
  name: string;
  createAt: string;
  image: string[];
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
}
