import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <section className="mt-24 py-12 rounded-md" id="services">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-semibold underline">
            <span className="text-blue-400 underline">Services</span>
            <span className="underline"> we Offer</span>
          </h2>
          <p className="mt-8 mb-16 font-semibold text-gray-500">
            We can provide the digital presence of your requirements with great
            design, quality development & aftersale service.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <Service
            src={"/icons/web.png"}
            title={"Web Development"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, saepe."}
          />
          <Service
            src={"/icons/software.png"}
            title={"Software Development"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, saepe."}
          />
          <Service
            src={"/icons/uiux.png"}
            title={"Ui/UX Design"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, saepe."}
          />
          <Service
            src={"/icons/social.png"}
            title={"Digital Marketing"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, saepe."}
          />
          <Service
            src={"/icons/support.png"}
            title={"24/7 Support"}
            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, saepe."}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Services;
