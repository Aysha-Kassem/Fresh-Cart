'use server'

import { Product } from "../../Types/product.t";

export const GetAllProducts = async() => {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    const {data} = await res.json();
    return data as Product[];
} 