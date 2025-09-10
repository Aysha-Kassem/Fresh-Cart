import React from "react";
import { GetspecificProduct } from "../../../api/products/GetspecificProduct";
import { FaStar } from "react-icons/fa";
import ButtonCart from "../../_components/ButtonCart/ButtonCart";
import ButtonWishList from "../../_components/ButtonWishList/ButtonWishList";
// import ProductSwiper from "../../_components/ProductSwiper/ProductSwiper";

const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await GetspecificProduct(id);
  return (
    <section className="min-h-screen flex md:flex-col items-center justify-center p-8">
      <div className="md:w-1/3">{/* <ProductSwiper /> */}</div>
      <div className="md:w-2/3 grid gap-3 p-10">
        <h1 className="text-3xl font-bold">{product?.title}</h1>
        <p>{product?.description}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="font-semibold">{product.price} EGP</p>
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-500" /> {product.ratingsAverage}
          </div>
        </div>
        <div className="flex items-center justify-between gap-1 text-sm">
          <ButtonCart />
          <ButtonWishList />
        </div>
      </div>
    </section>
  );
};

export default Product;
