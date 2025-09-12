import { SubCategory } from "../../Types/SubCategories.t";


export const GetAllSubCategories = async() => {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/subcategories');
    const {data} = await res.json();
    return data as SubCategory[];
} 