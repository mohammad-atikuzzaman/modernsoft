import Image from "next/image";
import React from "react";
import "../styles/index.css"
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section className="hero pt-12 bg-blue-100 rounded-md" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/image/heroimage.png"
          alt="modernsoft"
          height={500}
          width={500}
          className=" rounded-lg animatebounce"
        />
        <div className="">
          {/* <h1 className="text-4xl font-medium">
            Welcome to
            <span className="text-blue-400"> ModernSoft Innovations</span>
          </h1> */}
          <TypewriterText words={"ModernSoft Innovations"}/>

          {/* <h1 className="text-4xl font-medium mt-20" >
            Your Partner for
            <br />
            <span className="mt-6 inline-block">
              <span className="font-bold text-[#3F4DE8]">Customized</span>
              <span className="font-bold text-blue-400">
                <span className="text-blue-500"> Digital</span> Solution.
              </span>
            </span>
          </h1> */}
          <h1 className="glitch mt-8">
            Your partner for Customized Digital Solution
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
