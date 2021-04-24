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

export const mapListProductMore = (productsApi: any[]): ProductProps[] => {
  return productsApi.map((product) => {
    const { product_description: value } = product;
    return {
      id: product.id,
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
    id: data.id,
    nameProduct: data.name,
    codeProduct: data.product_code,
    cost: data.unit_price,
    countComments: 9,
    grootCost: data.purchase_price,
    rating: data.rating,
    verify: data.admin_approval,
    description: data.description || data?.product_description?.description,
    relatedProducts: data.related_products,
    photosSlider: data.product_description.photos.map((value: string, index: any) => {
      return {
        id: index,
        value,
        cover: value,
      };
    }),
    productRate: data.product_rate.map((value: any) => {
      return {
        id: value.id,
        productId: value.product_id,
        userId: value.user_id,
        comment: value.comment,
        name: value.name,
        createAt: value.created_at,
        image: value.image,
      };
    }),
    shop: data.shop
      ? {
          address: data.shop.address,
          mail: data.shop.email,
          name: data.shop.name,
          phone: data.shop.phone,
          subTitle: data.shop.meta_title,
          taxNumber: data.shop.ma_so_thue,
          website: data.shop.web_site,
        }
      : undefined,
    gotoUrl: data.goto_url,
  };
};

export const mapRelatedProducts = (data: any) => {
  return {
    id: data.id,
    rating: data.rating,
    productDescription: {
      featuredImg: data.product_description.featured_img,
      flashDealImg: data.product_description.flash_deal_img,
      id: data.product_description.id,
      language: data.product_description.language,
      name: data.product_description.name,
      photos: data.product_description.photos,
      productId: data.product_description.product_id,
      thumbnailImg: data.product_description.thumbnail_img,
      thumbnailoptimize: data.product_description.thumbnailoptimize,
    },
  };
};
