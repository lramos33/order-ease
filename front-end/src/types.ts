export enum ESidebarOptions {
  HOME = "home",
  MENU = "menu",
  ORDERS = "orders",
  TABLES = "tables",
  HISTORY = "history",
  SETTINGS = "settings",
}

export enum EENPaymentMethod {
  CASH = "Cash",
  CARD = "Card",
  QR_CODE = "QR Code",
}

// <---------- API ---------->

export enum EOrderStatus {
  PAID = "PAID",
  DONE = "DONE",
  WAITING = "WAITING",
  IN_PRODUCTION = "IN_PRODUCTION",
}

export enum EPaymentMethod {
  CASH = "CASH",
  CARD = "CARD",
  QR_CODE = "QR_CODE",
}

export interface IOrder {
  _id: number;
  table: string;
  createdAt: string;
  status: EOrderStatus;
  paymentMethod?: EPaymentMethod;
  products: {
    _id: string;
    note?: string;
    quantity: number;
    product: {
      _id: string;
      name: string;
      price: number;
      imagePath: string;
    };
  }[];
}

export interface ICategory {
  _id: string;
  name: string;
  icon: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  category: string;
  imagePath: string;
  description: string;
  ingredients: IIngredient[];
}

interface IIngredient {
  _id: string;
  name: string;
  icon: string;
}
