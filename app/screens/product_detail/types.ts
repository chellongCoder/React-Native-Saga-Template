import { RouteProp } from '@react-navigation/native';
import { ROUTES } from '../../config';
import { UploadFileT } from '../../types';
import { RelatedProduct } from '../product/types';

type ProductDetailParamList = {
  [ROUTES.product_detail]: {
    screen: string;
    params: { productId: number };
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
export interface DetailProductT {
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
}

export interface RelatedProductT {
  id: number;
  rating: string;
  product_description: {
    featured_img: string;
    flash_deal_img: string;
    id: number;
    language: string;
    name: string;
    photos: string[];
    product_id: number;
    thumbnail_img: string;
    thumbnailoptimize: string;
  };
}

export interface PostCommentParamsT {
  product_id: number;
  comment: string;
  rating_1: number;
  rating_2: number;
  rating_3: number;
  rating_4: number;
  rating_5: number;
  files: UploadFileT[];
  token?: string;
}

export type PushStarT = {
  index: number;
  value: number;
};
