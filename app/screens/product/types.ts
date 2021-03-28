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
}

export interface Action {
  meta: {
    payload: any;
    apiEndPoint: string;
    callApi: (params: any) => void;
  };
  type: string;
}
