import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReadBelowSection from "@/components/ReadBelowSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyUsSection from "@/components/WhyUsSection";
import StatisticsSection from "@/components/StatisticsSection";
import CatalogSection from "@/components/CatalogSection";
import OurWorksSection from "@/components/OurWorksSection";
import StepsSection from "@/components/StepsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
        <ReadBelowSection />
        <WelcomeSection />
        <WhyUsSection />
        <StatisticsSection />
        <CatalogSection />
        <OurWorksSection />
      <StepsSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
