import About from "@/components/About";
import Glance from "@/components/Glance";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

function HomePage() {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Glance/>
      <WhyChooseUs/>
    </div>
  );
}

export default HomePage;
