export interface ProductProps {
  id: number;
  name: string;
  rate: number;
  countRate: number;
  point: number;
  price: number;
  featured_img: string;
  rating: number;
  unit_price: string;
  photos: string;
  thumbnail_img: string;
  unit: string;
  video_provider: string;
  video_link: string;
  quantity: number;
  description: string;
  created_at: string;
  added_by: string;
}

export interface ProductCategoryProps {
  category_id: string;
  created_at: string;
  id: number;
  image: string;
  image_thumb: string;
  name: string;
  order: number;
  position: number;
  product_id: string;
  products: [ProductProps];
  status: number;
  subsubcategories: string;
  updated_at: string;
}

export interface Action {
  meta: {
    payload: any;
    apiEndPoint: string;
    callApi: (params: any) => void;
  };
  type: string;
}
