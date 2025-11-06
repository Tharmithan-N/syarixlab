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
      <HeroSection id="home"/>
      <ServicesSection id="our_services"/>
      <WebDesignSection id="webdesign"/>
      <SoftwareAndSaasSection id="software"/>
      <DataAndAnalyticSection id="data"/>
      <AISolutionSection id="ai"/>
      <ResearchAndReportingSection id="research"/>
      <DigitalMarketingSection id="marketing"/>
      {/* <SEOSection />
      <CloudStorageSection /> */}
      <WhyUsSection id="why_us"/>
      <OurProcessSection id="our_process"/>
      <LatestWorkSection id="latest_works"/>
      {/* <StatsSection /> */}
      <TestimonialsSection />
      <PricingSection id="pricing"/>
      <LatestNewsSection />
      <ContactForm id="contact_us"/>
      {/* <Footer /> */}
    </>
  );
}
