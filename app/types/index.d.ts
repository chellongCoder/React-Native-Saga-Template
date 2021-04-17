export interface UploadFileT {
  uri: string;
  type: string;
  name: string;
}

export type ProductRateT = {
  id: number;
  productId: number;
  userId: number;
  comment: string;
  name: string;
  createAt: string;
  image: string[];
};
