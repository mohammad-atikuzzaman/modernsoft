import React from 'react';
import ServicesSlider from './ServicesSlider';
import ServiceSwiperSlider from './ServiceSwiperSlider';

const Services = () => {
  return (
    <section className="mt-8" id="services">
      <div className="text-center">
        <h2 className="text-3xl font-semibold underline">
          <span className="text-blue-400 underline">Services</span>
          <span className="font-medium underline"> we Offer</span>
        </h2>
        <p className="mt-12 mb-16 font-semibold text-gray-500">
          We can provide the digital presence of your requirements with great
          design, quality development & aftersale service.
        </p>
      </div>
      <ServicesSlider />
      {/* <ServiceSwiperSlider/> */}
    </section>
  );
};

export default Services;