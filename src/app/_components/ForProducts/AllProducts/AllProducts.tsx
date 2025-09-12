import React from "react";

// api
import { GetAllProducts } from "../../../../api/products/GetAllProducts";

// component
import CardPost from "../CardPost/CardPost";

// ui
import { Input } from "../../../../components/ui/input";

const AllProducts = async () => {
  const allProducts = await GetAllProducts();

  return (
    <div className="py-5 flex flex-col justify-center items-center m-10 md:px-20">
      {/* Search input */}
      <Input
        type="search"
        placeholder="Search..."
        className="max-w-md mb-5 px-4 py-2 !bg-transparent !text-gray-700"
      />
      {/* display all Products */}
      {allProducts && allProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProducts.map((product, indx: number) => (
            <CardPost key={indx} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products available.
        </p>
      )}
    </div>
  );
};

export default AllProducts;
