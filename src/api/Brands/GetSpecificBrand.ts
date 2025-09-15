import { Brands } from "../../Types/Brands.t";

export const GetSpecificBrand = async(id:string) => {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
    const {data} = await res.json();
    return data as Brands;
} 