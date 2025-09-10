
import { Category } from '../../Types/product.t';

export const GetSpecificCategory = async(id:string) => {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
    const {data} = await res.json();
    return data as Category;
} 