import { ProductProps } from '../screens/product/types';
import { DetailProductT } from '../screens/product_detail/types';

export const mapListProduct = (productsApi: any[]): ProductProps[] => {
  return productsApi.map((value) => {
    return {
      id: value.id,
      name: value.name,
      rate: value.rate,
      countRate: value.countRate,
      point: value.point,
      price: value.price,
      featured_img: value.featured_img,
      rating: value.rating,
      unit_price: value.unit_price,
    };
  });
};

export const mapDetailProduct = (data: any): DetailProductT => {
  return {
    nameProduct: data.name,
    codeProduct: data.product_code,
    cost: data.unit_price,
    countComments: 9,
    grootCost: data.purchase_price,
    rating: data.rating,
    verify: data.admin_approval,
    description: data.description,
    photosSlider: data.photosSlider,
  };
};
