import { Brand, Category, Subcategory } from "./product.t"

export interface UserWishlist {
  status: string
  count: number
  data: Wishlist[]
}

export interface Wishlist {
  sold?: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  priceAfterDiscount?: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}