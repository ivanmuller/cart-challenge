export interface IProduct {
  code: string;
  internalCode: string;
  name: string;
  image: string,
  thumb: string,
  description: string;
  price: number;
  quantity: number;
  enabled: boolean;
}

export interface IDiscount {
  prodCode: string;
  name: string;
  conditionMethod: (prod: IProduct) => number;
  discount: number;
}

export interface IOrder {
  products: IProduct[];
  subTotalCost: number;
  totalCost: number;
  itemsQuantity: number;
  discounts: IDiscount[]
}

export interface ICheckout {
  products: IProduct[];
  order: IOrder;
  subTotalCost: number;
  totalCost: number;
  itemsQuantity: number;
  discounts: IDiscount[];
  scan(code: string, operation: string): this;
  remove(code: string): this;
  setDiscounts(): this;
  subtotal(): number;
  total(): number;
}

export interface IState {
  order: ICheckout;
  setOrder: (order: ICheckout) => void | any;
  modalOpened: boolean;
  modalData: IProduct | undefined;
  handleQuantityProds: (code: string, operation: string) => void;
  handleRemoveProds: (code: string) => void;
  handlePopupOpened: (status: boolean, prod?: any) => void
}
