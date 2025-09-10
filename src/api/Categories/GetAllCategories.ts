import { Category } from "../../Types/category.t";


export const GetAllCategories = async() => {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
    const {data} = await res.json();
    return data as Category[];
} 