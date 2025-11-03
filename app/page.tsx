import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/hero";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DigitalMarketingSection from "./components/DigitalMarketingSection/DigitalMarketingSection";
import WebDesignSection from "./components/WebDesignSection/WebDesignSection";
import CloudStorageSection from "./components/CloudStorageSection/CloudStorageSection";
import SEOSection from "./components/SEOSection/SEOSection";
import LatestWorkSection from "./components/LatestWorkSection/LatestWorkSection";
import StatsSection from "./components/StatsSection/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import PricingSection from "./components/PricingSection/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DigitalMarketingSection />
      <WebDesignSection />
      <CloudStorageSection />
      <SEOSection />
      <LatestWorkSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
