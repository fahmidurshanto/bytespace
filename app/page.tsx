import HeroSection from "./components/HeroSection";
import LogoBar from "./components/LogoBar";
import DiscoverSection from "./components/DiscoverSection";
import GrowthSection from "./components/GrowthSection";
import CTASection from "./components/CTASection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <DiscoverSection />
      <GrowthSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
