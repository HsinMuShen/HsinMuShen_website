import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PhotographySection } from "@/components/PhotographySection";
import { SketchingSection } from "@/components/SketchingSection";
import { WebsiteSection } from "@/components/WebsiteSection";
import { TravelSection } from "@/components/TravelSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WebsiteSection />
      <SketchingSection />
      <PhotographySection />
      <TravelSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
