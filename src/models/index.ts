export interface ProductListResponse {
  result: string;
  data: ProductListData[];
}

export interface ProductListData {
  id: string;
  SKU: string;
  name: string;
  brandName: string;
  mainImage: string;
  price: ProductPrice;
  sizes: string[];
  stockStatus: string;
  colour: string;
  description: string;
}

export interface ProductPrice {
  amount: string;
  currency: string;
}

export interface Cart {
  product: ProductListData;
  qty: number;
}
