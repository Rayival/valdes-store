import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-navy">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectService={setSelectedService} />
        <PortfolioSection />
        <ProcessSection />
        <WhyChooseUs />
        <ContactSection preselectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}