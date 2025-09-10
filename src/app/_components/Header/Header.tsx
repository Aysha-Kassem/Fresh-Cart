"use client";

// next
import Image from "next/image";
import React from "react";

// swiper
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



const Header = () => {
  return (
    <header className="flex">
      <div className="w-2/3">
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src='/Images/slider1.jpg'
              alt="slide1"
              width={400} height={400} 
              className="object-cover h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src='/Images/slider2.jpg'
              alt="slide2"
              width={400} height={400} 
              className="object-cover h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src='/Images/slider3.jpg'
              alt="slide3"
              width={400} height={400} 
              className="object-cover h-[400px]"
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
      <div className="w-1/3">
        <Image src='/Images/banner1.jpg' width={400} height={400} alt="banner1" className="h-[200px] object-cover" />
        <Image src='/Images/banner2.jpg' width={400} height={400}  alt="banner2" className="h-[200px] object-cover" />
      </div>
    </header>
  );
};

export default Header;
