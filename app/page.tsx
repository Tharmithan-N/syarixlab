import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/hero";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import WebDesignSection from "./components/WebDesignSection/WebDesignSection";
import CloudStorageSection from "./components/CloudStorageSection/CloudStorageSection";
import SEOSection from "./components/SEOSection/SEOSection";
import LatestWorkSection from "./components/LatestWorkSection/LatestWorkSection";
import StatsSection from "./components/StatsSection/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import PricingSection from "./components/PricingSection/PricingSection";
import LatestNewsSection from "./components/LatestNewsSection/LatestNewsSection";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import DataAndAnalyticSection from "./components/DataAndAnalyticSection/dataandanalyticsSection";
import AISolutionSection from "./components/AISolutionSection/AISolutionSection";
import ResearchAndReportingSection from "./components/ResearchAndReportingSection/ResearchAndReportingSection";
import SoftwareAndSaasSection from "./components/SoftwareAndSaasSection/SoftwareAndSaasSection";
import DigitalMarketingSection from "./components/DigitalMarketingSection/DigitalMarketingSection";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";
import OurProcessSection from "./components/OurProcessSection/OurProcessSection";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <WebDesignSection />
      <SoftwareAndSaasSection />
      <DataAndAnalyticSection />
      <AISolutionSection />
      <ResearchAndReportingSection />
      <DigitalMarketingSection />
      {/* <SEOSection />
      <CloudStorageSection /> */}
      <WhyUsSection />
      <OurProcessSection />
      <LatestWorkSection />
      {/* <StatsSection /> */}
      <TestimonialsSection />
      <PricingSection />
      <LatestNewsSection />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}
