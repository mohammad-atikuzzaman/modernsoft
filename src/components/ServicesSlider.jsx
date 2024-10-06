"use client";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/index.css";

import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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
    centerPadding: "60px",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
            <img src="/icons/web.png" alt="" className="w-20 h-20 mx-auto" />
            <h3 className="">Web Development</h3>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <img src="/icons/mobile.png" alt="" className="w-20 h-20 mx-auto" />
            <h3 className="">Mobile Application</h3>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <img
              src="/icons/software.png"
              alt=""
              className="w-20 h-20 mx-auto"
            />
            <h3 className="text-center">Software Dev</h3>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <img src="/icons/uiux.png" alt="" className="w-20 h-20 mx-auto" />
            <h3 className="">UI/UX Design</h3>
          </div>
        </div>
        <div className="text-center space-y-6 ">
          <div className="space-y-6 border rounded-md mx-6 p-4 border-purple-900">
            <img src="/icons/social.png" alt="" className="w-20 h-20 mx-auto" />
            <h3 className="">Digital Marketing</h3>
          </div>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }} className="mt-8">
        <button className="button" onClick={previous}>
          <FaArrowAltCircleLeft className="text-2xl text-[#5C1AF8]" />
        </button>
        <button className="button ml-4" onClick={next}>
          <FaArrowAltCircleRight className="text-2xl text-[#5C1AF8]" />
        </button>
      </div>
    </div>
  );
};

export default ServicesSlider;
