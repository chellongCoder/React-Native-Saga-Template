export interface ProductDetailScreen {}

export interface DetailProductT {
  nameProduct: string; // name
  cost: number; // unit_price
  grootCost: number; // purchase_price
  codeProduct: string; // product_code
  verify: number; //admin_approval: 1
  rating: number; //rating
  countComments: number; //dang  thieu
  description: string; //description
  photosSlider: string[];
}
