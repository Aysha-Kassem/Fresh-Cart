"use client";

// next
import Image from "next/image";
import React from "react";


// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const HeaderSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src="/Images/slider1.jpg"
            alt="slide1"
            width={400}
            height={400}
            className="object-cover h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Images/slider2.jpg"
            alt="slide2"
            width={400}
            height={400}
            className="object-cover h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Images/slider3.jpg"
            alt="slide3"
            width={400}
            height={400}
            className="object-cover h-[400px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeaderSwiper;
