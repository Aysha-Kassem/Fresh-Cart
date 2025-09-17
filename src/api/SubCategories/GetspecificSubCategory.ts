'use server'

import { Subcategory } from "../../Types/product.t";


export const GetspecificSubCategory = async(id:string) => {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`);
    const {data} = await res.json();
    return data as Subcategory;
} 