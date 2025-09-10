
// next
import Image from "next/image";
import React from "react";
import HeaderSwiper from "../HeaderSwiper/HeaderSwiper";

// swiper
// import CategorySwiper from "../CategorySwiper/CategorySwiper";
// import { GetAllCategories } from "../../../api/Categories/GetAllCategories";

const Header = async () => {
  // const categories = await GetAllCategories();

  return (
    <header>
      <div className="flex flex-col md:flex-row gap-4 mb-4 ">
        <div className="md:w-2/3">
          {/* <HeaderSwiper /> */}
        </div>
        <div className="md:w-1/3">
          <Image
            src="/Images/banner1.jpg"
            width={400}
            height={400}
            alt="banner1"
            className="h-[300px] object-cover"
          />
          <Image
            src="/Images/banner2.jpg"
            width={400}
            height={400}
            alt="banner2"
            className="h-[300px] object-cover"
          />
        </div>
      </div>
      <div>{/* <CategorySwiper /> */}</div>
    </header>
  );
};

export default Header;
