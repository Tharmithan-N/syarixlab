import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/hero";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DigitalMarketingSection from "./components/DigitalMarketingSection/DigitalMarketingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DigitalMarketingSection />
    </>
  );
}
