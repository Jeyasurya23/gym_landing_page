import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Program from "../components/Programs";
import WhyChooseUs from "../components/WhyChooseUs";
import Trainers from "../components/Trainers";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Program />
      <Features />
      <WhyChooseUs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}