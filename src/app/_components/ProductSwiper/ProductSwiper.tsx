'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import photo from '../../../../public/Images/slider1.jpg'
import Image from "next/image";

const ProductSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <Image src={photo} alt="Product Image" width={500} height={500} className="h-full" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
