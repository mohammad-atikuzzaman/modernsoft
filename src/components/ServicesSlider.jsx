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
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    autoplaySpeed: 2000,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}>
        <div>
          <img src="/icons/web.png" alt="" className="w-20 h-20" />
          <h3 className="">1</h3>
        </div>
        <div>
          <img src="/icons/mobile.png" alt="" className="w-20 h-20" />
          <h3 className="">2</h3>
        </div>
        <div>
          <img src="/icons/software.png" alt="" className="w-20 h-20" />
          <h3 className="text-center">2</h3>
        </div>
        <div>
          <img src="/icons/uiux.png" alt="" className="w-20 h-20" />
          <h3 className="">2</h3>
        </div>
        <div>
          <img src="/icons/social.png" alt="" className="w-20 h-20" />
          <h3 className="">2</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          <FaArrowAltCircleLeft  className="text-2xl text-[#5C1AF8]"/>
        </button>
        <button className="button ml-4" onClick={next}>
          <FaArrowAltCircleRight  className="text-2xl text-[#5C1AF8]"/>
        </button>
      </div>
    </div>
  );
};

export default ServicesSlider;
