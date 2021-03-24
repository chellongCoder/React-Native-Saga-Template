import { ProductProps } from '../screens/product/types';

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
      unit_price: value.unit_price
    };
  });
};
