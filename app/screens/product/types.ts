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

type ProductParamList = {
  [ROUTES.product]: { categoryId: number; title: string };
};
export interface ProductProps {
  route: RouteProp<ProductParamList, typeof ROUTES.product>;
}
