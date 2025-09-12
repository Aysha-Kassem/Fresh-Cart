import React from "react";
import { GetAllCategories } from "../../api/Categories/GetAllCategories";
import CardCategories from "../_components/FrorCategories/CardCategories/CardCategories";

const Categories = async () => {
  const categories = await GetAllCategories();

  return (
    <div className="grid items-center p-10 px-20 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-5 w-full">
        {categories.map((category, index: number) => (
          <CardCategories key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
