import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/hero";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DigitalMarketingSection from "./components/DigitalMarketingSection/DigitalMarketingSection";
import WebDesignSection from "./components/WebDesignSection/WebDesignSection";
import CloudStorageSection from "./components/CloudStorageSection/CloudStorageSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DigitalMarketingSection />
      <WebDesignSection />
      <CloudStorageSection />
    </>
  );
}
