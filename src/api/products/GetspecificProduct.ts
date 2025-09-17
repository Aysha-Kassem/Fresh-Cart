'use server'

import { Product } from "../../Types/product.t";

export const GetspecificProduct = async(id:string) => {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    const {data} = await res.json();
    return data as Product;
} 