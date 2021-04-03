import { ProductProps, ProductCategoryProps } from '../screens/product/types';
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
      featuredImg: value.featured_img,
      rating: value.rating,
      unitPrice: value.unit_price,
      photos: value.photos,
      thumbnailImg: value.thumbnail_img,
      unit: value.unit,
      videoProvider: value.video_provider,
      videoLink: value.video_link,
      quantity: value.quantity,
      description: value.description,
      createdAt: value.created_at,
      addedBy: value.added_by,
    };
  });
};

export const mapListProductCategory = (productsApi: any[]): ProductCategoryProps[] => {
  return productsApi
    ? productsApi.map((value) => {
        return {
          categoryId: value.category_id,
          createdAt: value.created_at,
          id: value.id,
          image: value.image,
          imageThumb: value.image_thumb,
          name: value.name,
          order: value.order,
          position: value.position,
          productId: value.product_id,
          products: value.products,
          status: value.status,
          subSubCategories: value.subsubcategories,
          updatedAt: value.updated_at,
        };
      })
    : [];
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
    photosSlider: data.product_description.photos.map((value: string, index: any) => {
      return {
        id: index,
        value,
        cover: value,
      };
    }),
  };
};
