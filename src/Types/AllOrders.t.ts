import { PaymentFormSchemaType } from "../Schema/payment.s";
import { Brand, Category, Subcategory } from "./product.t";
import { AllCartProduct } from "./UserCart.t";

export interface AllOrdersT {
  shippingAddress: PaymentFormSchemaType;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User;
  cartItems: AllCartProduct[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
  paidAt?: string;
}


export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Product {
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

