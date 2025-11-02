import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
