'use client';
import React from "react";
import { subCategoriesOfCatigory } from "../../../../Types/subCategoriesOfCatigory";

const Cardsubcategories = ({
  categoryName,
  subCategories,
}: {
  categoryName: string;
  subCategories: subCategoriesOfCatigory[];
}) => {
  return (
    <div className="p-3 border rounded-lg bg-gray-50">
      <h3 className="font-bold text-green-700">{categoryName}</h3>
      <ul className="mt-2 space-y-1">
        {subCategories.map((sub, index) => (
          <li key={index} className="text-sm text-gray-700">
            {sub.results}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cardsubcategories;
