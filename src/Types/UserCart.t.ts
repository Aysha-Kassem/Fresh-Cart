import { Brand, Category, Subcategory } from "./product.t";



export interface Cart {
  cartId: string;
  data: UserCart;
  numOfCartItems:number,
  status:string
}

export interface UserCart {
  _id: string;
  cartOwner: string;
  products: AllCartProduct[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface AllCartProduct {
  count: number;
  _id: string;
  product: CartProduct;
  price: number;
}

export interface CartProduct {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}
