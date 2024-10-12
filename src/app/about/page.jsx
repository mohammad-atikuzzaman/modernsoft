import About from "@/components/About";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="my-8 bg-[#030938] py-12 rounded-md">
      <section
        className="flex flex-col md:flex-row gap-4 justify-between max-w-screen-xl mx-auto"
        id="about">
        <div className="md:w-[40%]">
          <Image
            src="/icons/webfull.png"
            alt="modernsoft"
            height={500}
            width={500}
            className="w-[70%] mx-auto animatebounce"
          />
        </div>
        <div className="md:w-[60%]">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-blue-600">
              Who We Are
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              ModernSoft Innovations is a leading software development company
              offering innovative and custom software solutions for businesses
              and individuals. With a team of highly skilled professionals, we
              specialize in building high-performance software and mobile
              applications that help businesses achieve their goals and drive
              long-term success.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <h2 className="text-4xl font-semibold text-blue-600">
              What We Do
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              We specialize in Software Development, Software Testing, and Web &
              Mobile Application Development. Using the latest technologies and
              proven strategies, we create solutions that give our clients a
              competitive business advantage. From concept to completion, we
              help businesses leverage the power of technology to excel in their
              industries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
