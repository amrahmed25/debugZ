import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
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
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <TechStack />
      <Categories />
      <FeaturedProjects />
      <WhyChoose />
      <HowItWorks />
      <CustomDev />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
