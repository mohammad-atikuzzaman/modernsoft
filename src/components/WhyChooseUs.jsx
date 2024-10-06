import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="mt-24">
      <h2 className="text-4xl text-center">
        Why <span className="text-blue-400 font-semibold">Choose Us?</span>
      </h2>
      <main className="flex flex-col-reverse md:flex-row mt-12">
        <div className="space-y-16 md:w-[60%]">
          <div className="flex items-center gap-4">
            <img src="/icons/plan.png" alt="modernsoft" className="w-6 h-6"/>
            <div className="space-y-4">
              <h2 className="font-medium text-2xl">
                Tailored Digital Solutions
              </h2>
              <p className="text-lg text-[#00000096]">
                We specialize in providing custom software development and
                digital solutions that align perfectly with your business goals,
                ensuring your unique needs are met.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/team.png" alt="modernsoft"  className="w-6 h-6"/>
            <div className="space-y-4">
              <h2 className="font-medium text-2xl">
                Experienced Software Development Team
              </h2>
              <p className="text-lg text-[#00000096]">
                Our team of expert software developers and designers are
                proficient in the latest technologies and industry best
                practices, ensuring the delivery of innovative, high-quality
                solutions that drive your business forward
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/reocord.png" alt="modernsoft"  className="w-6 h-6"/>
            <div className="space-y-4">
              <h2 className="font-medium text-2xl">
                Proven Track Record of Success
              </h2>
              <p className="text-lg text-[#00000096]">
                With a strong portfolio of satisfied clients and a reputation
                for delivering successful software projects, we help businesses
                achieve measurable results and sustainable growth.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/pricing.png" alt="modernsoft"  className="w-6 h-6"/>
            <div className="space-y-4">
              <h2 className="font-medium text-2xl">
                Affordable and Scalable Solutions
              </h2>
              <p className="text-lg text-[#00000096]">
                We offer cost-effective and scalable solutions, making it easy
                for businesses of any size to benefit from top-tier software
                development without breaking the budget.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/icons/support.png" alt="modernsoft"  className="w-6 h-6"/>
            <div className="space-y-4">
              <h2 className="font-medium text-2xl">
                Comprehensive End-to-End Support
              </h2>
              <p className="text-lg text-[#00000096]">
                We specialize in providing custom software development and
                digital solutions that align perfectly with your business goals,
                ensuring your unique needs are met.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[40%]">
          <img src="/image/presentation.png" alt="modernsoft" />
        </div>
      </main>
    </section>
  );
};

export default WhyChooseUs;
