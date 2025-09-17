'use server'

import { Subcategory } from "../../Types/product.t";


export const GetAllSubCategoriesOnCategory = async(id:string) => {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
    const {data} = await res.json();
    return data as Subcategory[];
} 