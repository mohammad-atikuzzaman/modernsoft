"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        // navigation={true} //you can use navigation by uncommenting this settings
        centeredSlides={true}
        slidesPerView={"auto"}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 3,
          // slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="mySwiper text-center">
        <SwiperSlide className="">
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}

          <div className="border">
            <Image
              src="/icons/web.png"
              alt="modernsoft"
              height={100}
              width={100}
            />
            <h3 className="font-semibold">Web Development</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
          <div>
            <Image
              src="/icons/mobile.png"
              alt="modernsoft"
              height={100}
              width={100}
            />
            <h3 className="font-semibold">Mobile Application</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}

          <div>
            <Image
              src="/icons/software.png"
              alt="modernsoft"
              height={100}
              width={100}
            />
            <h3 className="font-semibold">Software Dev</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
          <div>
            <Image
              src="/icons/uiux.png"
              alt="modernsoft"
              height={100}
              width={100}
            />
            <h3 className="font-semibold">UI/UX Design</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
          <div>
            <Image
              src="/icons/social.png"
              alt="modernsoft"
              height={100}
              width={100}
            />
            <h3 className="font-semibold">Digital Marketing</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
