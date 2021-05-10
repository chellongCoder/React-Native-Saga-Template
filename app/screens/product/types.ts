import { RouteProp } from '@react-navigation/core';
import { ROUTES } from '../../config';

export interface ProductProps {
  id: number;
  name: string;
  rate: number;
  countRate: number;
  point: number;
  price: number;
  featuredImg: string;
  rating: number;
  unitPrice: string;
  photos: string;
  thumbnailImg: string;
  unit: string;
  videoProvider: string;
  videoLink: string;
  quantity: number;
  description: string;
  createdAt: string;
  addedBy: string;
}

export interface ProductCategoryProps {
  categoryId: string;
  createdAt: string;
  id: string;
  image: string;
  imageThumb: string;
  name: string;
  order: number;
  position: number;
  productId: string;
  products: [ProductProps];
  status: number;
  subSubCategories: string;
  updatedAt: string;
}

export interface Action {
  meta: {
    payload: any;
    apiEndPoint: string;
    callApi: (params: any) => void;
  };
  type: string;
}

export interface RelatedProduct {
  id: number;
  rating: number;
  productDescription: {
    featuredImg: string;
    flashDealImg: string;
    id: number;
    language: string;
    name: string;
    photos: string[];
    productId: number;
    thumbnailImg: string;
    thumbnailoptimize: string;
  };
}

export type ProductSearchPramsT = {
  search_name: string;
  category_id: string;
  page: number;
  access_token: string;
};

type ProductParamList = {
  [ROUTES.product]: { categoryId: number; title: string };
};
export interface ProductPropsScreen {
  route: RouteProp<ProductParamList, typeof ROUTES.product>;
}
