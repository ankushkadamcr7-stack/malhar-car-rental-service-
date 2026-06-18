import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Fleet from "../components/sections/Fleet";
import Packages from "../components/sections/Packages";
import WhyChoose from "../components/sections/WhyChoose";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Packages />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
