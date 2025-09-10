"use server";

import React from "react";
import Header from "./_components/Header/Header";
import CardPost from "./_components/CardPost/CardPost";
import { GetAllProducts } from "../api/products/GetAllProducts";

const Home = async () => {
  const allProducts = await GetAllProducts();

  return (
    <div className="font-sans grid justify-center items-center min-h-screen p-8 sm:p-20">
      <Header />

      {allProducts && allProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {allProducts.map((product, indx:number) => (
            <CardPost key={indx} product={product}/>
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

export default Home;
