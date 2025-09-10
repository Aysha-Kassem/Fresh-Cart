"use client";
import React from "react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

const ProductSwiper = () => {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src='/Images/banner1.jpg' alt="slide1" fill className="object-cover h-[400px]" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSwiper;