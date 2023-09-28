export interface IProduct {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICategory {
  _id: string;
  name: string;
  icon: string;
}
