import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhySection } from "@/components/home/WhySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <IndustriesSection />
        <WhySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
