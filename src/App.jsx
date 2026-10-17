import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Categories from "./components/sections/Categories";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import WhyChoose from "./components/sections/WhyChoose";
import HowItWorks from "./components/sections/HowItWorks";
import CustomDev from "./components/sections/CustomDev";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import FinalCTA from "./components/sections/FinalCTA";

export default function App() {
  return (
    <div
      id="home"
      style={{ background: "#FAFAFA", minHeight: "100vh" }}
    >
      <Analytics />
      <Nav />

      <div id="tech-stack" className="scroll-mt-[80px]">
        <TechStack />
      </div>

      <div id="categories" className="scroll-mt-[80px]">
        <Categories />
      </div>

      <div id="projects" className="scroll-mt-[80px]">
        <FeaturedProjects />
      </div>

      <div id="why-choose" className="scroll-mt-[80px]">
        <WhyChoose />
      </div>

      <div id="how-it-works" className="scroll-mt-[80px]">
        <HowItWorks />
      </div>

      <div id="custom-project" className="scroll-mt-[80px]">
        <CustomDev />
      </div>

      <div id="testimonials" className="scroll-mt-[80px]">
        <Testimonials />
      </div>

      <div id="faq" className="scroll-mt-[80px]">
        <FAQ />
      </div>

      <div id="contact" className="scroll-mt-[80px]">
        <Contact />
      </div>

      <div id="pricing" className="scroll-mt-[80px]">
        <FinalCTA />
      </div>

      <Footer />
    </div>
  );
}