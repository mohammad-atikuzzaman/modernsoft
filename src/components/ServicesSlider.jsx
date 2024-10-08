"use client";

import React, { useRef, Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/index.css";

import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";


const ServicesSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container overflow-hidden">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}>
        <div className="text-center  ">
          <div className="space-y-6 border rounded-md p-4 mx-6 border-purple-900">
            <Image
              src="/icons/web.png"
              alt="modernsoft"
              height={100}
              width={100}
              className="w-20 h-20 mx-auto"
            />
            <h3 className="font-semibold">Web Development</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, adipisci!
            </p>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <Image
              src="/icons/mobile.png"
              alt="modernsoft"
              height={100}
              width={100}
              className="w-20 h-20 mx-auto"
            />
            <h3 className="font-semibold">Mobile Application</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, adipisci!
            </p>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <Image
              src="/icons/software.png"
              alt="modernsoft"
              height={100}
              width={100}
              className="w-20 h-20 mx-auto"
            />
            <h3 className="font-semibold">Software Dev</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, adipisci!
            </p>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <Image
              src="/icons/uiux.png"
              alt="modernsoft"
              height={100}
              width={100}
              className="w-20 h-20 mx-auto"
            />
            <h3 className="font-semibold">UI/UX Design</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, adipisci!
            </p>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <Image
              src="/icons/social.png"
              alt="modernsoft"
              height={100}
              width={100}
              className="w-20 h-20 mx-auto"
            />
            <h3 className="font-semibold">Digital Marketing</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, adipisci!
            </p>
          </div>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }} className="mt-8 space-x-12">
        <button className="button" onClick={previous}>
          <FaArrowAltCircleLeft className="text-4xl text-[#5C1AF8]" />
        </button>
        <button className="button ml-4" onClick={next}>
          <FaArrowAltCircleRight className="text-4xl text-[#5C1AF8]" />
        </button>
      </div>
    </div>
  );
};

export default ServicesSlider;
