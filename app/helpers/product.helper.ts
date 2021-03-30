import { ProductProps, ProductCategoryProps } from '../screens/product/types';

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
      photos: value.photos,
      thumbnail_img: value.thumbnail_img,
      unit: value.unit,
      video_provider: value.video_provider,
      video_link: value.video_link,
      quantity: value.quantity,
      description: value.description,
      created_at: value.created_at,
      added_by: value.added_by,
    };
  });
};

export const mapListProductCategory = (productsApi: any[]): ProductCategoryProps[] => {
  return productsApi.map((value) => {
    return {
      category_id: value.category_id,
      created_at: value.created_at,
      id: value.id,
      image: value.image,
      image_thumb: value.image_thumb,
      name: value.name,
      order: value.order,
      position: value.position,
      product_id: value.product_id,
      products: value.products,
      status: value.status,
      subsubcategories: value.subsubcategories,
      updated_at: value.updated_at,
    };
  });
};
