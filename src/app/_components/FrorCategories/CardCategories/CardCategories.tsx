import React from "react";


// type
import { Category } from "../../../../Types/category.t";
import { GetAllSubCategoriesOnCategory } from "../../../../api/SubCategories/GetAllSubCategoriesOnCategory";
import Cardsubcategories from "../Cardsubcategories/Cardsubcategories";



const CardCategories = async ({ category }: { category: Category }) => {
  const subCategories = await GetAllSubCategoriesOnCategory(category._id)  
  return (
    <Cardsubcategories category={category} subCategories={subCategories} />
  );
};

export default CardCategories;
