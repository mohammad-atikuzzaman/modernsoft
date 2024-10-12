import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Glance from "@/components/Glance";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import WhyChooseUs from "@/components/WhyChooseUs";



function HomePage() {
  return (
    <>
      <Hero/>
      <Services />
      <Projects />
      <About />
      <Glance />
      <WhyChooseUs />
      <Technologies/>
      <GetInTouch />
    </>
  );
}

export default HomePage;
