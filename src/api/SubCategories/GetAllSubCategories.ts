'use server'

import { Subcategory } from "../../Types/product.t";



export const GetAllSubCategories = async() => {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/subcategories');
    const {data} = await res.json();
    return data as Subcategory[];
} 