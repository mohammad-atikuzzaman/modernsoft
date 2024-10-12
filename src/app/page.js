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
    <div className="space-y-24">
      <Hero/>
      <Services />
      <Projects />
      <About />
      <Glance />
      <WhyChooseUs />
      <Technologies/>
      <GetInTouch />
    </div>
  );
}

export default HomePage;
