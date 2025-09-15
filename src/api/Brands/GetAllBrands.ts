import { Brands } from "../../Types/Brands.t";

export const GetAllBrands = async() => {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
    const {data} = await res.json();
    return data as Brands[];
} 