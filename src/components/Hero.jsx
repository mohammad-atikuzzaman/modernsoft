import React from "react";

const Hero = () => {
  return (
    <section className="hero mt-12" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/image/heroimage.png"
          alt="modernsoft"
          className=" rounded-lg "
        />
        <div className="">
          <h1 className="text-4xl font-medium">
            Welcome to
            <span className="text-blue-400"> ModernSoft Innovations</span>
          </h1>

          <h1 className="text-4xl font-medium mt-20">
            Your Partner for
            <br />
            <div className="mt-6">
              <span className="font-bold text-[#3F4DE8]">Customized</span>
              <span className="font-bold text-blue-400">
                <span className="text-blue-500"> Digital</span> Solution.
              </span>
            </div>
          </h1>
          <p className="py-6 text-[#000000A3]">
            At ModernSoft Innovations, we provide tailored digital solutions to
            help businesses thrive in today’s competitive digital landscape. Our
            expert team is dedicated to delivering high-quality software
            development services, customized to meet your unique business needs.
          </p>
          <button className="btn bg-blue-600 text-white mt-6">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
