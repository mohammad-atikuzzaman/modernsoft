import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 mt-24" id="about">
      <div className="md:w-[40%]">
        <img src="/icons/webfull.png" alt="" className="w-[70%] mx-auto"/>
      </div>
      <div className="md:w-[60%]">
        <div className="">
          <h2  className="text-4xl">Who We Are</h2>
          <p className="text-[#00000096]">
            ModernSoft Innovations is a leading software development company
            offering innovative and custom software solutions for businesses and
            individuals. With a team of highly skilled professionals, we
            specialize in building high-performance software and mobile
            applications that help businesses achieve their goals and drive
            long-term success.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-4xl">What We Do</h2>
          <p className="text-[#00000096]">
            We specialize in Software Development, Software Testing, and Web &
            Mobile Application Development. Using the latest technologies and
            proven strategies, we create solutions that give our clients a
            competitive business advantage. From concept to completion, we help
            businesses leverage the power of technology to excel in their
            industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;